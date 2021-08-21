import React from 'react'
import styled, {css} from 'styled-components';
import LogoImageSource from '../images/klablogo.png'
import GoogleIcon from '../images/googleIcon.svg';
import { customInputFieldStyle, customInputStyle, customSignGoogle, customSignLogin } from '../SharedStyles';

 
const Container = styled.div`
    width: 100%;
    height: 100vh;
    
`;

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
`;

const SectionFirst = styled.div`
    flex: 1;
    height: 100%;
    background: #001555;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

const LogoContainer = styled.div`
    background: #ffffff;
    width:320px;
    height: 320px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
    
`;

const LogoImage = styled.img`
    height: 31px;
    width: 308px;
    object-fit: contain;

`;
const SectionSecond = styled.div`
    flex : 2.5;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TextContainer = styled.div`
    width: 60%;
    text-align:left;
    p{
        line-height:2;
        font-size: 22px;
        color:#fff;
    }

`;

const SignGoogleButton = styled.div`
    ${customSignGoogle}
    margin-bottom: 30px;
`; 
const WrapperInside = styled.div`
    
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .or {
        font-size: 34px;
        font-weight: 300;
        margin-bottom: 10px;
    }
`;

const LoginButton = styled.button`
    ${customSignLogin}
`
const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-top: 30px;
`;

const InputField = styled.div`
    ${customInputFieldStyle}

`;
const Input = styled.input`
    ${customInputStyle}
    width: 100%;
    border:1px solid #7A838C;
`;

const CheckBox = styled.input`
    width: 20px;
    height: 24px;
    border-radius: 0px;
    margin-right: 15px;
`;

const CheckBoxSection = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;

    p {
        font-size: 18px;
        color:#455263;
    }

    a {
        color : #89B6E1;
        cursor: pointer;
    }


`;

const Register = () => {
    return (
        <Container>
            <Wrapper>
            <SectionFirst>
                 <LogoContainer>
                    <LogoImage
                        src={LogoImageSource}
                    />
                 </LogoContainer>
                 <TextContainer>
                 <p>
                 Register now and get full access to everything -
 unlimited flows, unlimited connectors, unlimited scalability.
 Build integrations, collaborate with your colleagues and
 access support .</p>
                 </TextContainer>

            </SectionFirst>
            <SectionSecond>
                <WrapperInside>
                    <SignGoogleButton>
                    <img src={GoogleIcon} />
                     <h4>Sign up with google</h4>
                    </SignGoogleButton>
                    <h4 className="or">Or</h4>
                    <form>
                        <hr></hr>
                        <FormContainer>
                            <InputField>
                                 <p>Email</p>
                                 <Input type="Email" />
                            </InputField>
                            <InputField>
                                <p>Password</p>
                                <Input type="Password" 
                                       placeholder = "Password" 
                                />

                            </InputField>
                            <CheckBoxSection>
                                <CheckBox type="checkbox" />
                                <p>I agree to <a>terms of service</a> and <a>privacy policy</a></p>
                            </CheckBoxSection>
                        </FormContainer>
                        <LoginButton> 
                                Sign up
                        </LoginButton>
                    </form>

                </WrapperInside>

            </SectionSecond>
            </Wrapper>
        </Container>
    )
}

export default Register
