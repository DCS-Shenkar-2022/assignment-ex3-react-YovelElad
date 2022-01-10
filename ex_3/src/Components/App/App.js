import React, { Component } from "react";
import logo from '../../logo.svg';
import './App.css';
import ListSide from "../ListSide/ListSide"
import FormSide from "../FormSide/FormSide"
import vacationsData from '../../Data/vacations.json';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      adding: false,

      vacations: [],

      ApplicationState: "none",

      vacationToEdit: null,


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
    this.add = this.add.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
    this.edit = this.edit.bind(this);
    this.delete = this.delete.bind(this);

  }

  edit(_id) {
    if (this.state.ApplicationState == "edit") {

      this.setState(prevState => ({
        ApplicationState: "none",
        vacationToEdit: null
      }))
    }
    else {
      this.setState(prevState => ({
        ApplicationState: "edit",
        vacationToEdit: _id
      }))
    }
  }

  add({ _id = null, _name, _location, _price, _image }) {
    // console.log(_id + " -> " + _name)
    this.setState(prevState => ({
      vacations: [
        ...prevState.vacations, {
          id: _id !== null ? _id : this.nextId(prevState.vacations),
          name: _name,
          location: _location,
          price: _price,
          image: _image
        }
      ]
    }))
  }




  componentWillMount() {
    vacationsData.map(item => {
      this.add({ _id: item.id, _name: item.name, _location: item.location, _price: item.price, _image: item.image })
    });
  }

  nextId(vacations = []) {
    let max = vacations.reduce((prev, curr) => prev.id > curr.id ? prev.id : curr.id, 0);
    return ++max;
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

  update(vacationToUpdate) {

    this.setState(prevState => ({
      ApplicationState: "none",
      vacations: prevState.vacations.map(
        vacation => vacation.id !== vacationToUpdate.id ? vacation : {
          ...vacation, name: vacationToUpdate.name,
          location: vacationToUpdate.location,
          price: vacationToUpdate.price
        }
      )
    }))
  }

  delete(id) {
    this.setState(prevState => ({
      vacations: prevState.vacations.filter(vacation => vacation.id !== id)
  }))
  }






  render() {
    console.log(this.state.vacations);

    switch (this.state.ApplicationState) {
      case "none":
        return (
          <div className='App'>
            <ListSide
              ApplicationState={this.state.ApplicationState}
              vacations={this.state.vacations}
              onEdit={this.edit}
              onDelete={this.delete}
            />
            <FormSide
              ApplicationState={this.state.ApplicationState}
              onAdd={this.add}
            />
          </div>
        )
      case "edit":
        // alert(this.state.vacations[this.state.vacationToUpdate - 1].name + this.state.vacationToUpdate);
        return (
          <div className='App'>
            <ListSide
              ApplicationState={this.state.ApplicationState}
              vacations={this.state.vacations}
              onEdit={this.edit}
              onDelete={this.delete}
            />
            <FormSide
              ApplicationState={this.state.ApplicationState}
              vacationToEdit={this.state.vacations[this.state.vacationToEdit - 1]}
              onUpdate={this.update}
            />
          </div>
        )

      default:
        break;
    }


  }



  // render() {
  //   if (this.state.editing) {
  //     // if (document.getElementById("form"))
  //     document.getElementById("form").reset();
  //     return (
  //       <div className='App'>
  //         <ListSide callBack={this.passFromListToForm}
  //           adding={false}
  //           editing={true}
  //           updateId={this.state.updateId}
  //           updateName={this.state.updateName}
  //           updateLocation={this.state.updateLocation}
  //           updatePrice={this.state.updatePrice}
  //           updateImage={this.state.updateImage}
  //         />
  //         <FormSide
  //           id={this.state.id}
  //           name={this.state.name}
  //           location={this.state.location}
  //           price={this.state.price}
  //           image={this.state.image}
  //           editing={this.state.editing}
  //           onAdd={this.addToList}
  //           onUpdate={this.update}
  //         />
  //       </div>
  //     )
  //   }
  //   else {
  //     if (document.getElementById("form"))
  //       document.getElementById("form").reset();
  //     if (this.state.adding) {
  //       console.log("App--adding-->", this.state)
  //       return (
  //         <div className='App'>
  //           <ListSide newName={this.state.newName}
  //             newLocation={this.state.newLocation}
  //             newPrice={this.state.newPrice}
  //             newImage={this.state.newImage}
  //             editing={this.state.editing}
  //             adding={true}
  //             callBack={this.passFromListToForm}

  //           />

  //           <FormSide name={this.state.name}
  //             location={this.state.location}
  //             price={this.state.price}
  //             image={this.state.image}
  //             editing={this.state.editing}
  //             onAdd={this.addToList}
  //           ></FormSide>
  //         </div>
  //       )
  //     }
  //     else {
  //       if (document.getElementById("form"))
  //         document.getElementById("form").reset();
  //       console.log("App--NOT-adding-->", this.state)
  //       return (
  //         <div className='App'>
  //           <ListSide callBack={this.passFromListToForm} />
  //           <FormSide name={this.state.name}
  //             location={this.state.location}
  //             price={this.state.price}
  //             image={this.state.image}
  //             editing={this.state.editing}
  //             onAdd={this.addToList}
  //           ></FormSide>
  //         </div>
  //       )
  //     }
  //   }
  // }
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