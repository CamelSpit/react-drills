import React, { Component } from 'react';
import './App.css';
import Image from "./Image";

class App extends Component {

  constructor(){
    super()

    this.state = {
      userInput:""
    }

    this.updateInput = this.updateInput.bind(this)

  }

  updateInput(URL){
    this.setState({
      userInput:URL
    })
  }

  render() {
    return (
      <div>
        <input placeholder="Put Picture URL Here" onChange={e=>this.updateInput(e.target.value)}/>
     <Image URL={this.state.userInput}/>
     </div>
    );
  }
}

export default App;
