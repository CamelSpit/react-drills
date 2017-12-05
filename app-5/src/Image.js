import React, {Component} from "react";

function Image(props){
    console.log(props);
    return (
        <div>
        <img src={props.URL}/>
        </div>
    )
}

export default Image;

