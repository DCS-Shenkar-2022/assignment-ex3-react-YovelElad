import React, { Component } from "react";
import List from "./List/List";
import Search from "./Search/Search";
import './ListSide.css';

class ListSide extends Component {
    constructor(props) {
        super(props);
        this.passDetails = this.passDetails.bind(this);

      
    }

    passDetails = (editin,vacation) => {
        // this.setState({data:vacation})
        // alert(vacation.name + " " + vacation.location);
        this.props.callBack(editin,vacation);
    }
    
    
    render() {
        return (
            <div className="ListSide" >
                <Search >

                </Search>
                <List callBack={this.passDetails}>
                    
                </List>
            </div>
        )
    }
}

export default ListSide;