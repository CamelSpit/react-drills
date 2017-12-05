import React, {Component} from "react";

class Login extends Component {
    constructor(){
        super()

        this.state ={
            userName: "",
            password:""
        }
    }

    updateUN(newString){
        this.setState({
            userName:newString
        })
    }

    updatePass(newString){
        this.setState({
            password:newString
        })
    }

    enter(e){
        console.log(this.state.userName);
        alert(`UserName: ${this.state.userName} Password: ${this.state.password}`);
        e.preventDefault();
    }

    render(){
        return (
            <div>
                <input onChange={e=>this.updateUN(e.target.value)}/>
                <form onSubmit={e=>this.enter(e)}>
                <input onChange={e=>this.updatePass(e.target.value)}/>
                </form>
            </div>
        )
    }
}

export default Login;