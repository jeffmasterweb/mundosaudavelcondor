import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import Logo from '../assets/logocondor.png'

import 'bootstrap/dist/css/bootstrap.min.css'
import './Menu.css'

export class Menu extends Component {
    render() {
        return (
            <div>
                <Navbar className="App-nav" expand="lg">
    <Navbar.Brand href="#home" className="App-logo">
      <img src={Logo} alt="logo" style={{ width:'150px' }}/>
    </Navbar.Brand>
  < Navbar.Toggle aria-controls="basic-navbar-nav"/>
  <Navbar.Collapse id="basic-navbar-nav">
  <Nav className="mr-auto">
      <Nav.Link href="#">Benefícios</Nav.Link> 
      <Nav.Link href="#">Receitas</Nav.Link>
      <Nav.Link href="#">Ofertas</Nav.Link>
      <Nav.Link href="#">Blog</Nav.Link>
    </Nav>
  </Navbar.Collapse>
    {/* <Header/> */}
</Navbar>
            </div>
        )
    }
}

export default Menu
