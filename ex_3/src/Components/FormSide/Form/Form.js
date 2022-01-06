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
            editing: false
        }

        this.setState(prevState => ({
            editing: this.props.editing
        }))
    }

    render() {
        if (this.props.editing) {
            return (
                <div className="Form">
                    <h2>Edit a vacation</h2>
                    <form>
                        <div className="formContent">
                            <Field editing={this.props.editing} valueIn={this.props.name}>Name</Field>
                            <Field editing={this.props.editing} valueIn={this.props.location}>Location</Field>
                            <Field editing={this.props.editing} valueIn={this.props.price}>Price</Field>
                            <Field editing={this.props.editing} valueIn={this.props.image}>Image url</Field>
                            <button className="iconFrame formButton" id="cancel" ><img src={Xicon} /> </button>
                            <button className="iconFrame formButton" id="submmit" type="submmit"><img src={Vicon} /> </button>

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
                    <form>
                        <div className="formContent">
                            <Field editing={this.props.editing} >Name</Field>
                            <Field editing={this.props.editing} >Location</Field>
                            <Field editing={this.props.editing} >Price</Field>
                            <Field editing={this.props.editing}>Image url</Field>
                            <button className="iconFrame formButton" id="addButton" type="submmit"><img src={plusIcon1} className="plusIcon1" /> <img src={plusIcon2} className="plusIcon2" /> </button>
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