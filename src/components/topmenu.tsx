import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive'
import Logo from './logo'

const Comp= ()=>{
  const isTablet = useMediaQuery({
      query: '(max-width: 768px)'
    })
  return isTablet?<Navbar collapseOnSelect expand="lg"  variant="light">
  <Navbar.Brand href="/"><Logo/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Dashboard</Nav.Link>
      <Nav.Link href="/konkursbo">Konkursbo</Nav.Link>
      <Nav.Link href="/lonnskrav">Lønnskravene</Nav.Link>
      <Nav.Link href="/konkursboervi">Fordringer</Nav.Link>
      <Nav.Link href="/ola">Oppgaver</Nav.Link>
      <Nav.Link href="/messaging">Messaging</Nav.Link>
      
       </Nav>
    <Nav>
     
    </Nav>
  </Navbar.Collapse>
</Navbar>
:<></>}
export default Comp;