import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state={
      input: ''
    }

    this.change = this.change.bind(this)
  }

  change(e){
    this.setState({
      input : e.target.value
    })
  }

  render() {
    return (
      <div>
        <input onChange={this.change}/><br/>
        {this.state.input}
      </div>
    );
  }
}

export default App;

//teypin text box and it shows up as text under the input box
