import React from 'react';
import shield from './images';
import './CivCrest.css';

const CivCrest = ({id, exp, name, army}) => {

 const findCrest = (army_type) => {
   let at = army_type.toLowerCase()
   if (at.includes('infantry') || at.includes('siege')) {
     return shield.red
   } else if (at.includes('calvary') || at.includes('cavalry') || at.includes('elephant')) {
     return shield.yellow
   } else if (at.includes('archer') || at.includes('gunpowder')) {
     return shield.green
   } else if (at.includes('naval')) {
     return shield.blue
   } else {
     return shield.grey
   }
 }

 findCrest(army)
  return (
    <div className='crest' id={id} key={id} >
      <img src={findCrest(army)} alt="shield being used as a background" className="crestImg" />
      <h3 className={`${exp} civ-name`}><b>{name}</b></h3>
    </div>
  )
}

export default CivCrest;
