import React, { Component } from "react";
import List from "./List/List";
import Search from "./Search/Search";
import './ListSide.css';

class ListSide extends Component {
    constructor(props) {
        super(props);
        this.passDetails = this.passDetails.bind(this);
        this.searchVacation = this.searchVacation.bind(this);
        // this.componentDidMount = this.componentDidMount.bind(this);
        this.edit = this.edit.bind(this);
        this.delete = this.delete.bind(this);

        this.state = {
            vacations: [],
            // editin: props.editin,
            // adding: props.adding,
            searching: false,
            searchQuery: ""
        }

    }

    edit(_id) {
        this.props.onEdit(_id);
    }

    passDetails = (editin, adding, vacation) => {
        // this.setState({data:vacation})
        // alert(vacation.name + " " + vacation.location);
        this.props.callBack(editin, adding, vacation);
    }

    searchVacation(_searchQuery) {
        this.setState(prevState => ({
            searchQuery: _searchQuery,
            searching: true
        }))
    }

    delete(id){
        this.props.onDelete(id);
    }


    // componentDidMount() {
    //     this.setState(prevState => ({
    //         vacation:this.props.vacations
    //     }))
    // }


    render() {
        return(
            <div className="ListSide" >
                <Search />
                <List 
                ApplicationState={this.props.ApplicationState}
                vacations={this.props.vacations}
                onEdit={this.edit}
                onDelete={this.delete}
                />

            </div>
        )
    }

    // render() {
    //     console.log("state.adding in listSide-->", this.props.adding);
    //     if (this.props.adding) {
    //         console.log("add in listSide", this.props.adding, this.props.newName);

    //         return (
    //             <div className="ListSide" >
    //                 <Search onSubmit={this.searchVacation} >

    //                 </Search>
    //                 <List newName={this.props.newName}
    //                     newLocation={this.props.newLocation}
    //                     newPrice={this.props.newPrice}
    //                     newImage={this.props.newImage}
    //                     // editing={this.props.editing}
    //                     adding={this.props.adding}
    //                     // newName=
    //                     callBack={this.passDetails}>

    //                 </List>
    //             </div>
    //         )
    //     } else {
    //         if (this.state.searching) {
    //             console.log("Search in listSide" , this.state.searchQuery);
    //             return (
    //                 <div className="ListSide" >
    //                     <Search onSubmit={this.searchVacation}>

    //                     </Search>
    //                     <List adding={false} searching={true} searchQuery={this.state.searchQuery} callBack={this.passDetails}>

    //                     </List>
    //                 </div>
    //             )
    //         }
    //         if(this.props.editing) {
    //             console.log("updating in list side");
    //             return (
    //                 <div className="ListSide" >
    //                     <Search onSubmit={this.searchVacation}>
    
    //                     </Search>
    //                     <List 
    //                     adding={false} 
    //                     editin={true}
    //                     updateId={this.props.updateId}
    //                     updateName={this.props.updateName}
    //                     updateLocation={this.props.updateLocation}
    //                     updatePrice={this.props.updatePrice}
    //                     updateImage={this.props.updateImage}
    //                     callBack={this.passDetails}
                        
    //                     >
    
    //                     </List>
    //                 </div>
    //             )
    //         }
    //         console.log("NOT add in listSide");
    //         return (
    //             <div className="ListSide" >
    //                 <Search onSubmit={this.searchVacation}>

    //                 </Search>
    //                 <List adding={false} callBack={this.passDetails}>

    //                 </List>
    //             </div>
    //         )
    //     }
    // }
}

export default ListSide;