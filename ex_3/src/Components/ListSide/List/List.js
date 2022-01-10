import React, { Component } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Vacation from '../Vacation/Vacation';
import './List.css'
import vacationsData from '../../../Data/vacations.json';
import { Flag } from "@mui/icons-material";


class List extends Component {

    constructor(props) {
        super(props)
        this.eachVacation = this.eachVacation.bind(this);
        // this.passDetails = this.passDetails.bind(this);
        // this.add = this.add.bind(this);
        this.nextId = this.nextId.bind(this);
        this.delete = this.delete.bind(this);
        // this.addFromForm = this.addFromForm.bind(this);
        // this.componentWillMount = this.componentWillMount.bind(this);
        // this.addNewVacation = this.addNewVacation.bind(this);
        // this.update = this.update.bind(this);
        this.edit = this.edit.bind(this);
        this.state = {
            adding: this.props.adding,
            vacations: this.props.vacations
        }
        // this.addFromForm();
    }

    edit(_id) {
        this.props.onEdit(_id);
    }

    // addNewVacation(_name, _location, _price, _image) {
    //     // console.log("add new vacationnnnnnnnnnnnnnnnnnnnnnnnn");
    //     let { vacations } = this.state;
    //     let newVacation = {
    //         id: this.nextId(vacations),
    //         name: _name,
    //         location: _location,
    //         price: _price,
    //         image: _image
    //     }
    //     vacations.push(newVacation);
    //     // this.setState(prevState => ({
    //     //     adding: false
    //     // }))
    //     // this.delete(newVacation.id);

    //     // this.setState({})
    // }

    // add({ _id = null, _name, _location, _price, _image }) {
    //     // console.log(_id + " -> " + _name)
    //     this.setState(prevState => ({
    //         vacations: [
    //             ...prevState.vacations, {
    //                 id: _id !== null ? _id : this.nextId(prevState.vacations),
    //                 name: _name,
    //                 location: _location,
    //                 price: _price,
    //                 image: _image
    //             }
    //         ]
    //     }))
    // }

    // update(_id, _name, _location, _price, _image) {
    //     // alert("update" , _id, " to name ", _name);
    //     this.setState(prevState => ({
    //         vacations: prevState.vacations.map(
    //             vacation => vacation.id !== _id ? vacation : { ...vacation, name: _name }
    //         )
    //     }))
    //     console.log(this.state.vacations);
    //     alert("stop");
    // }


    delete(id) {
        // console.log("parant->" + id)
        this.props.onDelete(id);
    }

    nextId(vacations = []) {
        let max = vacations.reduce((prev, curr) => prev.id > curr.id ? prev.id : curr.id, 0);
        return ++max;
    }

    // componentWillMount() {
    //     this.setState(prevState => ({
    //         vacations: this.props.vacations
    //     }))
    // vacationsData.map(item => {
    //     this.add({ _id: item.id, _name: item.name, _location: item.location, _price: item.price, _image: item.image })
    // });
    // if (this.props.editin) {
    //     this.update(this.props.updateId, this.props.updateNae, this.props.updateLocation, this.props.updatePrice, this.props.updateImage)
    // }

    // console.log("add from form ->", this.props.adding, this.props.newName);
    // if (this.props.adding) {
    //     this.add({ _id: null, _name: this.props.newName, _location: this.props.newLocation, _price: this.props.newPrice, _image: this.props.newImage })
    // }
    // }

    // passDetails = (editin, adding, vacation) => {
    //     this.setState(prevState => ({
    //         adding: false
    //     }))
    //     this.props.callBack(editin, adding, vacation)
    // }

    eachVacation(item, i) {
        return (

            <Vacation
                ApplicationState={this.props.ApplicationState}
                onEdit={this.edit}
                onDelete={this.delete}
                key={i}
                index={item.id}
                name={item.name}
                location={item.location}
                price={item.price}
                image={item.image}
            />


        )
    }


    render() {
        console.log(this.props.vacations);
        if (this.props.vacations.length < 1) {
            return (
                <div className="List">
                    <p id="noVacations">Sorry, we didn't find a vacation.</p>
                </div>
            )
        }
        return (
            <div className="List">

                {this.props.vacations.map(this.eachVacation)}

            </div>
        )
    }

}

export default List;