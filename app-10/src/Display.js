import React, { Component } from 'react';
import axios from 'axios';

export default class Display extends Component{
    constructor(props){
        super(props)

        this.state={
            pokemon:[]
        }
    }
    

componentWillMount(){

    let name = this.props.match.params.name;
    console.log(name);

    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(res=>{
        console.log(res.data);
        this.setState({
            pokemon: res.data
        })
    })
}   

    render(){
        return(
            <div>{JSON.stringify(this.state.pokemon)}</div>
        )
    }

}