import { useState, useEffect } from 'react';
import { csv } from 'd3';
import carbon_intensity from './csvfiles/carbon_intensity.csv'
import elexon from './csvfiles/demand_elexon.csv';
import freqElexon from './csvfiles/freq_elexon.csv'
import solar from './csvfiles/solar.csv'
import weather from './csvfiles/weather.csv'
import transmitElexon from './csvfiles/transmit_elexon.csv'
import windOffShore from './csvfiles/wind_offshore.csv'
import windOnShore from './csvfiles/wind_onshore.csv'
import priceElexon from './csvfiles/price_elexon.csv';
import fuelEnergy from './csvfiles/fuel_elexon.csv'


export const reducer = (state, action) => {

    switch (action.type) {
        case 'elexonNext':
            return {
                ids: { ...state.ids, elexonData: state.ids.elexonData === 3 ? 0 : state.ids.elexonData + 1 }
            }
        case 'elexonPrev':
            return {
                ids: { ...state.ids, elexonData: state.ids.elexonData === 0 ? 3 : state.ids.elexonData - 1 }
            }
        case 'carbonNext':
            return {
                ids: { ...state.ids, carbonDataI: state.ids.carbonDataI === 3 ? 0 : state.ids.carbonDataI + 1 }
            }
        case 'carbonPrev':
            return {
                ids: { ...state.ids, carbonDataI: state.ids.carbonDataI === 0 ? 3 : state.ids.carbonDataI - 1 }
            }
        case 'elexonPriceNext':
            return {
                ids: { ...state.ids, elexonPriceData: state.ids.elexonPriceData === 3 ? 0 : state.ids.elexonPriceData + 1 }
            }
        case 'elexonPricePrev':
            return {
                ids: { ...state.ids, elexonPriceData: state.ids.elexonPriceData === 0 ? 3 : state.ids.elexonPriceData - 1 }
            }
        case 'elexonFreqNext':
            return {
                ids: { ...state.ids, elexonFreqData: state.ids.elexonFreqData === 3 ? 0 : state.ids.elexonFreqData + 1 }
            }
        case 'elexonFreqPrev':
            return {
                ids: { ...state.ids, elexonFreqData: state.ids.elexonFreqData === 0 ? 3 : state.ids.elexonFreqData - 1 }
            }
        case 'elexonTransmitNext':
            return {
                ids: { ...state.ids, elexonTransmitData: state.ids.elexonTransmitData === 3 ? 0 : state.ids.elexonTransmitData + 1 }
            }
        case 'elexonTransmitPrev':
            return {
                ids: { ...state.ids, elexonTransmitData: state.ids.elexonTransmitData === 0 ? 3 : state.ids.elexonTransmitData - 1 }
            }
        case 'solarProductionNext':
            return {
                ids: { ...state.ids, solarData: state.ids.solarData === 3 ? 0 : state.ids.solarData + 1 }
            }
        case 'solarProductionPrev':
            return {
                ids: { ...state.ids, solarData: state.ids.solarData === 0 ? 3 : state.ids.solarData - 1 }
            }
        case 'windOnNext':
            return {
                ids: { ...state.ids, windOnData: state.ids.windOnData === 3 ? 0 : state.ids.windOnData + 1 }
            }
        case 'windOnPrev':
            return {
                ids: { ...state.ids, windOnData: state.ids.windOnData === 0 ? 3 : state.ids.windOnData - 1 }
            }
        case 'windOffPrev':
            return {
                ids: { ...state.ids, windOffData: state.ids.windOffData === 0 ? 3 : state.ids.windOffData - 1 }
            }
        case 'windOffNext':
            return {
                ids: { ...state.ids, windOffData: state.ids.windOffData === 3 ? 0 : state.ids.windOffData + 1 }
            }


    }

}

export const graphsData = [
    [
        {
            title: 'Elexon flex market',
            dataId: 'elexon',
            bottonPrevId: 'elexonPrev',
            bottonNextId: 'elexonNext'
        },
        {
            title: 'Carbon Intensity',
            dataId: 'carbon',
            bottonPrevId: 'carbonPrev',
            bottonNextId: 'carbonNext'
        }
    ],
    [
        {
            title: 'Solar Production',
            dataId: 'solar',
            bottonPrevId: 'solarProductionPrev',
            bottonNextId: 'solarProductionNext'
        },
        {
            title: 'Pricing Data from elexon',
            dataId: 'elexonprice',
            bottonPrevId: 'elexonPricePrev',
            bottonNextId: 'elexonPriceNext'
        }

    ],
    [
        {
            title: 'Energy System Frequency',
            dataId: 'energyfrequency',
            bottonPrevId: 'elexonFreqPev',
            bottonNextId: 'elexonFreqNext'
        },
        {
            title: 'Daily Energy Transmit',
            dataId: 'energytransmit',
            bottonPrevId: 'elexonTransmitPrev',
            bottonNextId: 'elexonTransmitNext'
        }

    ],
    [
        {
            title: 'Wind Production Onshore',
            dataId: 'wind',
            bottonPrevId: 'windOnPrev',
            bottonNextId: 'windOnNext',
            type: 'on'
        },
        {
            title: 'Wind Production Offshore',
            dataId: 'wind',
            bottonPrevId: 'windOffPrev',
            bottonNextId: 'windOffNext',
            type: 'off'
        }
    ]
]

export const Infos = () => {
    const [carbonExported, setCarbonExported] = useState(null)
    const [elexonDataExported, setElexonDataExported] = useState(null)
    const [freqElexonExported, setFreqElexonExported] = useState(null);
    const [priceElexonExported, setPriceElexonExported] = useState(null);
    const [solarExported, setSolarExported] = useState(null);
    const [transmitElexonExported, setTransmitElexonExported] = useState(null);
    const [windOffShoreExported, setWindOffShoreExported] = useState(null);
    const [windOnShoreExported, setWindOnShoreExported] = useState(null);
    const [energyFuel, setEnergyFuel] = useState(null);
    useEffect(() => {
        csv(carbon_intensity).then(data => {
            setCarbonExported(data)
        });
        csv(elexon).then(data => {
            setElexonDataExported(data)
        });
        csv(freqElexon).then(data => {
            setFreqElexonExported(data)
        });
        csv(solar).then(data => {
            setSolarExported(data)
        });
        csv(transmitElexon).then(data => {
            setTransmitElexonExported(data)
        });
        csv(windOffShore).then(data => {
            setWindOffShoreExported(data)
        });
        csv(windOnShore).then(data => {
            setWindOnShoreExported(data)
        });
        csv(priceElexon).then(data => {
            setPriceElexonExported(data)
        });
        csv(fuelEnergy).then(data => {
            setEnergyFuel(data)
        });
    }, [])

    return {
        carbonExported, elexonDataExported,
        freqElexonExported, solarExported,
        transmitElexonExported, windOffShoreExported,
        windOnShoreExported, priceElexonExported,
        energyFuel
    };

}

export const titles = [
    {

    }
]

