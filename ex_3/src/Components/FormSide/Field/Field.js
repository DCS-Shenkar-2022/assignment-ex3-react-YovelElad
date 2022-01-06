import React, { Component } from "react";
import './Field.css'


class Field extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false
        }

        this.setState(prevState => ({
            editing: this.props.editing
        }))

        this.someFunc = this.someFunc.bind(this);
    }

    someFunc = (event) => {
        // const updatedKeyword = event.target.value;
        console.log("change");
    }

    inputChangedHandler = (event) => {
        const updatedKeyword = event.target.value;
        // May be call for search result
    }



    render() {
        if (this.props.editing) {
            console.log("field editing");
            return (
                <div className="field">
                    <label>{this.props.children}</label> <br />
                    <input  type="text"  
                            name={this.props.children} 
                            defaultValue={this.props.valueIn} 
                            className={this.props.children} 
                            onChange={(event)=>this.someFunc(event)}
                    />
                    <br /><br />
                </div>
            )
        }
        else {  
            console.log("field Not editing");
            return (
                <div className="field">
                    <label>{this.props.children}</label> <br />
                    <input  type="text" 
                            name={this.props.children} 
                            value="" 
                            className={this.props.children} 
                            placeholder={this.props.children} />
                    <br /><br />
                </div>
            )
        }
    }
}

export default Field;