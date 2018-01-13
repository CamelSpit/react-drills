import React, { Component } from 'react';

export default class Newtask extends Component{
    constructor(props){
        super(props)
        this.state = {
            input: ''
        }

    this.add = this.add.bind(this);
    }

    input(newString){
        this.setState({
            input: newString
        })
    }

    add(event){
        this.props.cb(this.state.input)
        this.setState({
            input: ''
        })
    }

    render(){
        return(
            <div>
            <input value={this.state.input} onChange={e=>this.input(e.target.value)}/>
            <button onClick={this.add}>Add</button>
            </div>
        )
    }
}