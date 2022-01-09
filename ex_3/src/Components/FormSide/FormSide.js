import React, { Component } from "react";
import { Card, CardContent } from '@mui/material';
import { maxWidth } from "@mui/system";
import './FormSide.css'
import Form from './Form/Form'

class FormSide extends Component {

    constructor(props) {
        super(props)

        this.state = {
            editing: false
        } 

        this.setState(prevState => ({
            editing: this.props.editing
        }))

        this.add = this.add.bind(this);
        this.update = this.update.bind(this);
    }

    add(newVacation) {
        this.props.onAdd(newVacation);
    }

    update (updateVacation) {
        this.props.onUpdate(updateVacation);
    }


    render() {
        if (this.props.editing) {
            return (
                <div className="FormSide">
                    <Form 
                        id={this.props.id}
                        name={this.props.name}
                        location={this.props.location}
                        price={this.props.price}
                        image={this.props.image}
                        editing={this.props.editing}
                        onAdd={this.add}
                        onUpdate={this.update}
                    ></Form>
                </div>
            )
        }
        else {
            return (
                <div className="FormSide">
                    <Form editing={this.props.editing}
                        onAdd={this.add}></Form>
                </div>
            )
        }

    }
}

export default FormSide;