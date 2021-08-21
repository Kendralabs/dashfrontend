import React,{useState} from 'react'
import SideBar from '../../components/SideBar';
import Topbar from '../../components/Topbar';
import styled from 'styled-components';
import fetch from 'unfetch';
import Cookies from 'js-cookie';
import './Dashboard.css';
import MainContentContainer from '../../components/MainContentContainer';
import Modal from '../../components/subcomponents/Modal';
import {URL_FRONT, URL_BACK}from '../../GlobalValues.js'

const Dashboard = ({user,setUser}) => {
    const [showMenu,setShowMenu] = useState(false);
    const [showModal, setShowModal] = useState(false)
    const DashContainer = styled.div`
        overflow-x: auto;
    `; 

const logout = async () => {
    console.log('Clicked');
    try {
      const body = {token : user.refreshToken}
      const requested = await fetch(`${URL_BACK}api/logout`,{
       method : 'POST',
       headers: { 'Content-Type': 'application/json',
       'Authorization' : 'Bearer '+ user.accessToken },
       body : JSON.stringify(body)
     })
     const responseStatus = await requested.status;
     if (responseStatus == 200) {
       setUser(null)
       Cookies.remove('AccessT')
       Cookies.remove('AccessRefreshT');
       setShowModal(false)
       window.location.href = `${URL_FRONT}`
     }
      
    } catch (error) {
      
    }
  }
    return (
        <div className="dash--container">
            <Modal 
                showModal={showModal}
                setShowModal={setShowModal}
                logout={logout}
            />
            
            <Topbar 
                user={user}
                setUser={setUser}
                setShowModal ={setShowModal}
            />
            
            <div className="main--container">
            <SideBar 
                showMenu={showMenu}
                setShowMenu={setShowMenu}
            />
            <MainContentContainer 
                showMenu={showMenu}
            />

            </div>
        </div>
    )
}

export default Dashboard
