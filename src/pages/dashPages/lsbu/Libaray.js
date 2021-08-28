import React from 'react'
import { InfoLsbu } from './LsbuDataB'
import '../Styledbase.css'
import Section from './Section';

const Libaray = () => {
    const {perryLibaray} = InfoLsbu();

    return (
        <div className="main--lsbu--container">
            <Section dataGiven={perryLibaray} />
            
        </div>
    )
}

export default Libaray
