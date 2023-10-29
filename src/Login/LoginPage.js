import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from 'react-router-dom';

const MAX_FIELD_LENGTH = 50;


class LoginForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            logged: 'false',
            redirect : false,
        }

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    

    handleUsernameChange(event){
        this.setState({username: event.target.value});
    }
    handlePasswordChange(event){
        this.setState({password: event.target.value});
    }

    checkFieldRestrictions(){
        /*your code here*/
    }

    validFieldLength(field){
        if (field.length > MAX_FIELD_LENGTH){
            return false;
        }
        return true;
    }


    async handleSubmit(event){
        
        event.preventDefault();
        
        //alert("Handle submit");

        const post_body =  {"mail" : this.state.username, "password": this.state.password};
        
        /*await fetch(process.env.REACT_APP_GATEWAY_HOSTNAME + "/login",{method: 'POST' ,mode: "cors", headers: {
            "Content-Type": "application/json",
          }, body : JSON.stringify(post_body)})
          .then((response) => {
            if (response.status === 200){
                const response_json = response.json();
                alert("200");
                console.log(JSON.stringify(response_json));
                alert(response.headers.get('Authorization'));
                this.setState({redirect : true});
            } else{
                alert("Invalid login. Check credentials");
            }
          })*/

          /*
          try {
                const response = await fetch(process.env.REACT_APP_GATEWAY_HOSTNAME + "/login/admin", {method: 'POST' ,mode: "cors", headers: {
                "Content-Type": "application/json",
            }, body : JSON.stringify(post_body)});
            
            if (response.status === 200) {
                const response_json = await response.json();
                console.log(response_json.token);
                localStorage.setItem('token', response_json.token);
                localStorage.setItem('authenticated', true);
                this.props.navigate("/Home")
            } else {
                alert("Login inválido");
            }
            } catch (error) {
                console.log(error);
                this.props.navigate('/Error', {
                    state: {
                      error: error,
                    }
                  });
                
              }
          */
          //alert(localStorage.getItem('token'));
          //console.log(JSON.stringify(response_json));
    }


    render(){


        var submit_button = <Button variant="primary"  type="submit"> Enviar </Button>;

        if (!this.validFieldLength(this.state.username)  ){
            var username_alert = <Alert variant='warning'>
                Alert: Invalid length in the username field
            </Alert>;
            submit_button = <Button variant="primary"  type="submit" disabled> Enviar </Button>;
        }
        if (!this.validFieldLength(this.state.password)  ){
            var password_alert = <Alert variant='warning'>
                Alert: Invalid length in the password field
            </Alert>;
            submit_button = <Button variant="primary"  type="submit" disabled> Enviar </Button>;
        }

        return(

            <div style={{ padding:"100px"}} > 
            <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3"  controlId="formBasicUsername" >
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="text" onChange={this.handleUsernameChange} placeholder="Enter username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onChange = {this.handlePasswordChange} placeholder="Password" />
                </Form.Group>
                {submit_button}
                
            </Form>
            {username_alert}
            {password_alert}
            </div>
        )

    }

}

export function LoginFormFunc(props) {
    const navigate = useNavigate();
    return <LoginForm navigate={navigate}></LoginForm>
}

export default LoginForm;