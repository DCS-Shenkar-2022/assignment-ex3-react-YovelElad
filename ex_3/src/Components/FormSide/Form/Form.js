import React, { Component } from "react";
import './Form.css'
import Field from './../Field/Field'
import formBackground from '../../../Data/images/thousand-01 1.png'
import Xicon from '../../../Data/images/Vector.png'
import Vicon from '../../../Data/images/Vector 2.png'
import plusIcon1 from '../../../Data/images/Line 8.png'
import plusIcon2 from '../../../Data/images/Line 9.png'


class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            vacationToEdit: {},
            vacationToAdd: {},
        }
        this.saveId = this.saveId.bind(this);
        this.saveName = this.saveName.bind(this);
        this.saveLocation = this.saveLocation.bind(this);
        this.savePrice = this.savePrice.bind(this);
        this.saveImage = this.saveImage.bind(this);
        this.addName = this.addName.bind(this);
        this.addLocation = this.addLocation.bind(this);
        this.addPrice = this.addPrice.bind(this);
        this.addImage = this.addImage.bind(this);
    }

    saveId() {
        this.setState(prevState => {
            let vacationToEdit = Object.assign({}, prevState.vacationToEdit);
            vacationToEdit.id = this.props.vacationToEdit.id;
            return { vacationToEdit };
        })
    }

    saveName(_name) {
        this.setState(prevState => {
            let vacationToEdit = Object.assign({}, prevState.vacationToEdit);
            vacationToEdit.name = _name ? _name : prevState.vacationToEdit.name ? prevState.vacationToEdit.name : this.props.vacationToEdit.name;
            return { vacationToEdit };
        })
        if (!this.state.vacationToEdit.id) {
            this.saveId();
        }
        if (!this.state.vacationToEdit.location) {
            this.saveLocation();
        }
        if (!this.state.vacationToEdit.price) {
            this.savePrice();
        }
        if (!this.state.vacationToEdit.image) {
            this.saveImage();
        }
    }

    saveLocation(_location) {
        this.setState(prevState => {
            let vacationToEdit = Object.assign({}, prevState.vacationToEdit);
            vacationToEdit.location = _location ? _location : this.props.vacationToEdit.location;
            return { vacationToEdit };
        })
    }

    savePrice(_price) {
        this.setState(prevState => {
            let vacationToEdit = Object.assign({}, prevState.vacationToEdit);
            vacationToEdit.price = _price ? _price : this.props.vacationToEdit.price;
            return { vacationToEdit };
        })
    }

    saveImage(_image) {
        this.setState(prevState => {
            let vacationToEdit = Object.assign({}, prevState.vacationToEdit);
            vacationToEdit.image = _image ? _image : this.props.vacationToEdit.image;
            return { vacationToEdit };
        })
    }

    addName(_name) {
        this.setState(prevState => {
            let vacationToAdd = Object.assign({}, prevState.vacationToAdd);
            vacationToAdd.name = _name;
            vacationToAdd.id = null;
            return { vacationToAdd };
        })
    }

    addLocation(_location) {
        this.setState(prevState => {
            let vacationToAdd = Object.assign({}, prevState.vacationToAdd);
            vacationToAdd.location = _location;
            vacationToAdd.id = null;
            return { vacationToAdd };
        })
    }

    addPrice(_price) {
        this.setState(prevState => {
            let vacationToAdd = Object.assign({}, prevState.vacationToAdd);
            vacationToAdd.price = _price;
            vacationToAdd.id = null;
            return { vacationToAdd };
        })
    }

    addImage(_image) {
        this.setState(prevState => {
            let vacationToAdd = Object.assign({}, prevState.vacationToAdd);
            vacationToAdd.image = _image;
            vacationToAdd.id = null;
            return { vacationToAdd };
        })
    }

    add = (e) => {
        e.preventDefault();
        this.setState(prevState => ({
            adding: true
        }))
        this.props.onAdd(this.state.vacationToAdd);
    }

    save = (e) => {
        e.preventDefault();
        this.props.onUpdate(this.state.vacationToEdit)
        this.setState(prevState => {
            let vacationToEdit = Object.assign({}, prevState.vacationToEdit);
            vacationToEdit.id = null;
            vacationToEdit.name = null;
            vacationToEdit.location = null;
            vacationToEdit.price = null;
            vacationToEdit.image = null;
            return { vacationToEdit };
        })
    }

    cancel = (e) => {
        e.preventDefault();
        this.props.onCancel();
    }

    render() {
        switch (this.props.ApplicationState) {
            case "edit":
                return (
                    <div className="Form">
                        <h2>Edit a vacation</h2>
                        <form id="form">
                            <div className="formContent">
                                <Field ApplicationState={this.props.ApplicationState} valueIn={this.props.vacationToEdit.name} whenChange={this.saveName}>Name</Field>
                                <Field ApplicationState={this.props.ApplicationState} valueIn={this.props.vacationToEdit.location} whenChange={this.saveLocation}>Location</Field>
                                <Field ApplicationState={this.props.ApplicationState} valueIn={this.props.vacationToEdit.price} whenChange={this.savePrice}>Price</Field>
                                <Field ApplicationState={this.props.ApplicationState} valueIn={this.props.vacationToEdit.image} whenChange={this.saveImage}>Image url</Field>
                                <button className="iconFrame formButton" id="cancel" ><img src={Xicon} onClick={this.cancel} /> </button>
                                <button className="iconFrame formButton" id="submmit" type="submmit" onClick={this.save}><img src={Vicon} /> </button>

                            </div>
                        </form>
                    </div>
                )
            default:
                return (
                    <div className="Form">
                        <h2>Edit a vacation</h2>
                        <form id="form">
                            <div className="formContent">
                                <Field ApplicationState={this.props.ApplicationState} whenChange={this.addName} >Name</Field>
                                <Field ApplicationState={this.props.ApplicationState} whenChange={this.addLocation}>Location</Field>
                                <Field ApplicationState={this.props.ApplicationState} whenChange={this.addPrice}>Price</Field>
                                <Field ApplicationState={this.props.ApplicationState} whenChange={this.addImage}>Image url</Field>
                                <button className="iconFrame formButton"
                                    id="addButton"
                                    type="submmit"
                                    onClick={(e) => this.add(e)}
                                >
                                    <img src={plusIcon1} className="plusIcon1" /> <img src={plusIcon2} className="plusIcon2" />
                                </button>

                            </div>
                        </form>
                        <img className="formBackground " src={formBackground}></img>

                    </div>
                )
        }
    }
}

export default Form;

