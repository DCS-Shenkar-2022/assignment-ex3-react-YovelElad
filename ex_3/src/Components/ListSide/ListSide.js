import React, { Component } from "react";
import List from "./List/List";
import Search from "./Search/Search";
import './ListSide.css';

class ListSide extends Component {
    constructor(props) {
        super(props);
        this.searchVacation = this.searchVacation.bind(this);
        this.edit = this.edit.bind(this);
        this.delete = this.delete.bind(this);
        this.state = {
            vacations: [],
            searching: false,
            searchQuery: ""
        }
    }

    edit(_id) {
        this.props.onEdit(_id);
    }

    searchVacation(_searchQuery) {
        this.setState(prevState => ({
            searchQuery: _searchQuery,
            searching: true
        }))
        this.props.onSearch(_searchQuery);
    }

    delete(id){
        this.props.onDelete(id);
    }

    render() {
        return(
            <div className="ListSide" >
                <Search 
                    onSubmit={this.searchVacation}
                />
                <List 
                ApplicationState={this.props.ApplicationState}
                vacations={this.props.vacations}
                onEdit={this.edit}
                onDelete={this.delete}
                vacationToEdit={this.props.vacationToEdit}
                />

            </div>
        )
    }
}

export default ListSide;