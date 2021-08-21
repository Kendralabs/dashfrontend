import React , {useState}from 'react'
import styled ,{css} from 'styled-components/macro'
import {Link, Switch, Route, Router} from 'react-router-dom';
import Home from '../pages/dashPages/Home';
import BankEnergi from '../pages/dashPages/bankenergi/BankEnergi';
import { AI_Model } from '../pages/dashPages/ai_model/AI_Model';


const Container = styled.div`
    height : 100%;
    min-height: 600px;
    width: ${({primary}) => (primary ? 'calc(100% - 360px)' : 'calc(100% - 55px)')};;
    border: 2.5px solid #7A838C;
    border-radius: 3px;
`;



const MainContentContainer = ({showMenu}) => {
    const [hovered, setHovered] = useState(null)
    return (
        <Container
            primary={showMenu}>
           <Switch>
               <Route path="/"  component={Home} exact/>
               <Route path="/visual_data" component={BankEnergi} exact />
               <Route path="/aimodel" component={AI_Model} exact />
           </Switch>
          
        </Container>
    )
}

export default MainContentContainer

/*
 width: ${({primary}) => (primary ? 'calc(100% - 55px)' : 'calc(100% - 357px)')};;

 color: #9FA2B4;
**/
