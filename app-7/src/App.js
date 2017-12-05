import React, { Component } from 'react';
import List from "./List";
import './App.css';
import Todo from "./Todo";
import NewTask from "./NewTask";

class App extends Component {
  constructor(){
    super()

    this.state ={
      list:[]
    }
    this.addTask = this.addTask.bind(this);
  }

  addTask(task){
    this.setState({
      list:[...this.state.list, task]
    })
    console.log(this.state.list);
  }

  render() {
    return (
      <div>
        <NewTask add={this.addTask}/>
        <List tasks={this.state.list}/>
        </div>
    
    );
  }
}

export default App;
