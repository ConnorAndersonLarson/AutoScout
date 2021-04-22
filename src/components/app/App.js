import { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import { getCivs } from '../../apiCalls.js'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      civs: [],
      error: ''
    }
  }

  componentDidMount() {
    getCivs()
      .then(civs => civs.civilizations)
      .then(civs => this.setState({civs}))
      .catch(err => this.setState({ error: 'Our scouts cannot find any civs...' }))
  }

  render () {
    return(
      <>
        <header className="header">
          <h1 className="title">AutoScout</h1>
        </header>
        <main>
        <Switch>
          <Route exact path ="/">
            <section className="info-column">
            </section>
            <section className="civCase">
              <Gallery civs={this.state.civs}>
            </section>
          </Route>
        </Switch>
        </main>
      </>
    )
  }

}
export default App;
