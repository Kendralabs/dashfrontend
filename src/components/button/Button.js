import React from 'react';
import './Button.css';

const Button = ({ buttonSize, buttonColor, textGiven ,onClick, argument}) => {
    const SIZES = ['btn--small', 'btn--large']
    const COLORS = ['btn--orange', 'btn--red']
    const classSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    const classColor = COLORS.includes(buttonColor) ? buttonColor : COLORS[0]
    return (
        <div className={`btns ${classSize} ${classColor}`}
            onClick={() => onClick(argument)}
        > 
            <h4>{textGiven}</h4>
        </div>
    )
}

export default Button
