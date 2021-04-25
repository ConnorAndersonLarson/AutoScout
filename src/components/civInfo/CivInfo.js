import React from 'react';
import PropTypes from 'prop-types';
import './CivInfo.css';

const CivInfo = ({props}) => {

  const civBonus = props.civilization_bonus.map((bonus, i) => {
    return <React.Fragment><li key={i.toString()}>{bonus}<br /></li></React.Fragment>
  })

  return (
    <div className='civ-info' id={props.id}>
      <h3 key={'1'} className={props.expansion}><b>{props.name}</b></h3>
      <p key={'2'} ><b>Focus: </b>{props.army_type}</p>
      <p key={'3'} ><b>Civ Bonus: </b>{civBonus}</p>
      <p key={'4'} ><b>Team Bonus: </b>{props.team_bonus}</p>
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
