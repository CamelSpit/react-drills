import React, { Component } from 'react';

export default class Login extends Component{
constructor(){
    super()
    this.state={
        username:"",
        password:'',
        submit: false
    }

    this.username = this.username.bind(this);
    this.password = this.password.bind(this);
    this.submit = this.submit.bind(this);
}

    username(e){
        this.setState({
            username: e.target.value
        })
    }

    password(e){
        this.setState({
            password: e.target.value
        })
    }

    submit(){
        this.setState({
            submit: true
        })
    }

    render(){
    return(
        <div>
           <div>
           Username <input onChange={this.username}/><br/>
           Password <input onChange={this.password}/><br/>
           <button onClick={this.submit}>Login</button>
           </div>
           <div>{(this.state.submit) ? alert(`Username: ${this.state.username} Password: ${this.state.password}`) : ''}</div>
        </div>
    )
}
}