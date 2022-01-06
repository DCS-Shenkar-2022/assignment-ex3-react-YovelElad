import React, { Component } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Vacation from '../Vacation/Vacation';
import './List.css'
import vacationsData from '../../../Data/vacations.json';


class List extends Component {

    constructor(props) {
        super(props)
        this.eachVacation = this.eachVacation.bind(this);
        this.passDetails = this.passDetails.bind(this);
        this.add = this.add.bind(this);
        this.nextId = this.nextId.bind(this);
        this.delete = this.delete.bind(this);


        this.state = {
            vacations: []
        }
    }

    add({ _id = null, _name, _location, _price, _image }) {
        // console.log(_id + " -> " + _name)
        this.setState(prevState => ({
            vacations: [
                ...prevState.vacations, {
                    id: _id !== null ? _id : this.nextId(prevState.vacations),
                    name: _name,
                    location: _location,
                    price: _price,
                    image: _image
                }
            ]
        }))
    }

    delete(id) {
        console.log("parant->" +id)
        this.setState(prevState => ({
            vacations: prevState.vacations.filter(vacation => vacation.id !== id)
        }))
    }

    nextId(vacations = []) {
        let max = vacations.reduce((prev, curr) => prev.id > curr.id ? prev.id : curr.id, 0);
        return ++max;
    }

    componentDidMount() {
        vacationsData.map(item => {
            this.add({ _id: item.id, _name: item.name, _location: item.location, _price: item.price, _image: item.image })
        });
    }

    passDetails = (editin,vacation) => {

        this.props.callBack(editin,vacation)
    }

    eachVacation(item, i) {
        return (

            <Vacation onEdit={this.passDetails} onDelete={this.delete} key={i} index={item.id} name={item.name} location={item.location} price={item.price} image={item.image}>

            </Vacation>
        )
    }
    render() {
        return (
            <div className="List">


                {this.state.vacations.map(this.eachVacation)}

            </div>
            // <div>{this.props.children}</div>
        )
    }
}

export default List;