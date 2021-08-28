import React,{ useReducer } from 'react'
import '../Styledbase.css'
import Table from '@material-ui/core/Table'
import { graphsDataI, Infos, reducer } from '../../../data/AiModelData'
import { Cell, Row } from '../bankenergi/BankEnergi'
import { getKeysAndUnits } from '../../../data/SpecialFucntions'
import GraphedData from '../../../data/GraphedData'
import { IoArrowBack, IoArrowForward } from 'react-icons/io5'
import DisplayTable from '../../../data/DisplayTable'



const PricePrediction = () => {
    const {pricePrediction, priceTestSet} = Infos();
    const [{ids}, dispatch] = useReducer(reducer,{ids : { predictionId : 0, testSetId : 1 }})
    const getDataAnd = (string) => {
        const returnedObj = {};
        switch(string) {
            case 'pricePrediction':
                returnedObj.id = ids.predictionId;
                returnedObj.data = pricePrediction;
                break
            case 'priceTestSet' : 
                returnedObj.id = ids.testSetId;
                returnedObj.data = priceTestSet;  
                break;
        }
        return returnedObj;
     }
   
    return (
        <div className="main--bank-ai-container">
            <h1> Future price forecasting </h1>
            
             {graphsDataI.map((subarray, index) => {
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
                                        graphId={0}
                                        dataGiven={getDataAnd(object.dataId).data}
                                        keysAndUnits={getKeysAndUnits(object.dataId)}
                                    />
                                   
                                </Cell>
                            )
                        })}
                    </Row>
                )
            })}
            <h1> Price predictions</h1>
            <Row>
                <Cell>
                    <DisplayTable
                        dataGiven={pricePrediction}
                        label = 'Predicted Price'
                    />
                </Cell>
            </Row>
            
        </div>
    )
}

export default PricePrediction;