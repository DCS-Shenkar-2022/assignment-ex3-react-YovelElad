import React, { Component } from "react";
import './Field.css'


class Field extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: props.editing,
            value: props.valueIn
        }
        this.saveChanges = this.saveChanges.bind(this);
    }

    saveChanges = (event) => {
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
        }
    }
}

export default Field;