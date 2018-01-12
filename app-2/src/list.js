import React from 'react'

export default function List (props){
    console.log(props);
    const array = props.things.map((thing,i)=>{
        console.log(thing);
        return <div key={i}>{thing}</div>
    })
    return(
        <div>
            {array}
        </div>
    )

}