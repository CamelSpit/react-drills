import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./List";

class App extends Component {

  constructor(){
    super()

    this.state = {
      dataArray : ['this','is','my','boom','stick']
    }
  }

  

  render() {
    console.log(this.state.dataArray);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
  
          <List list={this.state.dataArray}/>
        
      </div>
    );
  }
}

export default App;
