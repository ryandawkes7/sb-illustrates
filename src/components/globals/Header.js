import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";

export const Header = (props) => {
  const [expand, setExpand] = useState(false);

  const navExpand = () => {
    setExpand(true);
  };
  const navClose = () => {
    setExpand(false);
  };

  const headerRef = props.headerRef;
  const publicPath = process.env.PUBLIC_URL;

  return (
    <header id="header" ref={headerRef}>
      <div className="navbar navbar-light navbar-backdrop">
        <nav className="navbar navbar-expand-lg w-100">
          <Navbar expand="lg" id="header" className="w-100 d-none d-lg-flex">
            <Navbar.Brand href="/">
              <img
                src={`${publicPath}/assets/logo-wide.png`}
                alt="SB Illustrates"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="ml-auto">
              <Nav.Link
                className="nav-link mauve-color font-weight-bold px-3"
                href="/"
              >
                home
              </Nav.Link>
              <Nav.Link
                className="nav-link mauve-color font-weight-bold px-3"
                href="/portfolio"
              >
                portfolio
              </Nav.Link>
              <Nav.Link
                className="nav-link mauve-color font-weight-bold px-3"
                href="/contact"
              >
                contact
              </Nav.Link>
            </Nav>
          </Navbar>
          <Navbar expand="lg" id="header" className="w-100 d-flex d-lg-none">
            <Navbar.Brand href="/">
              <img
                src={`${publicPath}/assets/logo-wide.png`}
                alt="SB Illustrates"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="mt-4">
              <Nav className="mr-auto">
                <Nav.Link
                  className="nav-link mauve-color font-weight-bold px-3 my-2"
                  href="/"
                >
                  home
                </Nav.Link>
                <Nav.Link
                  className="nav-link mauve-color font-weight-bold px-3 my-2"
                  href="/portfolio"
                >
                  portfolio
                </Nav.Link>
                <Nav.Link
                  className="nav-link mauve-color font-weight-bold px-3 my-2"
                  href="/contact"
                >
                  contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </nav>
      </div>
    </header>
  );
};
