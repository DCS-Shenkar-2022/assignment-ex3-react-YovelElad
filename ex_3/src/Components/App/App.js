import React, { Component } from "react";
import logo from '../../logo.svg';
import './App.css';
import ListSide from "../ListSide/ListSide"
import FormSide from "../FormSide/FormSide"

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      editing: false,

        id: null,
        name: null,
        location: null,
        price: null,
        image:null,

        newId: null,
        newName: null,
        newLocation: null,
        newPrice: null,
        newImage:null

    }

    this.passFromListToForm = this.passFromListToForm.bind(this);
    this.addToList = this.addToList.bind(this);
  }

  passFromListToForm = (_editin,vacation) => {
    this.setState(prevState => ({
      editing:_editin,
      id: vacation.id,
      name: vacation.name,
      location: vacation.location,
      price: vacation.price,
      image: vacation.image
    }))

    console.log(vacation.id);
    console.log(this.state)


    // return(
    //   <div className='App'>
    //     <ListSide callBack={this.passFromListToForm}></ListSide>
    //     <FormSide name={vacation.name} location={vacation.location}></FormSide>
    //   </div>
    // )
    // alert("App " + vacation.name + " " + vacation.location);

  }

  addToList = (newVacation) => {
    this.setState(prevState => ({
      // editing:_editin,
      // newId: newVacation.id,
      newName: newVacation.name,
      newLocation: newVacation.location,
      newPrice: newVacation.price,
      newImage: newVacation.image
    }))
  }


  editRender(){
    return (
      <div className='App'>
        <ListSide callBack={this.passFromListToForm}
                  newName={this.state.newName}></ListSide>
        <FormSide name={this.state.name} 
                  location={this.state.location} 
                  price={this.state.price} 
                  image={this.state.image} 
                  editing={this.state.editing} ></FormSide>
      </div>
    )
  }

  // this.state.editing ? this.passFromListToForm() :
  
  render() {
    return (this.state.editing ? this.editRender() :
      <div className='App'>
        <ListSide callBack={this.passFromListToForm}></ListSide>
        <FormSide name={this.state.name} 
                  location={this.state.location} 
                  price={this.state.price} 
                  image={this.state.image} 
                  editing={this.state.editing} 
                  onAdd={this.addToList}></FormSide>
      </div>
    );
  }
}

export default App;
