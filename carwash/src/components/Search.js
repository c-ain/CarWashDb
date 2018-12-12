import React, { Component } from 'react';
import {FormGroup, Label, Input, Button, Table} from 'reactstrap';
import axios from 'axios';
class Search extends Component{

    constructor(props){
        super(props);
        this.state ={
            department: "",
            plate: "",
            result:[],
        };
    }
    //Find the car by plate number, parameters are from the form
    searchCar = () =>{
        const domain =('http://localhost:8000/' + this.state.department + '/' + this.state.plate)
        axios.get(domain).then(response => {
            this.setState({
            result: response.data
          })
        });
        console.log("debug domain: " +  domain);
      }
      render(){
          //trying to parse result from result array into a table
          //currently not working: "this.state.map is not a function"
        let result = this.state.result.map((result) => {
            return(
            <tr key={result.id}>
                <td>{result.plate}</td>
                <td>{result.model}</td>
                <td>{result.maschine}</td>
                <td>{result.hand}</td>
            </tr>
            )
        });    
        return(
            <div className="App container">
            {/*form for handling the parameters for searching the car*/}
                <FormGroup>
                    <Label htmlFor="plate">Plate:</Label>
                    <Input id="plate"type="text" name="plate" placeholder="Input plate number" value={this.state.plate} onChange={(e) =>{
                        let{plate} =this.state;
                        plate = e.target.value;
                        this.setState({plate});
                    }} />{' '}
                    <Label for="department">Department</Label>
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
                <Button color="primary" onClick={this.searchCar}>Submit</Button>{' '}
                </FormGroup>

                {/* Table were the search results should be printed */}
                <Table>
                    <thead>
                        <tr>
                            <th>Plate</th>
                            <th>Model</th>
                            <th>Maschine wash</th>
                            <th>Hand wash</th>
                            <th>Actions</th>
                        </tr>
                        {result}
                    </thead>
                </Table>  
            </div>
        );
    }
}
export default Search;