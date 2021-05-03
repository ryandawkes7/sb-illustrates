import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

export const Header = (props) => {

  const headerRef = props.headerRef;
  const publicPath = process.env.PUBLIC_URL;

  return (
    <header id="header" ref={headerRef}>
      <div className="navbar navbar-light navbar-backdrop">
        <nav className="navbar navbar-expand-lg w-100">

          <Navbar id="header" className="w-100 d-flex" expand="lg">

            {/* Brand */}
            <Navbar.Brand href="/">
              <img src={`${publicPath}/assets/logo-wide.png`} alt="SB Illustrates" />
            </Navbar.Brand>

            {/* Toggler */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            {/* Collapsable Content */}
            <Navbar.Collapse id="basic-navbar-nav" className="d-flex ml-auto" style={{width: 'fit-content'}}>
              <Nav className="mr-auto">
                <Nav.Link className="nav-link mauve-color font-weight-bold" href="/">home</Nav.Link>
                <Nav.Link className="nav-link mauve-color font-weight-bold" href="#link">portfolio</Nav.Link>
                <Nav.Link className="nav-link mauve-color font-weight-bold" href="/">contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </nav>
      </div>
    </header>
  )
}