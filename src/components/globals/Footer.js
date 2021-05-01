import React from "react";

export const Footer = (props) => {

  const footerRef = props.footerRef;
  const publicPath = process.env.PUBLIC_URL;

  return (
    <footer id="footer" className="mt-auto py-3" ref={footerRef}>
      <nav className="navbar w-100">
        {/* Logo & Title */}
        <a
          href="/"
          className="navbar-brand d-flex align-items-center col-12 col-md-3"
        >
          <img className="col-3 p-0" src={`${publicPath}/assets/logo.png`} alt="SB Illustrates" />
          <p className="col-9 mb-0">SB Illustrates, est. 2020 ©</p>
        </a>

        {/* Links */}
        <ul className="d-flex pl-0 page_links mr-4">
          <li className="my-3">
            <a href="/">Home</a>
          </li>
          <li className="my-3">
            <a href="/portfolio">Portfolio</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
