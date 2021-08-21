import React,{ useReducer } from 'react'
import '../Styledbase.css'
import Table from '@material-ui/core/Table'
import { graphsData, Infos, reducer } from '../../../data/AiModelData'
import { Cell, Row } from '../bankenergi/BankEnergi'
import { getKeysAndUnits } from '../../../data/SpecialFucntions'
import GraphedData from '../../../data/GraphedData'
import { IoArrowBack, IoArrowForward } from 'react-icons/io5'
import DisplayTable from '../../../data/DisplayTable'


export const AI_Model = () => {
    const {prediction, testSet} = Infos();
    const [{ids}, dispatch] = useReducer(reducer,{ids : { predictionId : 0, testSetId : 1 }})
    const getDataAnd = (string) => {
        const returnedObj = {};
        switch(string) {
            case 'prediction':
                returnedObj.id = ids.predictionId;
                returnedObj.data = prediction;
                break
            case 'testSet' : 
                returnedObj.id = ids.testSetId;
                returnedObj.data = testSet;  
                break;
        }
        console.log(returnedObj);
        return returnedObj;
     }
    return (
        <div className="main--bank-ai-container">
             {graphsData.map((subarray, index) => {
                return (
                    <Row key={index}>
                        {subarray.map((object, subIndex) => {
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
                                        graphId={getDataAnd(object.dataId).id}
                                        dataGiven={getDataAnd(object.dataId).data}
                                        keysAndUnits={getKeysAndUnits(object.dataId)}
                                    />
                                   
                                </Cell>
                            )
                        })}
                    </Row>
                )
            })}
            <Row>
                <Cell>
                    <DisplayTable
                        dataGiven={prediction}
                    />
                </Cell>
            </Row>
        </div>
    )
}
