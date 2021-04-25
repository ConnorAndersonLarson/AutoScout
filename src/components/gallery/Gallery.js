import React from 'react';
import PropTypes from 'prop-types';
import CivCrest from '../civCrest/CivCrest';
import './Gallery.css';

const Gallery = ({civs, crestClick}) => {
  const civCrests = civs.map(civ => {
    return(
      <CivCrest
        key={`${civ.id}-${civ.name}`}
        id={civ.id}
        exp={civ.expansion}
        name={civ.name}
        army={civ.army_type}
        crestClick={crestClick}
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

Gallery.propTypes = {
  civs: PropTypes.array,
  crestClick: PropTypes.func
}
