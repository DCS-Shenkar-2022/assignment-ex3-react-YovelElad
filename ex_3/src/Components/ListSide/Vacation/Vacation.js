import React, { Component } from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import './Vacation.css'
import '../../App/App.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import pic from '../../../Data/images/PhiPhiIsland.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { ThirtyFpsSharp } from "@mui/icons-material";



class Vacation extends Component {

    constructor(props) {
        super(props)

        this.state = {
            editing: false,
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
        console.log("edit");
        e.preventDefault();

        // this.setState({ editing: true })
        if (this.state.editing == false) {
            this.setState(prevState => ({
                editing: true
            }))
            this.props.onEdit(true, this.state);
        }
        else {
            this.setState(prevState => ({
                editing: false
            }))
            this.props.onEdit(false, this.state);
        }
        // console.log("vacation state->", this.state.editing);
        // this.props.onEdit(this.state);
    }

    delete() {
        console.log("Delete" + this.props.index);
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
                    {/* <div>{this.props.children}</div> */}
                    {/* <h4>Phi Phi Islands</h4> */}
                    <LocationOnIcon id="locationIcon" />
                    {/* <h5>Thailand</h5> */}
                </div>
            </div >
            // <div>{this.props.children}</div>
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
                    {/* <div>{this.props.children}</div> */}
                    {/* <h4>Phi Phi Islands</h4> */}
                    <LocationOnIcon id="locationIcon" />
                    {/* <h5>Thailand</h5> */}
                </div>
            </div >
            // <div>{this.props.children}</div>
        )
    }

    render() {
        return this.state.editing ? this.renderEditCard() : this.renderCard();
    }
}

export default Vacation;


{/* <Card className="Card" sx={{ maxWidth: 293, maxHeight: 261, marginBottom: '10px', borderRadius: '30px', border:'none' }} >
                    <CardMedia
                        component="img"
                        // alt="green iguana"
                        height="152"
                        width="221"
                        // marginT
                        image="src\Components\ListSide\Vacation\PhiPhiIsland.png"
                    />

                    <CardContent>
                        <div>{this.props.children}</div>
                        <span>
                            <button>edit</button>
                            <button>delete</button>
                        </span>
                    </CardContent>
                </Card> */}