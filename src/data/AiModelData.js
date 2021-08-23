import { useState, useEffect } from 'react';
import { csv } from 'd3';
import predictionFile from './csvfiles/aimodelfiles/prediction.csv'
import testSetFile from './csvfiles/aimodelfiles/testset.csv';


export const reducer = (state, action) => {
    switch (action.type) {
        case 'predictionNext':
            console.log('clicked prd')
            return {
                ids: { ...state.ids, predictionId: state.ids.predictionId === 2 ? 0 : state.ids.predictionId + 1 }
            }
        case 'predictionPrev':
            return {
                ids: { ...state.ids, predictionId: state.ids.predictionId === 0 ? 2 : state.ids.predictionId - 1 }
            }
        case 'testSetPrev':
            return {
                ids: { ...state.ids, testSetId: state.ids.testSetId === 0 ? 2 : state.ids.testSetId - 1 }
            }
        case 'testSetNext':
            console.log('clicked test')
            return {
                ids: { ...state.ids, testSetId: state.ids.testSetId === 2 ? 0 : state.ids.testSetId + 1 }
            }
    }

}


export const graphsData = [
    [
        {
            title: 'Daily Energy Tranmission',
            dataId: 'testSet',
            bottonPrevId: 'testSetPrev',
            bottonNextId: 'testSetNext'
        },
        {
            title: 'Daily Energy Prediction',
            dataId: 'prediction',
            bottonPrevId: 'predictionPrev',
            bottonNextId: 'predictionNext'
        }

    ]

];


export const Infos = () => {
    const [prediction, setPrediction] = useState(null);
    const [testSet, setTestSet] = useState(null);
    
    useEffect(() => {
        csv(predictionFile).then(data => {
            const temp = data.map((value, index) => {
                value.dati = new Date(value.date)
                return value
            }) 
            setPrediction(data);
        });
        csv(testSetFile).then(data => {
            const temp = data.map((value, index) => {
                value.dati = new Date(value.date)
                return value
            })
            setTestSet(temp)
        });
       }, [])
      
  
    return { prediction, testSet }

} 

const addDati = (data) => {
    const mapper = [];

}