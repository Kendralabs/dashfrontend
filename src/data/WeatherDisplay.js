import React from 'react'
import {
    Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
    BarChart, Bar, AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid,
    Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { getFinalArray } from './SpecialFucntions';

const WeatherDisplay = ({ dataGiven, keysAndUnits }) => {
    const style = { width: "100%", height: "90%", position :'absolute', top:'50%', left: '50%',transform: 'translate(-50%,-50%)',paddingRight : '10px' }
    const fontColor = "#000000"
    const { dataKeyOne, dataKeyTwo, labelX, labelY, dataType } = keysAndUnits;
    const widthScale = '100%'
    const heightScale = '100%'
    var maxValueDomain = null;
    var minValueDomain = null;

    console.log(dataGiven)
    return (
        <div style={style}>
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
                    <YAxis  />
                    <Tooltip />
                    <Line type="monotone" dataKey={dataKeyTwo} stroke="#8884d8" activeDot={{ r: 8 }} dot={false} />
                </LineChart>
            </ResponsiveContainer>


        </div>
    )
}

export default WeatherDisplay
