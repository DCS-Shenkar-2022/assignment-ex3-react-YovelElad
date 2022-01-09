import React, { Component } from "react";
import './Form.css'
import Field from './../Field/Field'
import formBackground from '../../../Data/images/thousand-01 1.png'
import { AiOutlinePlus } from 'react-icons/ai';
import Xicon from '../../../Data/images/Vector.png'
import Vicon from '../../../Data/images/Vector 2.png'
import plusIcon1 from '../../../Data/images/Line 8.png'
import plusIcon2 from '../../../Data/images/Line 9.png'


class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false,
            adding:false,

            vacationId:3,

            newId: null,
            newName: null,
            newLocation: null,
            newPrice: null,
            newImage:null
        }

        this.setState(prevState => ({
            editing: this.props.editing
        }))
        this.saveName = this.saveName.bind(this);
        this.saveLocation = this.saveLocation.bind(this);
        this.savePrice = this.savePrice.bind(this);
        this.saveImage = this.saveImage.bind(this);
        this.add = this.add.bind(this);

    }

    saveName(_name) {
        this.setState(prevState => ({
            newName: _name
        }))
    }
    saveLocation(_location) {
        this.setState(prevState => ({
            newLocation: _location
        }))
    }
    savePrice(_price) {
        this.setState(prevState => ({
            newPrice: _price
        }))
    }
    saveImage(_image) {
        this.setState(prevState => ({
            newImage: _image
        }))
    }
 
    add = (e) => {
        e.preventDefault();
        this.setState(prevState => ({
            adding: true
        }))
        // console.log(this.state);

        this.props.onAdd(this.state);

    } 

    save = (e) => {
        // alert(this.state.newLocation);
        e.preventDefault();
        this.setState({
            editing: true,
            vacationId: this.props.id
        })
        this.props.onUpdate(this.state)

    }

    render() {
        if (this.props.editing) {
            return (
                <div className="Form">
                    <h2>Edit a vacation</h2>
                    <form id="form">
                        <div className="formContent">
                            <Field editing={this.props.editing} valueIn={this.props.name} whenChange={this.saveName}>Name</Field>
                            <Field editing={this.props.editing} valueIn={this.props.location} whenChange={this.saveLocation}>Location</Field>
                            <Field editing={this.props.editing} valueIn={this.props.price} whenChange={this.savePrice}>Price</Field>
                            <Field editing={this.props.editing} valueIn={this.props.image} whenChange={this.saveImage}>Image url</Field>
                            <button className="iconFrame formButton" id="cancel" ><img src={Xicon} /> </button>
                            <button className="iconFrame formButton" id="submmit" type="submmit" onClick={this.save}><img src={Vicon} /> </button>

                        </div>
                    </form>
                    {/* <img className="formBackground " src={formBackground}></img> */}

                </div>
            )
        }
        else {
            return (
                <div className="Form">
                    <h2>Add a new vacation</h2>
                    <form id="form">
                        <div className="formContent">
                            <Field editing={this.props.editing} whenChange={this.saveName}>Name</Field>
                            <Field editing={this.props.editing} whenChange={this.saveLocation}>Location</Field>
                            <Field editing={this.props.editing} whenChange={this.savePrice}>Price</Field>
                            <Field editing={this.props.editing} whenChange={this.saveImage}>Image url</Field>
                            <button className="iconFrame formButton"
                                id="addButton"
                                type="submmit"
                                onClick={(e) => this.add(e)}
                                >
                                <img src={plusIcon1} className="plusIcon1" /> <img src={plusIcon2} className="plusIcon2" />
                            </button>
                        </div>
                    </form>
                    <img className="formBackground" src={formBackground}></img>

                </div>
            )
        }
    }
}

export default Form;

//<AiOutlinePlus fontSize="large" className="addIcon" />