import React from 'react';

export const Footer = (props) => {
  const footerRef = props.footerRef;
  const publicPath = process.env.PUBLIC_URL;

  return (
    <footer id="footer" className="mt-auto" ref={footerRef}>
      <nav className="navbar w-100">
        {/* Logo & Title */}
        <a
          href="/"
          className="navbar-brand d-flex align-items-center col-12 col-md-3"
        >
          <img
            className="col-3 p-0"
            src={`${publicPath}/assets/logo.png`}
            alt="SB Illustrates"
          />
          <p className="ml-3 mb-0 font-weight-normal">
            sb illustrates, est. 2020 ©
          </p>
        </a>

        {/* Links */}
        <ul className="d-flex pl-0 page_links">
          <li className="my-3 mx-4">
            <a className="font-weight-bold" href="/">
              home
            </a>
          </li>
          <li className="my-3 mx-4">
            <a className="font-weight-bold" href="/portfolio">
              portfolio
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
