import React from 'react'
import { Link } from 'react-router-dom';
import styled, {css} from 'styled-components/macro'
import './Lsbu.css'


/** 
const MainContainer = styled.div`
    transition: all 800ms ease-out;
    display: flex;
    width: 80%;
    flex-direction: column;
    height: ${props => (props.primary ? 'auto' : '0')};
    margin-left: 10px;

    .link--item {
        text-decoration:none;
        color:#7A838C;
        width: 100%;
        padding: 5px;
        border-radius: 3px;

        &:hover {
            background: #E9CDCD;
        }
    }
`; **/

const Lsbu = ({subMenu}) => {
    return (
        <div
            className={subMenu ? 'main--sub active' : 'main--sub'}
        >
            <Link className="link--item" to ="/enrgyconsumption">
            Building Energy Consumption
            </Link>
            <Link className="link--item" to="/carbonemission">
            Building Carbon Emission
            </Link>
            {/** 
            <Link className="link--item" to ="/building">
                 Building
            </Link>
            <Link className="link--item" to ="/libaray">
                 Library
            </Link>
            <Link className="link--item" to ="/centers">
            Centres
            </Link>
            <Link className="link--item" to ="/houses">
            Houses
            </Link>  */}
            
        </div>
    )
}

export default Lsbu
