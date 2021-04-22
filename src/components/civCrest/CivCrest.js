import React from 'react';
import './CivStats.css';

const CivCrest = ({id, exp, name, army}) => {

  return (
    <div className='crest' id={id} >
      <h3 className={exp}><b>{name}</b></h3>
    </div>
  )
}
