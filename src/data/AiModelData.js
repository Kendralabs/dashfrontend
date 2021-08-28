import { useState, useEffect } from 'react';
import { csv } from 'd3';
import predictionFile from './csvfiles/aimodelfiles/prediction.csv'
import testSetFile from './csvfiles/aimodelfiles/testset.csv';
import pricePredictionFile from './csvfiles/aimodelfiles/pricePrediction.csv'
import priceTestSetFile from './csvfiles/aimodelfiles/priceTestset.csv';
import energyPredictionFile from './csvfiles/aimodelfiles/energyPrediction.csv'
import energyTestsetFile from './csvfiles/aimodelfiles/energyTestset.csv';


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
            title: 'Historic energy consumption of UK market',
            dataId: 'testSet',
            bottonPrevId: 'testSetPrev',
            bottonNextId: 'testSetNext'
        },
        {
            title: 'Daily energy consumption for energy market',
            dataId: 'prediction',
            bottonPrevId: 'predictionPrev',
            bottonNextId: 'predictionNext'
        }

    ]

];

export const graphsDataI = [
    [
        {
            title: 'Historic prices',
            dataId: 'priceTestSet',
            bottonPrevId: 'testSetPrev',
            bottonNextId: 'testSetNext'
        },
        {
            title: 'System selling price prediction for balancing market',
            dataId: 'pricePrediction',
            bottonPrevId: 'predictionPrev',
            bottonNextId: 'predictionNext'
        }

    ]

];

export const graphsDataII = [
    [
        {
            title: 'Historic demand ',
            dataId: 'energyTestSet',
            bottonPrevId: 'testSetPrev',
            bottonNextId: 'testSetNext'
        },
        {
            title: 'Flex market energy demand forecasting',
            dataId: 'energyPrediction',
            bottonPrevId: 'predictionPrev',
            bottonNextId: 'predictionNext'
        }

    ]

];


export const Infos = () => {
    const [prediction, setPrediction] = useState(null);
    const [testSet, setTestSet] = useState(null);
    const [demandPrediction, setDemandPrediction] = useState(null);
    const [demandTestSet, setDemandTestSet] = useState(null);
    const [pricePrediction, setPricePrediction] = useState(null);
    const [priceTestSet, setPriceTestSet] = useState(null);
    
    useEffect(() => {
        csv(predictionFile).then(data => {
            setPrediction(data);
        });
        csv(testSetFile).then(data => {
            setTestSet(data)
        });
        csv(energyPredictionFile).then(data => {
            setDemandPrediction(data);
        });
        csv(energyTestsetFile).then(data => {
            setDemandTestSet(data)
        });
        csv(pricePredictionFile).then(data => {
            setPricePrediction(data);
        });
        csv(priceTestSetFile).then(data => {
            setPriceTestSet(data)
        });
       }, [])
      
  
    return { prediction, testSet ,demandPrediction,demandTestSet,pricePrediction, priceTestSet}

} 

const addDati = (data) => {
    const mapper = [];

}