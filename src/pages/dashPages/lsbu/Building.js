import React from 'react'
import { InfoLsbu } from './LsbuDataB'
import '../Styledbase.css'
import Section from './Section';


const Building = () => {
    const {K2, techPark, londonRoad, boroughRoad} = InfoLsbu();
   
    console.log(boroughRoad)
    return (
        <div className="main--lsbu--container">
            
            <Section dataGiven={K2} />
            <Section dataGiven={techPark} />
            <Section dataGiven={londonRoad} />
            <Section dataGiven={boroughRoad} />
            
            
        </div>
    )
}

export default Building
