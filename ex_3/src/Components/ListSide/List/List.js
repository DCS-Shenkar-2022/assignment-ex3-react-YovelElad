import React, { Component } from "react";
import Vacation from '../Vacation/Vacation';
import './List.css'

class List extends Component {

    constructor(props) {
        super(props)
        this.eachVacation = this.eachVacation.bind(this);
        this.nextId = this.nextId.bind(this);
        this.delete = this.delete.bind(this);
        this.edit = this.edit.bind(this);
        this.state = {
            adding: this.props.adding,
            vacations: this.props.vacations
        }
    }

    edit(_id) {
        this.props.onEdit(_id);
    }

    delete(id) {
        this.props.onDelete(id);
    }

    nextId(vacations = []) {
        let max = vacations.reduce((prev, curr) => prev.id > curr.id ? prev.id : curr.id, 0);
        return ++max;
    }

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
                vacationToEdit={this.props.vacationToEdit}
            />
        )
    }


    render() {
        if (this.props.vacations.length < 1) {
            return (
                <div className="List">
                    <p id="noVacations">Sorry, we didn't find a vacation.</p>
                </div>
            )
        }
        return (
            <div className="List">
                <div id="wrapper">
                    {this.props.vacations.map(this.eachVacation)}
                </div>
            </div>
        )
    }
}

export default List;