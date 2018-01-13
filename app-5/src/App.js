import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './image';

class App extends Component {
  constructor(){
    super()
    this.state={
      url:''
    }
    this.url = this.url.bind(this)
  }

  url(e){
    this.setState({
      url: e.target.value
    })
  }


  render() {
    return (
      <div className="App">
          <input onChange={this.url}/>
          <Image url={this.state.url}/>
      </div>
    );
  }
}

export default App;
