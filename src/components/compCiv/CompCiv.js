import {useEffect} from 'react';
import {complimentaryCivs, stackingCivs} from '../../matchups';
import PropTypes from 'prop-types';
import Gallery from '../gallery/Gallery';
import './CompCiv.css';

const CompCiv = ({info, base, crestClick, updateCiv, alterFavorites}) => {
  useEffect(() => {
    updateCiv(info)
  })

  const filterCivs = (civKey) => {
    const theseCivs = civKey[info.name].map(eachCivId => {
      const foundCiv = base.find(civ => civ.id === eachCivId);
      return foundCiv
    })
    return(theseCivs);
  };


  const alterFave = () => {
    alterFavorites(info)
  }

  return(
    <div className="comp-civ">
        <h3 className="comp">Complimentary Civs</h3>
        <div className="comp-box">
          <Gallery civs={filterCivs(complimentaryCivs)} crestClick={crestClick} />
        </div>
        <h3 className="stack">Stacking Civs</h3>
        <div className="stack-box">
          <Gallery civs={filterCivs(stackingCivs)} crestClick={crestClick} />
        </div>
        <button className="fave-button" onClick={alterFave} >Add/Remove from Favorites!</button>
    </div>
  )
}

export default CompCiv;

CompCiv.propTypes = {
  info: PropTypes.object,
  base: PropTypes.array,
  updateCiv: PropTypes.func
}
