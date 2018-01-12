import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './list';

class App extends Component {
  constructor(){
    super()
    this.state={
      things: ['raindrops', 'roses', 'whishkers', 'kittens', 'copper', 'kettles', 'woollen mittens']
    }

    
  }

  render() {
    return (
      <div>
        <List things={this.state.things}/>
      </div>
    );
  }
}

export default App;
