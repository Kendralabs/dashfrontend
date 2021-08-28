import React, { useState } from 'react';
import styled, { css } from 'styled-components/macro';
import { motion } from 'framer-motion';
import LogoImage from '../images/klablogo.png'
import { Link } from 'react-router-dom';
import GoogleIcon from '../images/googleIcon.svg';
import { customSignGoogle } from '../SharedStyles';
import { URL_BACK } from '../../GlobalValues';
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    

`
const Wrapper = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;


`
const Box = styled(motion.div)`
    display:flex;
    padding: 10px;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    margin-bottom: 25px;

    
`
const Logo = styled(motion.img)`
    width: 450px;
    object-fit: contain;
    height: 65px;
    margin-bottom: 70px;
`;

const SignGoogleButton = styled.div`
    ${customSignGoogle}
`;

const customInputStyle = css`
    min-height: 50px;
    border: none;
    outline: none;
    position: relative;
    padding:0 10px;

    &::placeholder {
        font-size: 20px;
        color: #7A838C;
        font-weight: 200;
        opacity: 0.5;
        left: 20px;
    }

`

const InputEmail = styled.input`
   ${customInputStyle}
`;

const InputPassword = styled.input`
     ${customInputStyle}
    

`;


const LoginSection = styled(motion.div)`
    display: flex;
    flex-direction: column;
    padding: 10px 40px;
`;

const LoginFields = styled.form`
    display: flex;
    flex-direction: column;
    position: relative;
    border : 1px solid #7A838C;
    a {
        position: absolute;
        right : 10px;
        bottom : 15px;
        font-size: 18px;
        color:#990045;
        font-weight: 400;
        cursor: pointer;

        &:hover {
            opacity: 0.5;
            transform: scale(1.03) translateY(-2px);
            transition: all 500ms ease-out;

        }
    }
    margin-bottom: 23px;
    
`;

const LoginButton = styled.button`
    padding : 10px;
    font-size: 24px;
    border: 1px solid #7A838C;
    border-radius: 3px;
    color: #ffffff;
    cursor: pointer;
    background: #ED9400;

    &:hover {
            opacity: 0.5;
            transform: scale(1.03) translateY(-2px);
            transition: all 500ms ease-out;

        }
`;
const ButtomSection = styled.div`
    display: flex;
    gap : 20px;
    position: absolute;
    bottom: 15px;
    right: 10px;

    .outsider--link {
        text-decoration: none;
        color : #89B6E1;
    }
    
`;

const Login = ({ setUser }) => {
    const [usernameOrEmail, setUsernameOrEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Hitted')
        try {
            const res = await fetch(`${URL_BACK}api/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ usernameOrEmail, password })

            });
            const json = await res.json();
            const resStatus = await res.status;
            if (resStatus == 200) {
                setUser(json);
            }

        } catch (error) {

        }
    }
    return (
        <Container>
            <Wrapper>
                <Box
                    initial={{ opacity: 0, y: -200 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
                >
                    <Logo
                        src={LogoImage} />
                    <SignGoogleButton>
                        <img src={GoogleIcon} />
                        <h4>Sign in with google</h4>
                    </SignGoogleButton>
                </Box>
                <hr />
                <LoginSection
                    initial={{ opacity: 0, x: -200 }}
                    animate={{ opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.8 } }}
                >
                    <LoginFields
                        onSubmit={handleSubmit}
                        id="myForm"
                    >
                        <InputEmail
                            placeholder="Email"
                            type="text"
                            value = {usernameOrEmail}
                            onChange = {(e) => setUsernameOrEmail(e.target.value)}
                            >
                        </InputEmail>
                        <InputPassword
                            placeholder="Password"
                            type="password"
                            value = {password}
                            onChange = {(e) => setPassword(e.target.value)}
                            >

                        </InputPassword>
                        <a>Forget ?</a>

                    </LoginFields>
                    <LoginButton
                        type="submit"
                        form="myForm"
                    >Login</LoginButton>
                </LoginSection>


            </Wrapper>
            <ButtomSection>
                <Link className="outsider--link">Terms of service</Link>
                <Link className="outsider--link">Privacy policy</Link>
            </ButtomSection>
        </Container>
    )
}

export default Login
