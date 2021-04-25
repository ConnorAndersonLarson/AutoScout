import React from 'react';
import './CivCrest.css';

const CivCrest = ({id, exp, name, army, crestClick}) => {

 const findType = (army_type) => {
   let at = army_type.toLowerCase()
   if (at.includes('infantry') || at.includes('siege')) {
     return 'red'
   } else if (at.includes('calvary') || at.includes('cavalry') || at.includes('elephant')) {
     return 'yellow'
   } else if (at.includes('archer') || at.includes('gunpowder')) {
     return 'green'
   } else if (at.includes('naval')) {
     return 'blue'
   } else {
     return 'grey'
   }
 }

 
  return (
    <div className='crest' id={id} key={id} onClick={ event => { crestClick(event.target.closest('div').id) } } >
      <img src={window.location.origin + `/civIcons/CivIcon-${name}.png`} key={`icon-${id}`} alt={`Crest of the ${name} civilization`} className="crestIcon" />
      <h3 className={`${findType(army)} civ-name`} key={`name-${id}`}><b>{name}</b></h3>
    </div>
  )
}

export default CivCrest;
