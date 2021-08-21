import React from 'react';
import styled, { css } from 'styled-components/macro'
import LogoImageSource from '../images/klablogo.png';
import { customInputFieldStyle, customInputStyle, customSignLogin } from '../SharedStyles';
const Container = styled.div`
    width: 100%;
    height: 100vh;
    overflow-x:auto;
    

`;

const TopBar = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    position: relative;
`;
const Image = styled.img`
     height: 50px;
     width: 200px;
     object-fit: contain;
     margin-right: 10px;
`;

const BottomSection = styled.div`
    display: flex;
    width: 100%;
    height: calc(100vh - 70px);
    display: flex;

    h5 {
        color:#FB1010;
    }

    .table--notes {
        border-spacing: 20px 0;
        color : #FB1010;
    }

    .table--notes td {
        vertical-align: top;
        
        
    }
    .note--section {
        margin-left: 50px;
    }
    
`;

const LeftColumn = styled.div`
    flex:3;
    min-width: 400px;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 10px;
    overflow-y: auto;
    overflow-x: visible;
   
`;
const InputField = styled.div`
    ${customInputFieldStyle}
    width: 100%;
    margin-bottom: 25px;
    p {
        font-size: 18px;
        margin-bottom: 10px;
        font-weight: 500;
    }
    

`;
const Input = styled.input`
    ${customInputStyle}
    width: 100%;
    height: 35px;
    border-radius: 3px;
    border:1px solid #7A838C;
`;

const WrapperLeft = styled.div`
    display: flex;
    min-width: 420px;
    max-width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 10px;

    h3 {
        color: #ED9400;
        font-size: 30px;
        font-weight: 400;
        margin-bottom: 30px;

    }


`
const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 60%;
    padding: 0 10px;
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
const OutsidePuts = styled.div`
    padding-left: 10px;
    font-weight: 300;
    color: #7A838C;

    h4 {
        font-size: 18px;
        font-weight: 500;
    }
`;
const ChechBoxes = styled.div`
    display: flex;
    gap : 10px;
    justify-content: flex-start;
    align-items: center;
`;

const ProceedButton = styled.div`
    ${customSignLogin}
    margin-top: 50px;
    width: 30%;
    display: flex;
    justify-content: center;
`;
const RightColumn = styled.div`
    flex:1;
    min-width: 400px;
    width:100%;
    padding-top:80px;
    position: relative;


`;
const WrapperRight = styled.div`
    width: 100%;
    height: 380px;
    background: #001555;
    border: 2px solid #7A838C;
    display: flex;
    justify-content: center;
    align-items: center;
    padding:5px;
    border-radius: 3px;
`

const BoxProfile = styled.div`
    width: 65%;
    height: 85%;
    display: flex;
    align-items: center;
    flex-direction: column;
    
`;

const AreaPicture = styled.div`
    width: 100%;
    height: 70%;
    background: #fff;
    margin-bottom: 20px;
    border-radius: 3px;
    border: 2px solid #7A838C;
`;

const UploadButton = styled.div`
    min-width: 80%;
    height: 15%;
    background: #fff;
    border-radius: 3px;
    border: 1.5px solid blue;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    cursor: pointer;

    h6 { 
        color : #001555;
        font-size: 14px;

    }

    &:hover {
        background: rgb(118, 144, 233);
        transition: all 500ms ease-out;
    }

`;
const ProfileSetUp = () => {
    return (
        <Container>
            <TopBar>
                <Image
                    src={LogoImageSource} />
                <hr style={{ width: '100%', position: 'absolute', bottom: '0' }} />
            </TopBar>
            <BottomSection>
                <LeftColumn>
                    <form>
                        <WrapperLeft>
                            <h3>Let's set up your profile:</h3>
                            <Inputs>
                                <InputField>
                                    <p>First name : </p>
                                    <Input type="text" />
                                </InputField>

                                <InputField>
                                    <p>Last name : </p>
                                    <Input type="text" />
                                </InputField>
                                <InputField>
                                    <p>Username: </p>
                                    <Input type="text" />
                                </InputField>
                                <InputField>
                                    <p>Phone number: </p>
                                    <Input type="text" />
                                </InputField>
                                <OutsidePuts>
                                    <h4>I would like to register as :</h4>
                                    <ChechBoxes>
                                        <CheckBoxSection>
                                            <CheckBox type="checkbox" />
                                            <p>Data scientist</p>
                                        </CheckBoxSection>
                                        <CheckBoxSection>
                                            <CheckBox type="checkbox" />
                                            <p>Software engineer</p>
                                        </CheckBoxSection>
                                    </ChechBoxes>
                                </OutsidePuts>
                            </Inputs>
                            <div className="note--section">
                                <h5>Notes :</h5>
                                <table className="table--notes">
                                    <tr>
                                        <td>.</td>
                                        <td>It is not mandotary uploading a profile picture but we highly recommend having a profile picture.</td>
                                    </tr>
                                    <tr>
                                        <td>.</td>
                                        <td>you are able to login later either with you email or your username.</td>
                                    </tr>
                                </table>

                                <ProceedButton>
                                    <h6>Proceed </h6>
                                </ProceedButton>

                            </div>
                        </WrapperLeft>
                    </form>
                </LeftColumn>

                <RightColumn>
                    <WrapperRight>
                        <BoxProfile>
                            <AreaPicture />
                          
                            <UploadButton>
                                <h6>Upload a profile picture</h6>
                            </UploadButton>
                        </BoxProfile>
                    </WrapperRight>
                </RightColumn>
            </BottomSection>


        </Container>
    )
}

export default ProfileSetUp
