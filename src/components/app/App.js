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
      .then(civs => civs.civilizations)
      .then(civs => this.setState({civs}))
      .catch(err => this.setState({ error: 'Our scouts cannot find any civs...' }))
  }

  crestClick = (civId) => {
    console.log(civId)

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

  addFavorites = (thisCiv) => {
    console.log(thisCiv)
    let faveFind = this.state.favorites.find(civ => civ.id === thisCiv.id)
    if (!faveFind) {
      this.setState(prevState => ({favorites: [...prevState.favorites, thisCiv]}))
    }
  }

  render () {
    return(
      <div className="main-page">
        <header className="header">
          <h1 className="title">AutoScout</h1>
        </header>
          <main>
              <section className="info-column">
                <div>
                  {!!this.state.civ && <CivInfo props={this.state.civ} /> }
                </div>
                <div>
                  <Link to={`/${this.state.civId}`}>
                    {!!this.state.civ && <button className="primaryButton" onClick={ this.changePage }>{this.state.civId ? `Inspect ${this.state.civId}!` : 'Return Home!'}</button> }
                  </ Link>
                </div>
                <div className="favorites">
                  <h3>Favorite Civs!</h3>
                    <Gallery civs={this.state.favorites} crestClick={this.crestClick}/>
                </div>
              </section>
              <Switch>
                <Route exact path ="/" render={() => {
                  return (
                    <div className="gallery-box">
                      <Gallery civs={this.state.civs} crestClick={this.crestClick} />
                    </div>
                  )
                }} />
                <Route path="/:name" render={({ match }) => {
                  const thisCiv = this.state.civs.find(civ => civ.name === match.params.name);
                  return (
                    <>
                      {!thisCiv && <h2> Scouting for your civs...</h2>}
                      {thisCiv &&
                      <>
                        <CompCiv info={thisCiv} base={this.state.civs} crestClick={this.crestClick} updateCiv={this.updateCiv} addFavorites={this.addFavorites}  />
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
