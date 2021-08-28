import React from 'react'
import { InfoLsbu } from './LsbuDataB'
import '../Styledbase.css'
import Section from './Section';

const Houses = () => {
    const {mclarenHouse} = InfoLsbu();

    return (
        <div className="main--lsbu--container">
            <Section dataGiven={mclarenHouse} />
            
        </div>
    )
}

export default Houses