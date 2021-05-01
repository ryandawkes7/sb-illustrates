import React from "react";
import { PrimaryBtn } from "../globals/PrimaryBtn";

export const Contact = () => {
  return (
    <div id="contact" className="section_container w-100 d-flex" name="section">
      
      {/* Desktop */}
      <div className="d-none d-md-flex w-100 px-100">
        {/* Social Links */}
        <div className="col-6 d-flex justify-content-center">
          <div className="col-12 d-flex flex-column justify-content-center align-items-center h-100 py-5 px-100 contact_box">
            {/* Logo */}
            <div className="logo_image d-flex my-3">
              <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="SB Illustrates" />
            </div>
            {/* Social Links */}
            <ul className="d-flex pl-0 my-2 social_container">
              <li className="col-4 d-flex justify-content-center social_item">
                <a href="./" className="p-2">
                  <img src={`${process.env.PUBLIC_URL}/assets/facebook.png`} alt="Facebook" />
                </a>
              </li>
              <li className="col-4 d-flex justify-content-center social_item">
                <a href="./" className="p-2">
                  <img src={`${process.env.PUBLIC_URL}/assets/twitter.png`} alt="Twitter" />
                </a>
              </li>
              <li className="col-4 d-flex justify-content-center social_item">
                <a href="./" className="p-2">
                  <img src={`${process.env.PUBLIC_URL}/assets/instagram.png`} alt="Instagram" />
                </a>
              </li>
            </ul>
            {/* Etsy */}
            <div className="d-flex flex-column align-items-center my-3 etsy_container">
              <p className="mb-1 font-size-10">
                <em>Prints available from...</em>
              </p>
              <a
                href="https://www.etsy.com/uk/shop/SarahBIllustrates"
                className="etsy_link px-3 py-2"
              >
                Etsy Store
              </a>
            </div>
            {/* Email */}
            <div className="d-flex align-items-center mt-2 mb-3 email_container">
              <img src={`${process.env.PUBLIC_URL}/assets/mail.png`} alt="Email" />
              <a href="./" className="ml-2">
                <p className="mb-0">sarahbrennanillustrates@gmail.com</p>
              </a>
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <div className="col-6 d-flex justify-content-center">
          <div className="col-12 mx-0 d-flex flex-column justify-content-center align-items-center h-100 py-5 px-50 contact_box">
            {/* Title */}
            <div className="contact_title">
              <h1 className="ml-auto">Contact Me</h1>
              <p>Get in touch for commissions and general enquiries.</p>
            </div>
            {/* Form */}
            <form action="" className="w-100">
              <div className="form-group d-flex flex-column">
                <label className="mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="p-2"
                  placeholder="Your full name..."
                  required
                />
              </div>
              <div className="form-group d-flex flex-column">
                <label className="mb-1">
                  Email
                </label>
                <input
                  type="text"
                  className="p-2"
                  placeholder="Your email address..."
                  required
                />
              </div>
              <div className="form-group d-flex flex-column">
                <label className="mb-1">
                  Message
                </label>
                <textarea
                  type="text"
                  className="p-2"
                  placeholder="Your message (e.g. what are your commission rates?)..."
                  required
                ></textarea>
              </div>
              <PrimaryBtn type="submit" value="send" />
            </form>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="d-flex flex-column d-md-none w-100 col-12 mobile_contact my-3">
        {/* Title */}
        <div className="title p-2">
          <h1>Contact Me</h1>
          <p>Follow my pages to get updates on my work and to get in touch</p>
        </div>
        {/* Social Links */}
        <ul className="social_links d-flex pl-0">
          <li className="col-4 p-2">
            <div className="social_item p-2">
              <img className="w-100" src={`${process.env.PUBLIC_URL}/assets/instagram.png`} alt="Instagram" />
            </div>
          </li>
          <li className="col-4 p-2">
            <div className="social_item p-2">
              <img className="w-100" src={`${process.env.PUBLIC_URL}/assets/facebook.png`} alt="Facebook" />
            </div>
          </li>
          <li className="col-4 p-2">
            <div className="social_item p-2">
              <img className="w-100" src={`${process.env.PUBLIC_URL}/assets/twitter.png`} alt="Twitter" />
            </div>
          </li>
        </ul>
        {/* Etsy & Email */}
        <div className="col-12 p-2 d-flex etsy_email_container">
          <div className="col-6 etsy_email_box p-0 pr-2">
            <div className="d-flex py-3 px-2 flex-column justify-content-center align-items-center etsy_email_inner">
              <p className="mb-2">Purchase my prints here</p>
              <a href="./" className="d-flex px-4 justify-content-center align-items-center etsy_button">
                ETSY
              </a>
            </div>
          </div>
          <div className="col-6 etsy_email_box p-0 pl-2">
            <div className="d-flex py-3 px-2 flex-column justify-content-center align-items-center etsy_email_inner">
              <p className="mb-2">Email your requests here</p>
              <a href="./">
                <img className="h-100" src={`${process.env.PUBLIC_URL}/assets/mail.png`} alt="Email" />
              </a>
            </div>
          </div>
        </div>
        {/* Form */}
        <form className="mobile_form mx-2 mt-3 p-3" action="">
          <h2 className="py-3">Send a Message</h2>
          <div className="my-3 form-group d-flex flex-column">
            <label className="mb-1">
              Name
            </label>
            <input className="p-2" type="text" placeholder="Your name..." />
          </div>
          <div className="form-group d-flex flex-column">
            <label className="mb-1">
              Email
            </label>
            <input className="p-2" type="text" placeholder="Your email..." />
          </div>
          <div className="form-group d-flex flex-column">
            <label className="mb-1">
              Name
            </label>
            <textarea
              className="p-2"
              type="text"
              placeholder="Your message..."
            ></textarea>
          </div>
          <input
            className="mt-3 d-flex ml-auto submit_btn px-4 py-2"
            type="submit"
            value="Send"
          />
        </form>
      </div>
    </div>
  );
};