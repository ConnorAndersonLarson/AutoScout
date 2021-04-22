import React from 'react';
import CivCrest from '../civCrest/CivCrest';
import './Gallery.css';

const Gallery = ({civs}) => {
  const civCrests = civs.map(civ => {
    return(
      <CivCrest
        id={civ.id}
        exp={civ.expansion}
        name={civ.name}
        army={civ.army_type}
      />
    )
  })

  return (
    <div className="civ-gallery">
      {civCrests}
    </div>
  )
}

export default Gallery;
