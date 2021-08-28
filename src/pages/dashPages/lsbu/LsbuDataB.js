import { useState, useEffect } from 'react';
import { csv } from 'd3';
import k2File from './csv/K2.csv'
import teachParkFile from './csv/Technopark.csv';
import londonRoadFile from './csv/London-Road.csv'
import boroughFile from './csv/Borough-Road-Main-Building.csv';
import perryFile from './csv/PerryLibrary.csv';
import clearanceFile from './csv/ClarenceCentre.csv';
import keyworthFile from './csv/KeyworthCentre.csv';
import mclarenFile from './csv/MclarenHouse.csv';
import { AttachFile } from '@material-ui/icons';


export const InfoLsbu = () => {
    const [K2, setK2] = useState(null);
    const [techPark, setTechPart] = useState(null);
    const [londonRoad, setLondonRoad] = useState(null);
    const [boroughRoad, setBoroughRoad] = useState(null);
    const [perryLibaray, setPerryLibaray] = useState(null);
    const [clearanceCenter, setClearanceCenter] = useState(null);
    const [keyworthCenter, setKeyworthCenter] = useState(null);
    const [mclarenHouse, setMclarenHouse] = useState(null);
    const [total, setTotal] = useState(null)


    useEffect(() => {
        var sum = [];
        csv(k2File).then(data => {
            let inf = {};
            inf.title = 'Building: K2';
            inf.data = data;
            inf.statistics = getDataFound(data);
            inf.emissionunits = emissionunits
            inf.energyUnits = energyUnits;
            data.map((value) => sum.push(value))
            setK2(inf)

        });
        csv(teachParkFile).then(data => {
            let inf = {};
            inf.title = 'Building: Technology park';
            inf.data = data
            inf.statistics = getDataFound(data);
            inf.emissionunits = emissionunits
            inf.energyUnits = energyUnits;
            data.map((value) => sum.push(value))
            setTechPart(inf)
        });
        csv(londonRoadFile).then(data => {
            let inf = {};
            inf.title = 'Building: London Road';
            inf.statistics = getDataFound(data);
            inf.emissionunits = emissionunits
            inf.energyUnits = energyUnits;
            inf.data = data
            data.map((value) => sum.push(value))
            setLondonRoad(inf)
        });
        csv(boroughFile).then(data => {
            let inf = {};
            inf.title = 'Building: Borough Road Main';
            inf.statistics = getDataFound(data);
            inf.emissionunits = emissionunits
            inf.energyUnits = energyUnits;
            data.map((value) => sum.push(value))
            inf.data = data
            setBoroughRoad(inf);
        });
        csv(perryFile).then(data => {
            let inf = {};
            inf.title = 'Building: Perry Libaray';
            inf.statistics = getDataFound(data);
            inf.emissionunits = emissionunits
            inf.energyUnits = energyUnits;
            data.map((value) => sum.push(value))
            inf.data = data
            setPerryLibaray(inf);
        });
        csv(clearanceFile).then(data => {
            let inf = {};
            inf.title = 'Building: Clarence Center';
            inf.statistics = getDataFound(data);
            inf.emissionunits = emissionunits
            inf.energyUnits = energyUnits;
            inf.data = data
            data.map((value) => sum.push(value))
            setClearanceCenter(inf);
        });
        csv(keyworthFile).then(data => {
            let inf = {};
            inf.title = 'Building: Keyworth Center';
            inf.statistics = getDataFound(data);
            inf.emissionunits = emissionunits
            inf.energyUnits = energyUnits;
            inf.data = data
            data.map((value) => sum.push(value));
            setKeyworthCenter(inf);
        });
        csv(mclarenFile).then(data => {
            let inf = {};
            inf.title = 'Building: Mclaren House';
            inf.statistics = getDataFound(data);
            inf.emissionunits = emissionunits
            inf.energyUnits = energyUnits;
            inf.data = data
            data.map((value) => sum.push(value))
            setMclarenHouse(inf);

            let tot = {};
            tot.titleCarbon = 'Total carbon emissions from LSBU buildings';
            tot.titleEnergy = 'Total energy consumption from LSBU buildings';
            tot.statistics = getDataFound(sum);
            tot.emissionunits = emissionunits
            tot.energyUnits = energyUnits;
            tot.data = sum;
            setTotal(tot);
        });
        



        

    }, [])


    return { K2, techPark, londonRoad, boroughRoad, perryLibaray, clearanceCenter, keyworthCenter, mclarenHouse, total}

}

const energyUnits = {
    dataKeyOne : 'Date (UTC)',
    dataKeyTwo : 'Energy Consumption',
    unitY : 'Kwh'
}

const emissionunits = {
    dataKeyOne : 'Date (UTC)',
    dataKeyTwo : 'Carbon Emission',
    unitY : 'KgCO2',

};

const getDataFound = (dataScreen) => {
    if (dataScreen) {
        var sortedEnergy = [...dataScreen].sort((a, b) => a['Energy Consumption'] - b['Energy Consumption']);
        var sortedEmission = [...dataScreen].sort((a, b) => a['Carbon Emission'] - b['Carbon Emission']);
        var sumEnergy = 0;
        var sumEmission = 0;
        dataScreen.map((value, index) => {
            sumEnergy += parseFloat(value['Energy Consumption']);
            sumEmission += parseFloat(value['Carbon Emission']);
        })
        const arrayTobReturned =
            [
                {
                    'Absolute Energy Max': sortedEnergy[sortedEnergy.length - 1]['Energy Consumption'],
                    'Absolute Energy Min': sortedEnergy[0]['Energy Consumption'],
                    'Avg Energy': (sumEnergy / (dataScreen.length)).toFixed(3),
                    'Total Energy': sumEnergy.toFixed(3),
                },
                {
                    'Absolute Emission Max': sortedEmission[sortedEmission.length - 1]['Carbon Emission'],
                    'Absolute Emission Min': sortedEmission[0]['Carbon Emission'],
                    'Avg Emission': (sumEnergy / (dataScreen.length)).toFixed(3),
                    'Total Emission': sumEnergy.toFixed(3),
                }

            ]
        return arrayTobReturned;
    }
}

