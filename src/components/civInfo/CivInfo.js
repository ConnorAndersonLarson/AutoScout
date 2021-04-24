import React from 'react';
import './CivInfo.css';

const CivInfo = ({props}) => {

  const civBonus = props.civilization_bonus.map(bonus => <React.Fragment><li>{bonus}<br /></li></React.Fragment>)

  return (
    <div className='civ-info' id={props.id}>
      <h3 className={props.expansion}><b>{props.name}</b></h3>
      <p><b>Focus: </b>{props.army_type}</p>
      <p><b>Team Bonus: </b>{props.team_bonus}</p>
      <p><b>Civ Bonus: </b>{civBonus}</p>
    </div>
  )
}

export default CivInfo;
