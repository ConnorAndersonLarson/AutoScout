import React, { Component } from 'react';
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
}
export default App;
