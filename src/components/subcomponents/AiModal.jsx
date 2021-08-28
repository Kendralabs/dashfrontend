import React from 'react'
import { Link } from 'react-router-dom';
import styled, {css} from 'styled-components/macro'
import './Lsbu.css'




const AiModal = ({subMenuI}) => {
    return (
        <div
            className={subMenuI ? 'main--sub active' : 'main--sub'}
        >
            <Link className="link--item" to ="/pricepredict">
                 Price Prediction
            </Link>
            <Link className="link--item" to ="/demandpredict">
                 Energy Demand Prediction
            </Link>
            <Link className="link--item" to ="/transmissionpredict">
                Energy Transmission Prediction
            </Link>
            
        </div>
    )
}

export default AiModal
