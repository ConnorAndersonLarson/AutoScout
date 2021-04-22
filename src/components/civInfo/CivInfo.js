import React from 'react';
import './CivInfo.css';

const CivInfo = ({id, exp, name, army, tBonus, sBonus}) => {

  return (
    <div className='civ-info' id={id}>
      <h3 className={exp}><b>{name}</b></h3>
      <p><b>Focus: </b>{army}</p>
      <p><b>Team Bonus: </b>{tBonus}</p>
      <p><b>Civ Bonus: </b>{sBonus}</p>
    </div>
  )
}

export default CivInfo;
