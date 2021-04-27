import React from 'react';
import PropTypes from 'prop-types';
import './CivInfo.css';

const CivInfo = ({props}) => {

  const civBonus = props.civilization_bonus.map((bonus, i) => {
    return <React.Fragment key={i.toString()}><li>{bonus}<br /></li></React.Fragment>
  })

  return (
    <div className='civ-info' id={props.id}>
      <h2 className="target-civ"><b>{props.name}</b></h2>
      <p ><b>Focus: </b>{props.army_type}</p>
      <div>
        <b>Civ Bonus: </b>
        <ul>{civBonus}</ul>
      </div>
      <p  ><b>Team Bonus: </b>{props.team_bonus}</p>
    </div>
  )
}

export default CivInfo;

CivInfo.propTypes = {
  civilization_bonus: PropTypes.array,
  id: PropTypes.number,
  expansion: PropTypes.string,
  name: PropTypes.string,
  team_bonus: PropTypes.string
}
