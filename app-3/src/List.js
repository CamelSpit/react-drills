import React, { Component } from 'react';

export default class List extends Component {
    constructor(){
        super()
    }

    render(){
        let array = this.props.list.filter((element,index)=>{
            return element.includes(this.props.filter);
        }).map((thing,index)=>{
            return <div key={index}>{thing}</div>;
        })
        return(
            <div>
                {array}
            </div>
        )
    }
}