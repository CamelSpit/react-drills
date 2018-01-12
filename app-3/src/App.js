import React, { Component } from 'react';
import './App.css';
import List from './List';

class App extends Component {
  constructor(){
    super()

    this.state={
      thing: '',
      list: ['spleen', 'kidney', 'lungs', 'right heart', 'brain']
    }

    this.change = this.change.bind(this);
  }

  change(e){
    this.setState({
      thing: e.target.value
    })
  }

  render() {
    return (
      <div>
        <input onChange={this.change}/>
        <List list={this.state.list} filter={this.state.thing}/>
      </div>
    );
  }
}

export default App;
