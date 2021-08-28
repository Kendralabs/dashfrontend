import React from 'react'
import {  LineChart, Line, XAxis, YAxis, CartesianGrid, 
    Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';


const UpSection = styled.div`
    width:145px;
    height:10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    p {
        font-size: 10px;
    }
`;

const ColorSection = styled.div`
    width: 50%;
    height: 100%;
    background: #8884d8;
    border : 2px solid #7A838C;

`;



const Display = ({ dataSent, keysAndUnits ,statistics,type}) => {
    const style = { width: "100%", height: "100%", position: 'relative', display: 'flex',flexDirection: 'column',justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }
    const fontColor = "#000000"
    const widthScale = '100%'
    const heightScale = '88%'
    const keyOne = keysAndUnits && keysAndUnits.dataKeyOne;
    const keyTwo = keysAndUnits && keysAndUnits.dataKeyTwo;
    const unit = keysAndUnits && keysAndUnits.unitY;
    const max =  statistics && statistics[`Absolute ${type} Max`]
    const min = statistics && statistics[`Absolute ${type} Min`]
    
    return (
        <div style={style}>
            <UpSection className="">
                <ColorSection className="">

                </ColorSection>
                <p>
                    {keyTwo} {unit}
                </p>
            </UpSection>
           <ResponsiveContainer width={widthScale} height={heightScale}>
                <LineChart
                    width={500}
                    height={300}
                    data={dataSent}
                    margin={{
                        top: 10,
                        right: 10,
                        left: 10,
                        bottom: 10,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={keyOne} label={{ value: keyOne, position: "top", fill: fontColor }} />
                    <YAxis domain={[parseFloat(min), parseFloat(max)]} label={{fontSize : '6px'}}
                           tickFormatter={(value) => value.toFixed(2)}  />
                    <Tooltip />
                    <Line dot={false} type="monotone" dataKey={keyTwo} stroke="#8884d8"  activeDot={{ r: 1 }}/>
                </LineChart>
            </ResponsiveContainer> 
        </div>
    )
}

export default Display
