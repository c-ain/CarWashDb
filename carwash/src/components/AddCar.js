import React, { Component } from 'react';


class AddCar extends React.Component {
  constructor(){
    super();
    this.state={    
    plate: "",
    model: "",
    maschine: "",
    hand: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();

  }
  
    render() {
    return (
      <div className="App">

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="plate">Plate:</label>
            <input id="plate"type="text" name="plate" />

          <label htmlFor="model">Model:</label>
            <input id="model" type="text" name="model" />

          <label htmlFor="maschine">Maschine wash:</label>
            <input id="maschine"type="radio" name="maschine" />

          <label htmlFor="hand">Hand wash:</label>
            <input id="hand" type="radio" name="hand" />

          <button>Submit</button>
        </form>
                
      </div>
    );
  }
}


export default AddCar;
