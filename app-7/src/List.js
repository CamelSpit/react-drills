import React from 'react';

export default function List (props){

    let list = (props.list.map((item,index)=>{
        return <div key={index}>{item}</div>
    }))

    return(
        <div>{list}</div>
    )
}