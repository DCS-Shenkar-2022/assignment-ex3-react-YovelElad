import React, { Component } from "react";
import {Card, CardContent} from '@mui/material';
import { maxWidth } from "@mui/system";
import './FormSide.css'
import Form from './Form/Form'

class FormSide extends Component {

    constructor(props){
        super(props)
    }
    render() {
        return (
           <div className="FormSide">
               <Form></Form>
           </div>
        )
    }
}

export default FormSide;