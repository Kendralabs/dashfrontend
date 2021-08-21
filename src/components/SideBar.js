import React ,{useState}from 'react'
import styled ,{css} from 'styled-components/macro'
import {Link} from 'react-router-dom';
import Chat from './images/icons/ComponentChat.svg';
import Docs from './images/icons/Docs.svg';
import Vector from './images/icons/Vector.svg';
import Dashboard from '../pages/dashboard/Dashboard';
import DashMenu from './DashMenu.js';


const Container = styled.div`
    
    height: 100%;
    border-radius:2px;
    position: sticky;
    overflow-x: visible;
    transition: all 250ms ease-out;
   
`;

const Wrapper = styled.div`
    width: 55px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 10px;
    align-items:center;
    overflow-x: visible;
    background-color:#001555;
    gap:5px;
    position: relative;


    .icon--link {
        text-decoration: none;
        
    }
    .menu-icon {
        margin-top:10px;
    }
    .icon--link:hover {
        opacity: 0.5;
        transform: translateY(-1px);
        transition: all 250ms ease-in-out;
    }

    img {
        width: 24px;
        height: 24px;
    }

    .icon--chat {
        width: 45px;
        height: 45px;
    }
    .bottom--icons {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
`;
/**
const DashMenu = styled.div`
    height: 778px;
    width:400px;
    background: #fff;
    margin-bottom: 15px;
    -webkit-box-shadow: 6px 4px 22px -2px rgba(28,28,28,0.62); 
    box-shadow: 6px 4px 22px -2px rgba(28,28,28,0.62);
    position: sticky;
`;

**/



const SideBar = ({showMenu,setShowMenu}) => {
    const menuNoShows = {width :'55px',transition:'all 650ms ease-out'};
    const menuShown = {width :'357px',transition:'all 650ms ease-out'};
    return (
        <Container style={showMenu ? menuShown : menuNoShows}>
            <Wrapper>
                <DashMenu
                    cName = {showMenu ? 'main-container active' :'main-container'} 
                />
                
                <Link className="icon--link menu-icon" onClick={() => setShowMenu(!showMenu)}>
                    <img src={Vector} />
                </Link>
                <div className="bottom--icons">
                <Link className="icon--link" >
                    <img src={Docs} />
                </Link>
                
                <Link className="icon--link" >
                    <img className="icon--chat" src={Chat}/>
                </Link>
                </div>
            </Wrapper>
            
        </Container>
    )
}

export default SideBar
