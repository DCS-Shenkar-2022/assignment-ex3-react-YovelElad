import React, { Component } from "react";
import { Card, CardContent } from '@mui/material';
import { maxWidth } from "@mui/system";
import './FormSide.css'
import Form from './Form/Form'

class FormSide extends Component {

    constructor(props) {
        super(props)

        this.state = {
            // editing: false,

            ApplicationState: props.ApplicationState
        }


        this.add = this.add.bind(this);
        this.update = this.update.bind(this);
        // this.componentWillMount = this.componentWillMount.bind(this);
    }

    // componentWillMount() {
    //     this.setState(prevState => ({
    //         ApplicationState: this.props.ApplicationState
    //     }))
    // }

    add(newVacation) {
        this.props.onAdd({
            _id: 1,
            _name: newVacation.name,
            _location: newVacation.location,
            _price: newVacation.price,
            _image: newVacation.image
        });
    }

    update(vacationToUpdate) {
        this.props.onUpdate(vacationToUpdate);
    }





    render() {
        if (document.getElementById("form"))
            document.getElementById("form").reset();
        switch (this.props.ApplicationState) {
            case "edit":
                // alert(this.props.vacationToEdit.name);
                return (
                    <div className="FormSide">
                        <Form
                            ApplicationState={this.props.ApplicationState}
                            vacationToEdit={this.props.vacationToEdit}
                            onUpdate={this.update}
                        />
                    </div>
                )

            default:
                return (
                    <div className="FormSide">
                        <Form
                            ApplicationState={this.props.ApplicationState}
                            onAdd={this.add}
                        />
                    </div>
                )
                break;
        }
    }
}

export default FormSide;