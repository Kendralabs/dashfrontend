import React from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, 
    BarChart, Bar, AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, 
    Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';
import { getFinalArray, sorti } from './SpecialFucntions';

export const BottomSection = styled.div`
    position: absolute;
    width: 40%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    top: 0px;
    gap : 8px;
    .color--box {
        background: ${({primary}) => (primary ? '#82ca9d' : '#8884d8')};
        width : 20%;
        height: 100%;
        border: 2px solid black ;
    }
`;


const GraphedData = ({ dataGiven, graphId, keysAndUnits}) => {
    const style = { width: "80%", height: "80%",position : 'relative',display:'flex',justifyContent :'center', alignItems : 'center',overflow : 'hidden' } 
    const fontColor = "#000000"
    const {dataKeyOne, dataKeyTwo, labelX, labelY, dataType} = keysAndUnits;
    const widthScale = '100%'
    const heightScale = '88%'
    var maxValueDomain = null;
    var minValueDomain = null;
    console.log(dataGiven)
    if (getFinalArray(dataGiven, dataType)){
    maxValueDomain = getFinalArray(dataGiven, dataType)[0].absoluteMaxValue;
    minValueDomain = getFinalArray(dataGiven, dataType)[0].absoluteMinValue;
   
    }
    switch (graphId) {
      case 0:
        return (
            <div style={style} >
                <ResponsiveContainer width={widthScale} height={heightScale}>
                    <LineChart
                        width={500}
                        height={300}
                        data={sorti(dataGiven)}
                        margin={{
                            top: 10,
                            right: 10,
                            left: 10,
                            bottom: 10,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey={dataKeyOne} label={{ value: labelX, position: "top", fill: fontColor }} />
                        <YAxis   domain={[parseFloat(minValueDomain), parseFloat(maxValueDomain)]}  />
                        <Tooltip />
                        <Line type="monotone" dataKey={dataKeyTwo} stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
                <BottomSection>
                    <div className="color--box">

                    </div>
                    <p>{labelY}</p>
                </BottomSection>
            </div>
        )
  
      case 1:
        return (
          <div style={style}
          >
            <ResponsiveContainer width={widthScale} height={heightScale}>
              <AreaChart
                width={200}
                height={200}
                data={sorti(dataGiven)}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={dataKeyOne} tick={{ fontWeight: "800" }}  label={{ value: labelX, position: "top", fill: fontColor }} />
                <YAxis domain={[parseFloat(minValueDomain), parseFloat(maxValueDomain)]}  />
                <Tooltip />
                <Area type="monotone" dataKey={dataKeyTwo} stackId="1" stroke="#8884d8" fill="#8884d8" />
              </AreaChart>
            </ResponsiveContainer>
            <BottomSection>
                    <div className="color--box">

                    </div>
                    <p>{labelY}</p>
                </BottomSection>
          </div>
        )
  
      case 2:
        return (
          <div style={style}>
            <ResponsiveContainer width={widthScale} height={heightScale}>
              <BarChart
                width={500}
                height={300}
                data={sorti(dataGiven)}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
                barSize={20}
  
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis name={dataKeyOne} dataKey={dataKeyOne} tick={{ fontWeight: "800" }}  label={{ value: labelX, position: "top", fill: fontColor }} />
                <YAxis domain={[parseFloat(minValueDomain), parseFloat(maxValueDomain)]} tick={{ fontWeight: "800" }} />
                <Tooltip />
                <Bar dataKey={dataKeyTwo} fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
            <BottomSection>
                    <div className="color--box">

                    </div>
                    <p>{labelY}</p>
                </BottomSection>
          </div>
        )
      case 3:
        return (
          <div style={style}
          >
            <ResponsiveContainer width={widthScale} height={heightScale}>
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={sorti(dataGiven)}>
                <PolarGrid />
                <PolarAngleAxis dataKey={dataKeyOne} tick={{  fontWeight: "800", opacity: 0 }} />
                <PolarRadiusAxis angle={30} domain={[0, 150]} tick={{ fontWeight: "800", opacity: 0 }} />
                <Radar name={dataKeyTwo} dataKey={dataKeyTwo} stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
            <BottomSection>
                    <div className="color--box">

                    </div>
                    <p>{labelY}</p>
                </BottomSection>
          </div>
        )
  
      default:
        return <div>nothing</div>
    }
}

export default GraphedData
