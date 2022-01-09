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
      adding: false,

      id: null,
      name: null,
      location: null,
      price: null,
      image: null,

      newId: null,
      newName: null,
      newLocation: null,
      newPrice: null,
      newImage: null,

      updateId: null,
      updateName: null,
      updateLocation: null,
      updatePrice: null,
      updateImage: null

    }

    this.passFromListToForm = this.passFromListToForm.bind(this);
    this.addToList = this.addToList.bind(this);
    this.update = this.update.bind(this);
  }

  passFromListToForm = (_editin, _adding, vacation) => {
    this.setState(prevState => ({
      editing: _editin,
      adding: false,
      id: vacation.id,
      name: vacation.name,
      location: vacation.location,
      price: vacation.price,
      image: vacation.image
    }))

    console.log(vacation.id);
    console.log(this.state)

  }

  addToList(newVacation) {
    this.setState(prevState => ({
      // editing:_editin,
      // newId: newVacation.id,
      editing: false,
      adding: true,
      newName: newVacation.newName,
      newLocation: newVacation.newLocation,
      newPrice: newVacation.newPrice,
      newImage: newVacation.newImage
    }))
  }

  update(updateVacation) {
    this.setState(prevState => ({
      editing: true,
      adding: false,
      updateId: updateVacation.vacationId,
      updateName: updateVacation.newName,
      updateLocation: updateVacation.newLocation,
      updatePrice: updateVacation.newPrice,
      updateImage: updateVacation.newImage

    }))
  }



  render() {
    if (this.state.editing) {
      // if (document.getElementById("form"))
      document.getElementById("form").reset();
      return (
        <div className='App'>
          <ListSide callBack={this.passFromListToForm}
            adding={false}
            editing={true}
            updateId={this.state.updateId}
            updateName={this.state.updateName}
            updateLocation={this.state.updateLocation}
            updatePrice={this.state.updatePrice}
            updateImage={this.state.updateImage}
          />
          <FormSide
            id={this.state.id}
            name={this.state.name}
            location={this.state.location}
            price={this.state.price}
            image={this.state.image}
            editing={this.state.editing}
            onAdd={this.addToList}
            onUpdate={this.update}
          />
        </div>
      )
    }
    else {
      if (document.getElementById("form"))
        document.getElementById("form").reset();
      if (this.state.adding) {
        console.log("App--adding-->", this.state)
        return (
          <div className='App'>
            <ListSide newName={this.state.newName}
              newLocation={this.state.newLocation}
              newPrice={this.state.newPrice}
              newImage={this.state.newImage}
              editing={this.state.editing}
              adding={true}
              callBack={this.passFromListToForm}

            />

            <FormSide name={this.state.name}
              location={this.state.location}
              price={this.state.price}
              image={this.state.image}
              editing={this.state.editing}
              onAdd={this.addToList}
            ></FormSide>
          </div>
        )
      }
      else {
        if (document.getElementById("form"))
          document.getElementById("form").reset();
        console.log("App--NOT-adding-->", this.state)
        return (
          <div className='App'>
            <ListSide callBack={this.passFromListToForm} />
            <FormSide name={this.state.name}
              location={this.state.location}
              price={this.state.price}
              image={this.state.image}
              editing={this.state.editing}
              onAdd={this.addToList}
            ></FormSide>
          </div>
        )
      }
    }
  }
}

export default App;




  // editRender() {
  //   if (document.getElementById("form"))
  //     document.getElementById("form").reset();
  //   return (
  //     <div className='App'>
  //       <ListSide callBack={this.passFromListToForm}
  //         newName={this.state.newName}></ListSide>
  //       <FormSide name={this.state.name}
  //         location={this.state.location}
  //         price={this.state.price}
  //         image={this.state.image}
  //         editing={this.state.editing}

  //       ></FormSide>
  //     </div>
  //   )
  // }

  // // this.state.editing ? this.passFromListToForm() :

  // render() {
  //   if (document.getElementById("form"))
  //     document.getElementById("form").reset();
  //   return (this.state.editing ? this.editRender() :
  //     <div className='App'>
  //       <ListSide callBack={this.passFromListToForm}></ListSide>
  //       <FormSide name={this.state.name}
  //         location={this.state.location}
  //         price={this.state.price}
  //         image={this.state.image}
  //         editing={this.state.editing}
  //         onAdd={this.addToList}></FormSide>
  //     </div>
  //   );
  // }