import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super()

    this.state = {
      userInput : ''
    }
  }

  updateInput(newString) {
    this.setState ({
      userInput : newString
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <input onChange={e => this.updateInput(e.target.value)}/>
        </p>
        <p> {this.state.userInput}</p>
      </div>
    );
  }
}

export default App;
