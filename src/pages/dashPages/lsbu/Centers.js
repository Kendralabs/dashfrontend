import React from 'react'
import { InfoLsbu } from './LsbuDataB'
import '../Styledbase.css'
import Section from './Section';

const Centers = () => {
    const {clearanceCenter, keyworthCenter} = InfoLsbu();

    return (
        <div className="main--lsbu--container">
            <Section dataGiven={clearanceCenter} />
            <Section dataGiven={keyworthCenter} />
            
        </div>
    )
}

export default Centers

