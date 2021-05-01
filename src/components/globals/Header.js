import React from 'react';

export const Header = (props) => {

  const headerRef = props.headerRef;
  const publicPath = process.env.PUBLIC_URL;

  return (
    <header id="header" ref={headerRef}>
      <div className="navbar navbar-light navbar-backdrop">
        <nav className="navbar navbar-expand-lg w-100">

          {/* Brand */}
          <a href="/" className="navbar-brand col-8 col-md-2">
            <img src={`${publicPath}/assets/logo-wide.png`} alt="SB Illustrates" />
          </a>

          {/* Toggler (Mobile) */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/portfolio">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
          
        </nav>
      </div>
    </header>
  )
}