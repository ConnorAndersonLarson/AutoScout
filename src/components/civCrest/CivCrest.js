import React from 'react';
//import tRoR from './shield-The Rise of Rajas.png';
import './CivCrest.css';

const CivCrest = ({id, exp, name, army}) => {

  return (
    <div className='crest' id={id} >
      <img src={`icons/${exp}.png`} alt="shield being used as a background" className="crestImg" />
      <h3 className={`${exp} civ-name`}><b>{name}</b></h3>
    </div>
  )
}

export default CivCrest;
