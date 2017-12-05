import React, { Component } from 'react';
import './App.css';
import Todo from "./Todo";

class App extends Component {

  constructor(){
    super()

    this.state = {
      userInput:"",
      choreArray:[]
    }
  }

  updateInput(newString){
    this.setState({
      userInput:newString
    })
  }

  updateList(){
    this.state.choreArray.push(this.state.userInput);
  }


  render() {
    return (
      <div>
        <input onChange={e=>this.updateInput(e.target.value)} />
        <button onClick={e=>this.updateList()}>Add Chore</button>
        <Todo chores={this.state.choreArray}/>
      </div>

    );
  }
}

export default App;
