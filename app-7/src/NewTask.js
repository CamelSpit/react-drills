import React, { Component } from 'react';

class NewTask extends Component {

    constructor(){
        super()

        this.state = {
            input:""
        }
    this.add = this.add.bind(this)
    }

updateInput(newString){
    this.setState({
        input:newString
    })
}

add(){
    this.props.add(this.state.input);
    this.setState({
        input:""
    })
}

    render() {
      return (
        <div>
            <input value={this.state.input}
                placeholder="Type Task Here"
                onChange={e=>this.updateInput(e.target.value)}
            />
            <button onClick={this.add}>Add Task</button>
            </div>
      );
    }
  }
  
  export default NewTask;