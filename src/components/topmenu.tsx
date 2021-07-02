import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive'
import Logo from './logo'
import { useLocation } from 'react-router';
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu";

const Comp = () => {
  const isTablet = useMediaQuery({
    query: '(max-width: 768px)'
  })
  const location = useLocation();
  return isTablet ? <Navbar collapseOnSelect expand="lg" variant="light">
    <Navbar.Brand href="/"><Logo /></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Dashboard</Nav.Link>
        {
          location.pathname === "/konkursbo" ||location.pathname ===  "/lonnskrav"||location.pathname === "/konkursboervi"? <NavDropdownMenu title="konkursbo" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Ervi AS</NavDropdown.Item>
            <NavDropdown.Item href="/konkursboervi">Info om Boet</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1"><DropdownSubmenu  title="Ansatte og lonnskrav">
<NavDropdown.Item >Alle ansatte</NavDropdown.Item>
<NavDropdown.Item href="/lonnskrav" >Alle lonnskrav (3)</NavDropdown.Item>

</DropdownSubmenu></NavDropdown.Item>
<NavDropdown.Item href="#action/3.1">Kreditorer og Fordringer</NavDropdown.Item>
<NavDropdown.Item href="#action/3.1">Regnskap</NavDropdown.Item>
<NavDropdown.Item href="#action/3.1">Meldinger</NavDropdown.Item>
<NavDropdown.Item href="#action/3.1">Oppgaver</NavDropdown.Item>


          </NavDropdownMenu>
            : <Nav.Link href="/konkursbo">Konkursbo</Nav.Link>
        }

        <Nav.Link href="/lonnskrav">Lønnskravene</Nav.Link>
        <Nav.Link href="/konkursboervi">Fordringer</Nav.Link>
        <Nav.Link href="/ola">Oppgaver</Nav.Link>
        <Nav.Link href="/messaging">Messaging</Nav.Link>

      </Nav>
      <Nav>

      </Nav>
    </Navbar.Collapse>
  </Navbar>
    : <></>
}
export default Comp;