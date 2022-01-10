import React, { Component } from "react";
import './Field.css'


class Field extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: props.editing,
            value: props.valueIn
        }

        // this.setState(prevState => ({
        //     editing: this.props.editing
        // }))

        this.saveChanges = this.saveChanges.bind(this);
    }

    saveChanges = (event) => {
        // const updatedKeyword = event.target.value;
        // console.log(event.target.value);
        event.preventDefault();
        this.setState(prevState => ({
            value: event.target.value
        }))
        this.props.whenChange(event.target.value);
    }


    render() {
        switch (this.props.ApplicationState) {
            case "edit":
                return (
                    <div className="field">
                        <label>{this.props.children}</label> <br />
                        <input type="text"
                            name={this.props.children}
                            defaultValue={this.props.valueIn}
                            className={this.props.children}
                            onChange={(event) => this.saveChanges(event)}
                        />
                        <br /><br />
                    </div>
                )
            default:
                return (
                    <div className="field">
                        <label>{this.props.children}</label> <br />
                        <input type="text"
                            name={this.props.children}
                            defaultValue=""
                            className={this.props.children}
                            placeholder={this.props.children}
                            onChange={(event) => this.saveChanges(event)} />
                        <br /><br />
                    </div>
                )

                // break;

                break;
        }
    }









    // render() {
    //     if (this.props.editing) {
    //         // console.log("field editing");
    // return (
    //     <div className="field">
    //         <label>{this.props.children}</label> <br />
    //         <input type="text"
    //             name={this.props.children}
    //             defaultValue={this.props.valueIn}
    //             className={this.props.children}
    //             onChange={(event) => this.someFunc(event)}
    //         />
    //         <br /><br />
    //     </div>
    // )
    //     }
    //     else {
    //         // console.log("field Not editing");
    // return (
    //     <div className="field">
    //         <label>{this.props.children}</label> <br />
    //         <input type="text"
    //             name={this.props.children}
    //             defaultValue=""
    //             className={this.props.children}
    //             placeholder={this.props.children} 
    //             onChange={(event) => this.someFunc(event)}/>
    //         <br /><br />
    //     </div>
    // )
    //     }
    // }
}

export default Field;