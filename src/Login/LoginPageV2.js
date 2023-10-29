import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import InputTextField from '../CommonComponents/InputTextField';



class LoginFormV2 extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            username : "",
            password : "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleUsernameChange(event){
        this.setState({username: event.target.value});
    }

    handlePasswordChange(event){
        this.setState({password: event.target.value});
    }

    async handleSubmit(){
        alert("Pressed submit")
    }

    render(){
        let usernameInput  = <InputTextField fieldName = "Username" input = {this.state.username}
        handleInputChange = {this.handleUsernameChange}>
        </InputTextField>;
        let passwordInput  = <InputTextField fieldName = "Password" input = {this.state.password}
        handleInputChange = {this.handlePasswordChange}>
        </InputTextField>;
        let submitButton = <Button onClick={this.handleSubmit}>Submit</Button>
        return(
            <div style={{ padding:"100px"}} > 
                {usernameInput}
                {passwordInput}
                {submitButton}
            </div>
        )

    }

}

export function LoginFormFunc(props) {
    const navigate = useNavigate();
    return <LoginFormV2 navigate={navigate}></LoginFormV2>
}

export default LoginFormV2;