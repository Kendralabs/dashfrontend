import React, { useReducer, useState } from 'react'
import { act } from 'react-dom/test-utils';
import styled, { css } from 'styled-components/macro'
import GraphedData from '../../../data/GraphedData';
import { ArryedData, graphsData, Infos, reducer } from '../../../data/MenuData';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';
import '../Styledbase.css'
import { getKeysAndUnits } from '../../../data/SpecialFucntions';
import Analysis from '../../../data/Analysis';
import EnergyProductionGraph from '../../../data/EnergyProductionGraph';

const customBoxSettings = css`
    flex: 1;
    width: 100%;
    min-height: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 300px;
    border: 2px solid #7A838C;
    border-radius: 3px;
    position: relative;

    .arrows--container {
        position: absolute;
        top:0px;
        left:0px;
        display:flex;
        align-items: center;
        justify-content: center;
        gap:5px;
    }
    .title--container{
        position: absolute;
        top:0px;
        right: 10px;

        h4 {
            font-size: 18px;
            color: #7A838C;
            font-weight: 400;
        }
     }
`;
const customRowSettings = css`
    width: 100%;
    display: flex;
    gap: 5px;
    padding: 5px;
`;

export const Row = styled.div`
    ${customRowSettings}
`;
export const Cell = styled.div`
    ${customBoxSettings}
`;



const BankEnergi = () => {
    const { carbonExported, elexonDataExported,
        freqElexonExported, solarExported,
        transmitElexonExported, windOffShoreExported,
        windOnShoreExported, priceElexonExported, energyFuel } = Infos(); 

    const [{ ids }, dispatch] = useReducer(reducer, {
        ids: {
            carbonDataI: 0,
            elexonData: 0,
            elexonPriceData: 0,
            elexonFreqData: 0,
            elexonTransmitData: 0,
            solarData: 0,
            windOffData: 0,
            windOnData: 0,
            tempData: 0
        }
    })

    const getDataAnd = (string, type) => {
        const returnedObj = {}
        switch (string) {
            case 'carbon':
                returnedObj.data = carbonExported;
                returnedObj.id = ids.carbonDataI;
                break;
            case 'elexon':
                returnedObj.data = elexonDataExported;
                returnedObj.id = ids.elexonData;
                break;
            case 'solar':
                returnedObj.data = solarExported;
                returnedObj.id = ids.solarData;
                break;
            case 'elexonprice':
                returnedObj.data = priceElexonExported;
                returnedObj.id = ids.elexonPriceData;
                break;
            case 'energyfrequency':
                returnedObj.data = freqElexonExported;
                returnedObj.id = ids.elexonFreqData;
                break;
            case 'energytransmit':
                returnedObj.data = transmitElexonExported;
                returnedObj.id = ids.elexonTransmitData;
                break;
            case 'wind':
                if (type == 'on') {
                    returnedObj.data = windOnShoreExported;
                    returnedObj.id = ids.windOnData;
                    break;
                } else if (type == 'off') {
                    returnedObj.data = windOffShoreExported;
                    returnedObj.id = ids.windOffData;
                }
                break;
            default:
                break;
        }
        return returnedObj;
    }
    return (
        <div className="main--bank-ai-container">
            <h1>Real time data (Energy data)</h1>
            {graphsData.map((subarray, index) => {
                return (
                    <Row key={index}>
                        {subarray.map((object, subIndex) => {
                            var otherParam = object.type ? object.type : null;
                            return (
                                <Cell key={subIndex}>
                                    <div className="arrows--container">
                                        <IoArrowBack className="botton--change" onClick={() => dispatch({ type: object.bottonPrevId })} />
                                        <IoArrowForward className="botton--change" onClick={() => dispatch({ type: object.bottonNextId })} />
                                    </div>
                                    <div className="title--container">
                                        <h4>{object.title}</h4>
                                    </div>
                                    <GraphedData
                                        graphId={getDataAnd(object.dataId, otherParam).id}
                                        dataGiven={getDataAnd(object.dataId, otherParam).data}
                                        keysAndUnits={getKeysAndUnits(object.dataId)}
                                    />
                                    <Analysis
                                        dataGiven={getDataAnd(object.dataId, otherParam).data}
                                        dataType={object.dataId}
                                    />
                                </Cell>
                            )
                        })}
                    </Row>
                )
            })}
            {/**  
            <Row>
            <Cell>
            
            <EnergyProductionGraph 
                graphId={0}
                dataGiven={energyFuel}
                keysAndUnits={getKeysAndUnits('fuel')}

            />
            </Cell>
            </Row> */}
            
            
        </div>
    )
}

export default BankEnergi

/**
 * 
 * <div className="title--container">
                    <h4> Energy Production</h4>
                </div>
   <Row>
               <Cell>
               <div className="title--container">
                    <h4> Energy Production</h4>
                </div>
                <EnergyProductionGraph
                    dataGiven={energyFuel}
                    keysAndUnits={getKeysAndUnits('fuel')}
                />
               </Cell>
            </Row>
 */

 /**
  <Row>
               <Cell>
               <div className="title--container">
                    <h4> Energy Production</h4>
                </div>
                   <EnergyProductionGraph 
                        dataGiven={energyFuel}
                        keysAndUnits={getKeysAndUnits(energyFuel)}

                   />
            
               </Cell>
            </Row>
  */
