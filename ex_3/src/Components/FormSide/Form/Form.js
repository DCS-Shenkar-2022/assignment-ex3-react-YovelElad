import React, { Component } from "react";
import './Form.css'
import Field from './../Field/Field'
import formBackground from '../../../Data/images/thousand-01 1.png'
import {AiOutlinePlus} from 'react-icons/ai';


class Form extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Form">
                <h2>Add a new vacation</h2>
                <form>
                    <div className="formContent">
                        <Field>Name</Field>
                        <Field>Location</Field>
                        <Field>Price</Field>
                        <Field>Image url</Field>
                        <button className="iconFrame" id="submmit" type="submmit"> <AiOutlinePlus  fontSize="large" className="addIcon" /></button>
                    </div>
                </form>
                <img className="formBackground" src={formBackground}></img>

            </div>
        )
    }
}

export default Form;