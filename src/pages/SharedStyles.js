import styled, {css} from 'styled-components';

export const customSignGoogle = css`
padding: 5px 30px;
border-radius: 3px;
gap : 5px;
border : 1px solid #7A838C;
display: flex;
cursor: pointer;
h4 {
    font-size: 24px;
    color: #D8D8D8;
    font-weight: 300;

}

&:hover {
    background: #ED9400;
    transform: translateY(-1px) scale(1.03);
    transition: all 500ms ease-out;
    
}
`;

export const customSignLogin = css`
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
`

export const customInputStyle = css`
height: 50px;
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

export const customInputFieldStyle = css`
    width: 460px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    p {
        font-size: 24px;
        color: #7A838C;
        font-weight: 300;
    }
`