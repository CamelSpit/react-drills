import React, {Component} from "react";

class List extends Component {


    render(){
        return(
            <div>
                <ul>
                    <li>{this.props.list[0]}</li>
                    <li>{this.props.list[1]}</li>
                    <li>{this.props.list[2]}</li>
                    <li>{this.props.list[3]}</li>
                    <li>{this.props.list[4]}</li>
                </ul>
            </div>

        )
    }
}

export default List; 

