import React from 'react'
import styled, {css} from 'styled-components/macro';
import Button from '../button/Button';
import './Modal.css'


const MainContainer = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    background: rgba(155,154,154,0.65);
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const CharContainer = styled.div`
    min-width: 320px;
    min-height: 200px;
    width: 30%;
    height: 20%;
    background: white;
    border-radius: 5px;
    border :3px solid #7A838C;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0 0 0;

    
    .question--class {
        font-size: 20px;
        font-weight: 500;
        color: #7A838C;
        margin-bottom: 35px;
        text-align: center;
    }
    .note--span {
        font-size: 12px;
        color: red;
    }

`;

const Modal = ({showModal,setShowModal, logout}) => {
    return showModal ? <MainContainer>
        <CharContainer>
            <h4 className="question--class">Would you like to logout from the Dashboard ?</h4>
            <div className="choice--container">
                <Button 
                    buttonSize = 'btn--large'
                    textGiven = 'Yes'
                    onClick = {logout}

                    
                />
                <Button
                    buttonSize = 'btn--large'
                    textGiven = 'No'
                    onClick = {setShowModal}
                    argument = {false}
                />
            </div>
            <p className="note--span">Note : you will redirected straight to the login page</p>
         </CharContainer>

    </MainContainer> : null
}

export default Modal
