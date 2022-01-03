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



class Vacation extends Component {

    constructor(props) {
        super(props)
    }


    render() {
        return (
            
            <div className="Vacation">


                <div className="Card">
                    <img src={pic}></img>
                    
                    <button id="editIconFrame" className="iconFrame" >
                        <EditIcon className="icon" fontSize="medium" />
                    </button>
                    <button id="deleteIconFrame" className="iconFrame" >
                        <DeleteIcon className="icon" fontSize="medium" />
                    </button>
                    <div>{this.props.children}</div>
                    {/* <h4>Phi Phi Islands</h4> */}
                    <LocationOnIcon id="locationIcon"/>
                    {/* <h5>Thailand</h5> */}
                </div>

               

               
            </div >
            // <div>{this.props.children}</div>
        )
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