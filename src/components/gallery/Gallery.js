import React from 'react';
import './Gallery.css';

const Gallery = ({civs}) => {
  const civCrests = civs.map(civ => {
    return(
      <CivStats
        id={civ.id}
        exp={civ.expansion}
        name={civ.name}
        army={civ.army_type}
        tBonus={civ.team_bonus}
        sBonus={civ.civilization_bonus}
      />
    )
  })

  return (
    <div className="civ-gallery">
      {civCrests}
    </div>
  )
}
