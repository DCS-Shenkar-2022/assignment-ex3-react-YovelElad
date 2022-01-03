import React, { Component } from "react";
import List from "./List/List";
import Search from "./Search/Search";
import './ListSide.css';

class ListSide extends Component {
    constructor(props) {
        super(props);

      
    }
    
    
    render() {
        return (
            <div className="ListSide" >
                <Search>

                </Search>
                <List>
                    
                </List>
            </div>
        )
    }
}

export default ListSide;