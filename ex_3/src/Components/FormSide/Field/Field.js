import React, { Component } from "react";
import './Field.css'


class Field extends Component {
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div className="field">
                <label>{this.props.children}</label> <br/>
                <input className={this.props.children} placeholder={this.props.children}></input>
                <br/><br/>
            </div>
        )
    }
}

export default Field;