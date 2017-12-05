import React, { Component } from 'react';
import './App.css';
import List from "./List";
import onEnter from "react-onenterkeydown";

class App extends Component {

  constructor(){
    super()

    this.state = {
      userInput:"",
      dataArray : ['this','is','my','boom','stick'],
      filteredArray:[]
    }

    this.updateInput = this.updateInput.bind(this)
  }

  updateInput(newString){
    this.setState({
      userInput:newString
    })
  }

  enterKey(e){
      var tempArray = this.state.dataArray.filter(item=> item===this.state.userInput);
          this.setState({
            filteredArray:tempArray
          })
      e.preventDefault();
  }

  render() {
    return (
        <div>
          <form onSubmit={e=>this.enterKey(e)}>
          <input onChange={e=>this.updateInput(e.target.value)} />
          </form>
           <List list={this.state.dataArray}/>
           {this.state.filteredArray}
      </div>
    );
  }
}

export default App;
