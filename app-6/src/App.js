import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';

class App extends Component {
  constructor(){
    super()
    this.state={
      list:[],
      input:''
    }

    this.add = this.add.bind(this);
    this.changeInput = this.changeInput.bind(this);

  }

  changeInput(e){
    this.setState({
      input: e.target.value
    })
  }

  add(){
    let array = this.state.list;
    array.push(this.state.input);
    this.setState({
      list: array,
      input: ''
    })
  }

  render() {
    return (
      <div>
        <input value={this.state.input} onChange={this.changeInput}/>
        <button onClick={this.add}>add</button>
        <List list={this.state.list}/>
      </div>
    );
  }
}

export default App;
