import React , {useState}from 'react'
import styled ,{css} from 'styled-components/macro'
import {Link, Switch, Route, Router} from 'react-router-dom';
import Home from '../pages/dashPages/Home';
import BankEnergi from '../pages/dashPages/bankenergi/BankEnergi';
import { AI_Model } from '../pages/dashPages/ai_model/AI_Model';
import Building from '../pages/dashPages/lsbu/Building';
import Libaray from '../pages/dashPages/lsbu/Libaray';
import Centers from '../pages/dashPages/lsbu/Centers';
import Houses from '../pages/dashPages/lsbu/Houses';
import EnergyDemandPrediction from '../pages/dashPages/ai_model/EnergyDemandPrediction';
import PricePrediction from '../pages/dashPages/ai_model/PricePrediction';
import BuildingEnergyComsumption from '../pages/dashPages/lsbu/BuildingEnergyComsumption';
import BuildingCarbonEmission from '../pages/dashPages/lsbu/BuildingCarbonEmission';


const Container = styled.div`
    height : 100%;
    min-height: 600px;
    width: ${({primary}) => (primary ? 'calc(100% - 360px)' : 'calc(100% - 55px)')};
    border: 2.5px solid #7A838C;
    border-radius: 3px;
    transition: all 400ms ease-out;
`;



const MainContentContainer = ({showMenu}) => {
    const [hovered, setHovered] = useState(null)
    return (
        <Container
            primary={showMenu}>
           <Switch>
               <Route path="/"  component={Home} exact/>
               <Route path="/visual_data" component={BankEnergi} exact />
               <Route path="/building" component={Building} exact />
               <Route path="/centers"  component={Centers} exact />
               <Route path="/libaray" component={Libaray} exact />
               <Route path="/houses" component={Houses} exact />
               <Route path="/transmissionpredict" component={AI_Model} exact />
               <Route path="/demandpredict" component={EnergyDemandPrediction} exact />
               <Route path="/pricepredict" component={PricePrediction}  exact />

               <Route path="/enrgyconsumption" component={BuildingEnergyComsumption} />
               <Route path="/carbonemission" component={BuildingCarbonEmission} />
           </Switch>
          
        </Container>
    )
}

export default MainContentContainer

/*
 width: ${({primary}) => (primary ? 'calc(100% - 55px)' : 'calc(100% - 357px)')};;

 color: #9FA2B4;
**/
