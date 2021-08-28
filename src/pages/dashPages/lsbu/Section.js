import React, { useState, useEffect } from 'react'
import '../Styledbase.css';
import styled, { css } from 'styled-components/macro'
import Display from './Display';


const Part = styled.div`
    width: 100%;
    height: 85%;
    min-height: 10px;
    background: red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px 5px;
    gap: 10px;
    background: #F2F2F2;
`;

const subDivCustom = css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px;
   
`;

const TopSection = styled.div`
    flex: 1;
    width: 100%;
    border-radius: 3px;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: repeat(2, 1fr);
    column-gap: 30px;
    grid-row-gap: 10px;

    & > div {
        background: white;
        border:2px solid #7A838C;
        border-radius: 3px;
        display: flex;

        & > .section--one {
            border-right : 2px solid #7A838C;
            flex: 1;
            ${subDivCustom}
            h4 {
                font-size: 11px;
                font-weight: 300;
            }
        }

        & > .section--two {
            flex : 1.5;
            ${subDivCustom}
        }
    }

`;
const BottomSection = styled.div`
    flex : 2.1;
    width: 100%;
    background: white;
    border:2px solid #7A838C;
    border-radius: 3px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    position: relative;
    padding: 0 5px;

`;
const Section = ({ dataGiven, type ,title}) => {
   
    
    /**const title = dataGiven && (dataGiven.title ) **/
    
    const dataV = dataGiven && dataGiven.statistics[ type == "Energy" ? 0 : 1]

   
    var keys1 = null
    if (dataGiven) {
        keys1 = Object.keys(dataGiven.statistics[type == "Energy" ? 0 : 1])
        
    }
    
    return (
        <div className="section--container">
            <h3 className="title--section">
               {title}
            </h3>
            <Part>
                <TopSection>
                    {keys1 && keys1.map((value, index) => {
                        return (
                            <div key={index}>
                                <div className="section--one">
                                    <h4>{value}</h4>

                                </div>
                                <div className="section--two">
                                    {dataV[value]}
                                </div>
                            </div>
                        )

                    })}

                </TopSection>
                <BottomSection>
                    <Display dataSent={dataGiven && dataGiven.data} 
                            keysAndUnits={dataGiven && (type == "Energy" ? dataGiven.energyUnits : dataGiven.emissionunits)}
                            statistics={dataV} 
                            type={type}/>

                </BottomSection>
            </Part>
          
        </div>
    )
}

export default Section
