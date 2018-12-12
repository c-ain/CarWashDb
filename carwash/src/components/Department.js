import React, { Component } from 'react';
import {Table, Button} from 'reactstrap';

class Department extends Component{

    constructor(props){
        super(props);
        this.state ={
            items:[],
        };
    }

    //Different functions for calling the different departments as whole
    searchUsed = () =>{
        fetch('http://localhost:8000/usedAll')
        .then(response=> response.json())
        .then(responseData=> {
          this.setState({
            items: responseData
          });
        });
        console.log("debug " + this.state.items);
      }

      searchNew = () =>{
        fetch('http://localhost:8000/newAll')
        .then(response=> response.json())
        .then(responseData=> {
          this.setState({
            items: responseData
          });
        });
        console.log("debug " + this.state.items);
      }

      searchBody = () =>{
        fetch('http://localhost:8000/bodyAll')
        .then(response=> response.json())
        .then(responseData=> {
          this.setState({
            items: responseData
          });
        });
        console.log("debug " + this.state.items);
      }

      searchService = () =>{
        fetch('http://localhost:8000/serviceAll')
        .then(response=> response.json())
        .then(responseData=> {
          this.setState({
            items: responseData
          });
        });
        console.log("debug " + this.state.items);
      }
      
    render(){
        //mapping the results into a table
        const itemRows = this.state.items.map(items =>
                <tr key={items._id}>
                    <td>{items.plate}</td>
                    <td>{items.model}</td>
                    <td>{items.maschine}</td>
                    <td>{items.hand}</td>
                    <td><Button color="success" size="sm">Edit</Button></td>
                    <td><Button color="danger" size="sm">Delete</Button></td>
                </tr>
        )
        return(
            <div className="App">
            <br />
                <div>
                    {/*Buttons for choosing which department is wisible at the time */}
                    <Button color="primary" name="used" onClick={this.searchUsed}>Used Cars</Button>{' '}
                    <Button color="primary" name="new" onClick={this.searchNew}>New Cars</Button>{' '}
                    <Button color="primary" name="service" onClick={this.searchService}>Service</Button>{' '}
                    <Button color="primary" name="body" onClick={this.searchBody}>Body shop</Button>{' '}
                </div> 
                   {/* table for the query results*/}
                <Table>
                    <thead>
                        <tr>
                            <th>Plate</th>
                            <th>Model</th>
                            <th>Maschine wash</th>
                            <th>Hand wash</th>
                            <th>Actions</th>
                        </tr>
                        {itemRows}
                    </thead>
                </Table> 
            </div>

        );
    }
}
export default Department;