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
    }



    render() {
        if (this.props.editing) {
            console.log("formSide editing");
            return (
                <div className="FormSide">
                    <Form name={this.props.name} location={this.props.location} price={this.props.price} image={this.props.image} editing={this.props.editing}></Form>
                </div>
            )
        }
        else {
            console.log("formSide Not editing");
            return (
                <div className="FormSide">
                    <Form editing={this.props.editing}></Form>
                </div>
            )
        }

    }
}

export default FormSide;