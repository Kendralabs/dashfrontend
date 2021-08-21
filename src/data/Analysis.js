import React,{useState} from 'react'
import { getFinalArray } from './SpecialFucntions.js'
import styled from 'styled-components/macro';
import { SentimentSatisfied } from '@material-ui/icons';


const Container = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    
`;

const Wrapper = styled.div`
    height: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;

    .section--inside {
        padding: 0 5px;
        height: 100%;
        gap: 5px;
        border: 1.2px solid #7A838C;
        display: grid;
        grid-template-rows: repeat(2, auto);
        border-radius: 3px;
        background: rgba(231,201,87,20%);

        .sub--section--bottom {
            border-top: 1.2px solid #7A838C;
            display: flex;
            justify-content: center;
            color: #737171;
        }

        .sub--section-top {
            color: #737171;
            font-weight: 600;

        }
     }
`;

const Analysis = ({ dataGiven, dataType }) => {
    getFinalArray(dataGiven,dataType)
    return (
        <Container>
            <Wrapper>
                {getFinalArray(dataGiven,dataType) && getFinalArray(dataGiven, dataType).map((val, index) => {
                    if (index != 0) {
                     return (
                        <div className="section--inside" key={index}>
                            <div className="sub--section-top">
                            <p>{val.label}</p>
                            </div>
                            <div className="sub--section--bottom">
                            <p>{val.value}</p>
                            </div>
                            
                         </div> 
                     )
                    }
                })}
            </Wrapper>
        </Container>
    )
}

export default Analysis
/**
 {getFinalArray(dataGiven, dataType).map((val, index) => {
                     return (
                         <div className="section--inside">
                            <div className="sub--section-top">
                            <p>{val.label}</p>
                            </div>
                            <div className="sub--section--bottom">
                            <p>{val.value}</p>
                            </div>
                            
                         </div>
                     )
                })}
 */