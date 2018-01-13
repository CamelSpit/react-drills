import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Products extends Component{
    constructor(){
        super()

        this.state={
            pokemon:[]
        }
    }
    

componentWillMount(){
    axios.get('https://pokeapi.co/api/v1/pokedex/1/').then(res=>{
        this.setState({
            pokemon: res.data.pokemon
        })
    })
}   

    render(){
        let array = this.state.pokemon.map((item,index)=>{
            return <Link to={`/stats/${item.name}`}><div key={index}>Pokemon: {item.name}</div></Link>
        })
        return(
            <div>{array}</div>
        )
    }

}