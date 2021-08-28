import React from 'react'
import { InfoLsbu } from './LsbuDataB'
import '../Styledbase.css'
import Section from './Section';

const BuildingCarbonEmission = () => {
    const {K2, techPark, londonRoad, boroughRoad, perryLibaray, clearanceCenter, keyworthCenter, mclarenHouse,total} = InfoLsbu();
   
   
    return (
       
        
        <div className="main--lsbu--container">
            <Section dataGiven={total} type="Emission" title={total && total.titleCarbon}/>
              
           <Section dataGiven={K2} type="Emission" title={K2 && K2.title}/>
           <Section dataGiven={techPark} type="Emission" title={techPark && techPark.title} />
           <Section dataGiven={londonRoad} type="Emission" title={londonRoad && londonRoad.title} />
            <Section dataGiven={boroughRoad} type="Emission" title={ boroughRoad &&  boroughRoad.title} />
            <Section dataGiven={perryLibaray} type="Emission"  title={ perryLibaray && perryLibaray.title}/>
            <Section dataGiven={clearanceCenter} type="Emission"  title={clearanceCenter && clearanceCenter.title}/>
            <Section dataGiven={keyworthCenter} type="Emission" title={ keyworthCenter && keyworthCenter.title} />
            <Section dataGiven={mclarenHouse} type="Emission"  title={mclarenHouse && mclarenHouse.title}/>
            
           
            </div>
            
            

        
    )
}

export default BuildingCarbonEmission
