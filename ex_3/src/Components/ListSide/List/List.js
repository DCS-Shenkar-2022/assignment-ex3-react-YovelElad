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


        this.state = {
            vacations: [
                {
                    id: 3,
                    name: "Phi Phi",
                    location: "Maldives",
                    price: "$1,480",
                    image: "src/Data/images/PhiPhiIsland.png"
                },

                {
                    id: 3,
                    name: "GreeceVillage",
                    location: "Maldives",
                    price: "$1,480",
                    image: "src/Data/images/PhiPhiIsland.png"
                },

                {
                    id: 3,
                    name: "Tel Aviv",
                    location: "Maldives",
                    price: "$1,480",
                    image: "src/Data/images/PhiPhiIsland.png"
                },
            ]
        }
    }

    eachVacation(item,i) {
        return (
            <Vacation key={i}>
                <h4>{item.name}</h4>
                <h5>{item.location}</h5>
                <h6>{item.price}</h6>
                </Vacation>
        )
    }
    render() {
        return (
            <div className="List">


                {vacationsData.map(this.eachVacation)}

                {/* <Vacation>
                    <h4>Phi Phi Islands</h4>
                    <h5>Thailand</h5>
                </Vacation>
                <Vacation>
                    <h4>Tel Aviv</h4>
                    <h5>Thailand</h5>
                </Vacation>
                <Vacation>
                    <h4>Tel Aviv</h4>
                    <h5>Thailand</h5>
                </Vacation>
                <Vacation>
                    <h4>Tel Aviv</h4>
                    <h5>Thailand</h5>
                </Vacation>
                <Vacation>
                    <h4>Tel Aviv</h4>
                    <h5>Thailand</h5>
                </Vacation>
                <Vacation>
                    <h4>Tel Aviv</h4>
                    <h5>Thailand</h5>
                </Vacation>
                <Vacation>
                    <h4>Tel Aviv</h4>
                    <h5>Thailand</h5>
                </Vacation> */}

            </div>
            // <div>{this.props.children}</div>
        )
    }
}

export default List;