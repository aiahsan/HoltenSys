import React from 'react';
import {Navbar,NavDropdown,Nav} from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive'
import Logo from './logo'

export default ()=>{
    const isTablet = useMediaQuery({
        query: '(max-width: 768px)'
      })
    return isTablet?<Navbar collapseOnSelect expand="lg"  variant="light">
    <Navbar.Brand href="#home"><Logo/></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#features">Dashboard</Nav.Link>
        <Nav.Link href="#pricing">Konkursbo</Nav.Link>
        <Nav.Link href="#pricing">Lønnskravene</Nav.Link>
        <Nav.Link href="#pricing">Fordringer</Nav.Link>
        <Nav.Link href="#pricing">Oppgaver</Nav.Link>
        <Nav.Link href="#pricing">Messaging</Nav.Link>
        
         </Nav>
      <Nav>
       
      </Nav>
    </Navbar.Collapse>
  </Navbar>
:<></>}