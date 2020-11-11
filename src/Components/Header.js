import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class Header extends Component {
    render() {
        return (<>
        <br/>
                <Navbar collapseOnSelect expand="lg" style={{backgroundColor:'#adc9d9'}}>  
                <Navbar.Brand href="#home">Covid Tracker</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="nav-link" to="/national">National</Link>
                        <Link className="nav-link" to="/international">International</Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>   
                </>
        )
    }
}

export default Header;

