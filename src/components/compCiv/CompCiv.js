import {complimentaryCivs, stackingCivs} from '../../matchups';
import Gallery from '../gallery/Gallery';
import './CompCiv.css';

const CompCiv = ({info, base}) => {

  const filterCivs = (civKey) => {
    const theseCivs = civKey[info.name].map(eachCivId => {
      const foundCiv = base.find(civ => civ.id === eachCivId);
      return foundCiv
    })
    return(theseCivs);
  };

  return(
    <div className="comp-civ">
        <h3>Complimentary Civs</h3>
        <div className="comp-box">
          <Gallery civs={filterCivs(complimentaryCivs)} />
        </div>
        <h3>Stacking Civs</h3>
        <div>
          <Gallery civs={filterCivs(stackingCivs)} />
        </div>
    </div>
  )
}

export default CompCiv;
