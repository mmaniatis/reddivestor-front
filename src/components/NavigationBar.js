import React from 'react';
import { Nav, Navbar, Form, FormControl, NavDropdown, Button } from 'react-bootstrap';

class NavigationBar extends React.Component {
   render() {
    return (
      <div>
          <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Reddivestor</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About this technology</Nav.Link>
            {/* <Nav.Link href="/">Public API</Nav.Link> */}
          </Nav>
        </Navbar>
      </div>
    )
}
}


export default NavigationBar