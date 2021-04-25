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
    let thisCiv = this.state.civs.find(civ => civ.id === Number(civId))
    this.setState({ civ: thisCiv, civId: thisCiv.id })
  }

  changePage = () => {
    if (this.state.civ.id === this.state.civId) {
      this.setState({civId: ''})
    } else {
      this.setState({civId: this.state.civ.id })
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
                    {!!this.state.civ && <button className="primaryButton" onClick={ this.changePage }>{this.state.civId !== '' ? 'Inspect!' : 'Return Home!'}</button> }
                  </ Link>
                </div>
                <div>
                </div>
              </section>
              <Switch>
                <Route exact path ="/">
                    <Gallery civs={this.state.civs} crestClick={this.crestClick} />
                </Route>
                <Route path="/:id">
                  <CompCiv info={this.state.civ} base={this.state.civs} crestClick={this.crestClick} />
                </Route>
              </Switch>
        </main>
        <footer className="footer">
        </footer>
      </div>
    )
  }

}
export default App;
