import React, { useState } from 'react'
import styled, { css } from 'styled-components/macro'
import Button from '../../components/button/Button';
import AvatarI from './images/avatar.svg'
import Woo from './images/atat.png'

import ReactWeather from 'react-open-weather';
import GraphedData from '../../data/GraphedData';
import { getKeysAndUnits } from '../../data/SpecialFucntions';
import WeatherDisplay from '../../data/WeatherDisplay';

import { Infos } from '../../data/MenuData';
import WContainer from '../weather/WContainer';


//Optional include of the default css styles


const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
    overflow: auto;
`;

const Wrapper = styled.div`
    min-height: 700px;
    min-width: 700px;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-areas :"a b b b b"
                         "a b b b b"
                         "d d c c c"
                         "d d c c c" ;

    gap : 20px;                
`;

const customFlex = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const customBox = css`
    border:2px solid #7A838C;
    border-radius: 3px;
`;
const UserDetails = styled.div`
    grid-area : a;
    position: relative;
    ${customBox}
    .top--section {
        ${customFlex}
        width: 100%;
        height: 15%;
        background: #001555;
        color: white;
        font-size: 1.2rem;
    }
    .bottom--section {
        width: 100%;
        height: 10%;
        background: #001555;
        position: absolute;
        bottom: 0px;
        ${customFlex}
    }

    .center--section {
        width: 100%;
        height: 75%;
        ${customFlex}
        flex-direction: column;
        
    }
    .detail--section {
        ${customFlex}
        align-items: flex-start;
        flex-direction: column;
        gap:10px;
        color : #7A838C;
    }
    .label--second {
        font-weight: 300;
    }
    .last--login {
        position: absolute;
        bottom: 15%;
        right: 5px;
        color: #7A838C;
    }
    .time--sect {
        font-weight: 300;
    }
    
   
    
`;

const Weather = styled.div`
    grid-area: b;
    
    position: relative;
   
`;

const InnerBox = styled.div`
    border:2px solid #7A838C; 
    border-radius: 3px;
    width: 31%;
    height: 100%;
    ${customFlex}
    flex-direction: column;
    h6 {
        color: #7A838C;
        font-size: 1.2rem;
        font-weight: 300;
    }

    h5 {
        color : #7A838C;
        font-size: 1.8rem;
    }
`

const CarbonAvg = styled.div`
    grid-area:d;
    ${customBox}
    ${customFlex}
    flex-direction: column;
    gap: 20px;
    h6 {
        color: #7A838C;
        font-size: 1.2rem;
        font-weight: 300;
    }

    h5 {
        color : #7A838C;
        font-size: 1.8rem;
    }

    
    
`;
const EnergyPrice = styled.div`
    grid-area: c;
    ${customBox}
    ${customFlex}
    width: 100%;
    height: 100%;
    flex-direction: column;
    gap: 20px;
    h6 {
        color: #7A838C;
        font-size: 1.2rem;
        font-weight: 300;
    }

    h5 {
        color : #7A838C;
        font-size: 1.8rem;
    }
    
`
const Avatar = styled.img`
    
    width: 30%;
    height: 40%;
    margin-bottom: 10px;
`
const Wo = styled.img`
    width: 69%;
    height: 90%;
    border:2px solid #7A838C; 
    border-radius: 3px;
  
`;
const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    
   
`;

const Home = () => {
    const [hovered, setHovered] = useState(null)
    const { weatherData } = Infos();
    return (
        <Container>
            <Wrapper>
                <UserDetails>
                    <div className="top--section">
                        User Details
                    </div>

                    <div className="center--section">
                        <Avatar src={AvatarI} />

                        <div className="detail--section">
                            <p> <span className="label--first">First name:</span> <span className="label--second"> Anouar</span> </p>
                            <p> <span className="label--first" >Last name:</span> <span className="label--second"> Belila</span> </p>
                            <p> <span className="label--first">Role:</span><span className="label--second"> Energy Manager</span></p>
                        </div>
                        <p className="last--login">Last Login: <span className="time--sect">  20/10/2020 08:15PM</span></p>
                    </div>
                    <div className="bottom--section">

                        <Button
                            buttonSize='btn--small'
                            buttonColor='btn--orange'
                            textGiven='EDIT' />
                    </div>

                </UserDetails>
                <Weather>
                   
                     <ImageContainer>
                      <Wo src={Woo}/>
                      <InnerBox>
                      <h6>Total Carbon emissions form LSBU for 2019 is :</h6>
                    <h5>789604.800 (KgCO2)</h5>

                         
                         </InnerBox>

                     </ImageContainer>
                     
                     
                  
                </Weather>



                <CarbonAvg>
                    <h6>Averege Carbon Intensity for London 20/08/2021 is :</h6>
                    <h5>70 (gCO2/kWh)</h5>



                </CarbonAvg>
                <EnergyPrice>
                <h6>Total Energy Consumption form LSBU for the year 2019 is :</h6>
                    <h5>5684577 (kWh)</h5>


                </EnergyPrice>

            </Wrapper>

        </Container>
    )
}

export default Home
