import { Component } from 'react';
import { Switch, Route, Link} from 'react-router-dom';
import { getCivs } from '../../apiCalls.js';
import Gallery from '../gallery/Gallery';
import CivInfo from '../civInfo/CivInfo';
import CompCiv from '../compCiv/CompCiv';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      civs: [],
      civ: null,
      civId: '',
      location: 'home',
      favorites: [],
      error: ''
    }
  }

  componentDidMount() {
    getCivs()
      .then(response => {
        if (!response.ok) {
          throw new Error();
        }
        return response.json();
      })
      .then(civs => civs.civilizations)
      .then(civs => this.setState({civs: this.cleanData(civs)}))
      .catch(err => this.setState({ error: 'Our scouts cannot find any civs...' }))
    this.setState({favorites: (JSON.parse(localStorage.getItem('favorites')) || [])})
  }

  cleanData = (data) => {
    return data.map(block => {
      return {
        id: block.id,
        name: block.name,
        expansion: block.expansion,
        army_type: block.army_type,
        team_bonus: block.team_bonus,
        civilization_bonus: block.civilization_bonus
  }
    })
  }

  crestClick = (civId) => {
    if ((civId !== this.state.civId && this.state.location) || (this.state.civId === this.state.location) || (this.state.civId && !this.state.location)) {
      let thisCiv = this.state.civs.find(civ => civ.name === civId)
        this.setState({ civ: thisCiv, civId: thisCiv.name })
    }
  }

  updateCiv = (civInfo) => {
    if (this.state.civ !== civInfo) {
      this.setState({ civ: civInfo })
    }
  }

  changePage = () => {
    if (this.state.civId !== '') {
      this.setState({civId: '', location: ''})
    } else {
      this.setState({civId: this.state.civ.name, location: 'home'})
    }
  }

  alterFavorites = (thisCiv) => {
    let faveFind = this.state.favorites.find(civ => civ.id === thisCiv.id)
    if (!faveFind) {
      this.setState(prevState => ({favorites: [...prevState.favorites, thisCiv]}))
      localStorage.setItem(`favorites`, JSON.stringify([...this.state.favorites, thisCiv]));
    } else {
      let unFave = this.state.favorites.filter(civ => civ.id !== thisCiv.id)
      this.setState({favorites: unFave})
      localStorage.setItem(`favorites`, JSON.stringify(unFave));
    }
  }

  render () {
    return(
      <div className="main-page">
        <header className="header">
          <img className="title-pic" src={window.location.origin + `/icons/scoutCav.png`} alt="Sprite of a soldier on horse, known as Scout Cavalry in Age of Empires II" />
          <Link to="/">
            <h1 className="title">AutoScout</h1>
          </Link>
        </header>
          <main>
              <section className="info-column">

                  {!!this.state.civ && <CivInfo props={this.state.civ} /> }


                  <Link to={`/${this.state.civId}`} aria-label="Link to inspect civilization after selecting a civ crest.">
                    {!!this.state.civ && <button className="primaryButton" onClick={ this.changePage }>{this.state.civId ? `Inspect ${this.state.civId}!` : 'Return Home!'}</button> }
                  </ Link>

                <div className="favorites">
                    {this.state.favorites.length !== 0 && <h3>Favorite Civs!</h3>}
                    <Gallery civs={this.state.favorites} crestClick={this.crestClick}/>
                </div>
              </section>
              <Switch>
                <Route exact path ="/" render={() => {
                  return (
                    <div className="gallery-box">
                      {!this.state.error && <Gallery civs={this.state.civs} crestClick={this.crestClick} />}
                      {!!this.state.error && <h2 className="error">{this.state.error}</h2>}
                    </div>
                  )
                }} />
                <Route path="/:name" render={({ match }) => {
                  const thisCiv = this.state.civs.find(civ => civ.name === match.params.name);
                  return (
                    <>
                      {!thisCiv && <h2 className="error">Our scout is having difficulty finding your civ...</h2>}
                      {thisCiv &&
                      <>
                        <CompCiv info={thisCiv} base={this.state.civs} crestClick={this.crestClick} updateCiv={this.updateCiv} alterFavorites={this.alterFavorites}  />
                      </>
                      }
                    </>
                  )
                }} />
              </Switch>
          </main>
        <footer className="footer">
        </footer>
      </div>
    )
  }

}
export default App;
