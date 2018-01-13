import React, { Component } from 'react';
import './App.css';
import List from './List';
import Newtask from './Newtask';

class App extends Component {
  constructor(){
    super()
    this.state={
      list:[]
    }

    this.updateList = this.updateList.bind(this);
  }

  updateList(input){
    let array = this.state.list;
    array.push(input)
    this.setState({
      list: array
    })
  }

  render() {
    return (
      <div className="App">
        <Newtask cb={this.updateList}/>
        <List list={this.state.list}/>
      </div>
    );
  }
}

export default App;
