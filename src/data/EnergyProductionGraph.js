import React from 'react'
import {
    Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
    BarChart, Bar, AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid,
    Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import styled from 'styled-components';
import { getFinalArray } from './SpecialFucntions';
import {BottomSection} from './GraphedData.js'


function EnergyProductionGraph({ dataGiven, keysAndUnits }) {
    const style = { width: "80%", height: "80%", position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }
    const fontColor = "#000000"
    const { dataKeyOne, dataKeyTwo, dataKeyTwoI, dataKeyTwoII, dataKeyTwoIII, dataKeyTwoIV , labelX, labelY, dataType } = keysAndUnits;
    const widthScale = '100%'
    const heightScale = '88%'
    console.log(dataGiven)
    console.log(keysAndUnits);
    return (
        <div styled={style}>
             <ResponsiveContainer width={widthScale} height={heightScale}>
                    <LineChart
                        width={500}
                        height={300}
                        data={dataGiven}
                        margin={{
                            top: 10,
                            right: 10,
                            left: 10,
                            bottom: 10,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey={dataKeyOne} label={{ value: labelX, position: "top", fill: fontColor }} />
                        <YAxis     />
                        <Tooltip />
                        <Line type="monotone" dataKey={dataKeyTwo} stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey={dataKeyTwoI} stroke="red" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey={dataKeyTwoII} stroke="green" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey={dataKeyTwoIII} stroke="brown" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey={dataKeyTwoIV} stroke="orange" activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
               
        </div>
    )
}

export default EnergyProductionGraph
