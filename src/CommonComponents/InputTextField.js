import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';


class InputTextField extends React.Component {

    constructor(props){
       super(props);
       this.state = {
        fieldName : props.fieldName,
       } 

       //methods
       //this.handleInputChange = this.handleInputChange.bind(this);
       this.handleInputChange = this.props.handleInputChange;
    } 
    


    render(){
        return(
            <Form>
                <Form.Group className="mb-3"  controlId="formBasicInput">
                    <Form.Label>{this.state.fieldName}</Form.Label>
                    <Form.Control type="text" onChange={this.props.handleInputChange} placeholder={"Enter " + this.state.fieldName}  />
                </Form.Group>
            </Form>
        )
        
    }
}

export default InputTextField;