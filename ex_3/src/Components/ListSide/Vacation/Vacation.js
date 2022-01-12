import React, { Component } from "react";
import './Vacation.css'
import '../../App/App.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import LocationOnIcon from '@mui/icons-material/LocationOn';



class Vacation extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: props.index,
            name: props.name,
            location: props.location,
            price: props.price,
            image: props.image
        }
        this.edit = this.edit.bind(this);
        this.delete = this.delete.bind(this);
        this.renderCard = this.renderCard.bind(this);
        this.renderEditCard = this.renderEditCard.bind(this);
    }

    edit(e) {
        e.preventDefault();
        this.props.onEdit(this.state.id);
    }

    delete() {
        this.props.onDelete(this.props.index);
    }

    renderCard() {
        return (

            <div className="Vacation">
                <div className="Card">
                    <img src={this.props.image}></img>

                    <button onClick={this.edit} id="editIconFrame" className="iconFrame" >
                        <EditIcon className="icon" fontSize="medium" />
                    </button>
                    <button onClick={this.delete} id="deleteIconFrame" className="iconFrame" >
                        <DeleteIcon className="icon" fontSize="medium" />
                    </button>
                    <h4>{this.props.name}</h4>
                    <h5>{this.props.location}</h5>
                    <h6>{this.props.price}</h6>
                    <LocationOnIcon id="locationIcon" />
                </div>
            </div >
        )
    }

    renderEditCard() {
        return (

            <div className="Vacation">
                <div className="editCard">
                    <img src={this.props.image}></img>

                    <button onClick={this.edit} id="editIconFrame" className="iconFrame" >
                        <EditIcon className="icon" fontSize="medium" />
                    </button>
                    <button onClick={this.delete} id="deleteIconFrame" className="iconFrame" >
                        <DeleteIcon className="icon" fontSize="medium" />
                    </button>
                    <h4>{this.props.name}</h4>
                    <h5>{this.props.location}</h5>
                    <h6>{this.props.price}</h6>
                    <LocationOnIcon id="locationIcon" />
                </div>
            </div >
        )
    }

    render() {
        return this.props.vacationToEdit === this.state.id ? this.renderEditCard() : this.renderCard();
    }
}

export default Vacation;
