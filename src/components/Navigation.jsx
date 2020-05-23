import React from "react"
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap"

export default function Navigation(props) {
  return (
    <div>
      <Navbar variant="dark" bg="success" sticky="top" expand="lg">
        <Navbar.Brand href="/">
          <img alt="" src="./img/k792gvP.png" width="30" height="30" className="d-inline-block align-top"/>{' '}
          Willy8-Dev Github
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="active" href="#home">{props.site[0]}</Nav.Link>
            <Nav.Link className="active" href="#features">{props.site[1]}</Nav.Link>
            <Nav.Link className="active" href="#pricing">{props.site[2]}</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
