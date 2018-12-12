import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,  Route, Link, Switch } from "react-router-dom"
import AddCar from './components/AddCar';
import Search from './components/Search';
import Department from './components/Department';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Error from './components/Error';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';


class App extends Component {
  state = {
    newCarModal: false,
    cars: [],
    newCarData:{
      plate: "",
      model: "",
      maschine: "",
      hand: ""
    }
   
  }
 //for togling the modal 
  toggleNewCarModal(){
    this.setState({
      newCarModal: ! this.state.newCarModal
    });

  }
//for adding a car to the used Department. Sends the post to the database, but only with null fields
  addCar() {
    var  headers = {
      'Content-Type': 'application/json'
    }
    axios.post('http://localhost:8000/'+ this.state.department, this.state.newCarData, {headers: headers}).then((response) =>{
    let {cars} = this.state;
    });
  }
  render() {
    
    return (
      <div className="App">
      <Button color="primary" onClick={this.toggleNewCarModal.bind(this)}>Add entry</Button>
      <Router>
        <div>
          {/* Navigation.js has react router that is handling the routing on the site*/}
          <Navigation />

          {/*Switch for the react router*/}    
          <Switch>
            <Route exact path="/" component={Department} exact />
            <Route path="/addCar" component={AddCar} />
            <Route path="/search" component={Search} />
            <Route path="/department" component={Department} />
            <Route component={Error} />
          </Switch>
        </div>
      </Router>

        {/* Modal for adding the new entry*/}
        <Modal isOpen={this.state.newCarModal} toggle={this.toggleNewCarModal.bind(this)}>
          <ModalHeader toggle={this.toggleNewCarModal.bind(this)}>Add Entry</ModalHeader>
          <ModalBody>

            {/* Form inside the modal with all the different elements */}
            <FormGroup>
            <Input type="select" name="department" id="department"  value={this.state.department} onChange={(e) =>{
                        let{department} =this.state;
                        department = e.target.value;
                        this.setState({department});
                    }}>
                <option value="new">New</option>
                <option value="used">Used</option>
                <option value= "body">Body Shop</option>
                <option value= "service">Service</option>
            </Input>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="plate">Plate:</Label>
              <Input id="plate"type="text" name="plate" value={this.state.newCarData.plate} onChange={(e) =>{
              let {newCarData} =this.state;
              
              newCarData.plate = e.target.value;
              
              this.setState({newCarData});
              }} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="model">Model:</Label>
              <Input id="model" type="text" name="model" value={this.state.newCarData.model} onChange={(e) =>{
              let {newCarData} =this.state;
              
              newCarData.model = e.target.value;

              this.setState({newCarData});
              }}/>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="maschine">Maschine wash:</Label>{' '}
              <Input id="maschine"type="checkbox" name="maschine" value={this.state.newCarData.maschine} onChange={(e) =>{
              let {newCarData} =this.state;

              newCarData.maschine = e.target.value;
              
              this.setState({newCarData});
              }}/>{' '}
            </FormGroup>
            <FormGroup>
              <Label htmlFor="hand">Hand wash:</Label>
              <Input id="hand" type="checkbox" name="hand" value={this.state.newCarData.hand} onChange={(e) =>{
              let {newCarData} =this.state;
              
              newCarData.hand = e.target.value;
              
              this.setState({newCarData});
              }}/>{' '}
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.addCar.bind(this)}>Submit</Button>{' '}
            <Button color="secondary" onClick={this.toggleNewCarModal.bind(this)}>Cancel</Button>
          </ModalFooter>
        </Modal>

      </div>
    );
  }
}

export default App;
