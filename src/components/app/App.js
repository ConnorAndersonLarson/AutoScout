import { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import { getCivs } from '../../apiCalls.js';
import Gallery from '../gallery/Gallery';
import CivInfo from '../civInfo/CivInfo';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      civs: [],
      civId: null,
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
    this.setState({ civ: thisCiv })
  }


  render () {
    return(
      <div className="main-page">
        <header className="header">
          <h1 className="title">AutoScout</h1>
        </header>
        <main>
        <Switch>
          <Route exact path ="/">
              <section className="info-column">
                <div>
                  {!!this.state.civ && <CivInfo props={this.state.civ} /> }
                </div>
                <div>
                </div>
                <div>
                </div>
              </section>
              <section className="civCase">
                <Gallery civs={this.state.civs} crestClick={this.crestClick} />
              </section>
          </Route>
        </Switch>
        </main>
      </div>
    )
  }

}
export default App;
