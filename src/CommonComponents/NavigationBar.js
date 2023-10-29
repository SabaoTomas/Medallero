import React from 'react';
import '../App.css';
import { Outlet } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import { useLocation } from "react-router-dom";


const navigationURL = ["Tab1", "Tab2"]
const navigationTab = ["Pestaña 1", "Pestaña 2"]


class NavigationBar extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            logged : false,
            labels : this.props.labels, //array-like
        }
    }


    render(){
        let tabs = [];
        for (let i = 0; i < navigationURL.length; i++){
            tabs.push(
            <React.Fragment key = {i}>
            <Nav.Item>
                <Nav.Link href = {"/" + navigationURL[i]}> {navigationTab[i]} </Nav.Link>
            </Nav.Item>
            </React.Fragment>
            )
        }
        return(
            <Nav variant = "tabs" className = "justify-content-left">
                {tabs}
            </Nav>
        )
    }
}

export default NavigationBar;