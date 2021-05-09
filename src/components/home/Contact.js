import React from "react";
import { useForm } from "react-hook-form";
import emailjs, { init } from "emailjs-com";
import { PrimaryBtn } from "../globals/PrimaryBtn";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

init("user_pZK2ZSiYuabJQdc9HljH0");

export const Contact = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const successToast = (name) => {
    const capitalise = (str) => {
      const lower = str.toLowerCase();
      return str.charAt(0).toUpperCase() + lower.slice(1);
    };
    toast(
      `Message sent successfully. ${capitalise(
        name
      )}, keep an eye on your inbox!`,
      {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        className: "submit-feedback success",
        toastId: "notifyToast",
      }
    );
  };

  const onSubmit = async (data) => {
    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      };
      await emailjs.send("service_ybc3waj", "template_ze1ywjf", templateParams);
      reset();
      successToast(data.name);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div id="contact" className="section_container w-100 d-flex" name="section">
      {/* Desktop */}
      <div className="d-none d-md-flex w-100 px-100">
        <div className="col-6 d-flex justify-content-center">
          <div className="col-12 d-flex flex-column justify-content-center align-items-center h-100 py-5 px-100 contact_box">
            {/* Logo */}
            <div className="logo_image d-flex my-3">
              <img
                src={`${process.env.PUBLIC_URL}/assets/logo.png`}
                alt="SB Illustrates"
              />
            </div>

            {/* Social Links */}
            <ul className="d-flex pl-0 my-2 social_container">
              {/* Instagram */}
              <li className="col-4 d-flex justify-content-center social_item">
                <a
                  href="https://www.instagram.com/sb_illustrates/"
                  className="p-2"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/instagram.png`}
                    alt="Instagram"
                  />
                </a>
              </li>

              {/* Facebook */}
              <li className="col-4 d-flex justify-content-center social_item">
                <a
                  href="https://www.facebook.com/sbillustrates/"
                  className="p-2"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/facebook.png`}
                    alt="Facebook"
                  />
                </a>
              </li>

              {/* LinkedIn */}
              <li className="col-4 d-flex justify-content-center social_item">
                <a
                  href="https://www.linkedin.com/in/sarah-brennan-04ba26207/?originalSubdomain=uk"
                  className="p-2"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/linkedin.png`}
                    alt="LinkedIn"
                  />
                </a>
              </li>
            </ul>

            {/* Etsy */}
            <div className="d-flex flex-column align-items-center my-3 etsy_container">
              <p className="mb-1 font-size-10">
                <em>prints available from...</em>
              </p>
              <a
                href="https://www.etsy.com/uk/shop/SarahBIllustrates"
                className="etsy_link px-3 py-2"
                rel="noreferrer"
                target="_blank"
              >
                Etsy Store
              </a>
            </div>

            {/* Email */}
            <div className="d-flex align-items-center mt-2 mb-3 email_container">
              <img
                src={`${process.env.PUBLIC_URL}/assets/mail.png`}
                alt="Email"
              />
              <a
                href="mailto:sarahbrennanillustrates@gmail.com"
                className="ml-2"
              >
                <p className="mb-0 email_link">
                  sarahbrennanillustrates@gmail.com
                </p>
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
            <form
              className="w-100"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              {/* Name */}
              <div className="form-group d-flex flex-column">
                {/* Heading */}
                <label className="mb-1">name</label>

                {/* Error Handling */}
                {errors.name ? (
                  <small className="errorMessage text-danger pb-2">
                    {errors.name.message}
                  </small>
                ) : null}

                <input
                  type="text"
                  name="name"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Please enter your name",
                    },
                    maxLength: {
                      value: 30,
                      message: "Please use 30 characters or less",
                    },
                  })}
                  className="p-2"
                  placeholder="Your full name..."
                ></input>
              </div>

              {/* Email */}
              <div className="form-group d-flex flex-column">
                {/* Heading */}
                <label className="mb-1">email</label>

                {/* Error Handling */}
                {errors.email ? (
                  <small className="errorMessage text-danger pb-2">
                    Please enter a valid email address
                  </small>
                ) : null}

                <input
                  type="text"
                  className="p-2"
                  name="email"
                  placeholder="Your email address..."
                  required
                  {...register("email", {
                    required: true,
                    pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  })}
                />
              </div>

              {/* Subject */}
              <div className="form-group d-flex flex-column">
                {/* Heading */}
                <label className="mb-1">subject</label>

                {/* Error Handling */}
                {errors.subject ? (
                  <small className="errorMessage text-danger pb-2">
                    Please enter a subject line
                  </small>
                ) : null}

                <input
                  type="text"
                  className="p-2"
                  name="subject"
                  {...register("subject", {
                    required: true,
                  })}
                  placeholder="Your message subject..."
                  required
                />
              </div>

              {/* Message */}
              <div className="form-group d-flex flex-column">
                {/* Heading */}
                <label className="mb-1">message</label>

                {/* Error Handling */}
                {errors.message ? (
                  <small className="errorMessage text-danger pb-2">
                    Please enter a message
                  </small>
                ) : null}

                {/* Input */}
                <textarea
                  type="text"
                  className="p-2"
                  name="message"
                  {...register("message", {
                    required: true,
                  })}
                  placeholder="Your  message (e.g. what are your commission rates?)..."
                  required
                />
              </div>

              {/* Submit Btn */}
              <PrimaryBtn type="submit" value="send" />
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>

      {/* Mobile */}
      <div className="d-flex flex-column d-md-none w-100 col-12 mobile_contact my-3">
        {/* Title */}
        <div className="title p-2">
          <h1>Contact Me</h1>
          <p className="mb-1">
            Follow my pages to get updates on my work or to get in touch
          </p>
        </div>

        {/* Social Links */}
        <ul className="d-flex pl-0 mt-2 mb-3 social_container">
          {/* Facebook */}
          <li className="col-4 d-flex justify-content-center social_item mobile_social">
            <a
              href="https://www.facebook.com/sbillustrates/"
              className="p-2 rounded shadow-sm"
              style={{ height: "fit-content", width: "fit-content" }}
            >
              <img
                className="w-100"
                src={`${process.env.PUBLIC_URL}/assets/facebook.png`}
                alt="Facebook"
              />
            </a>
          </li>

          {/* Instagram */}
          <li className="col-4 d-flex justify-content-center social_item mobile_social">
            <a
              href="https://www.instagram.com/sb_illustrates/"
              className="p-2 rounded shadow-sm"
              style={{ height: "fit-content", width: "fit-content" }}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="w-100"
                src={`${process.env.PUBLIC_URL}/assets/instagram.png`}
                alt="instagram"
              />
            </a>
          </li>

          {/* LinkedIn */}
          <li className="col-4 d-flex justify-content-center social_item mobile_social">
            <a
              href="https://www.linkedin.com/in/sarah-brennan-04ba26207/?originalSubdomain=uk"
              className="p-2 rounded shadow-sm"
              style={{ height: "fit-content", width: "fit-content" }}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="w-100"
                src={`${process.env.PUBLIC_URL}/assets/linkedin.png`}
                alt="LinkedIn"
              />
            </a>
          </li>
        </ul>

        {/* Etsy & Email */}
        <div className="p-2 d-flex etsy_email_container">
          {/* Etsy */}
          <div className="col-6 etsy_email_box p-0 pr-2">
            <div className="d-flex py-3 px-2 flex-column justify-content-center align-items-center etsy_email_inner">
              <p className="mb-2">Purchase my prints here</p>
              <a
                href="https://www.etsy.com/uk/shop/SarahBIllustrates"
                className="d-flex px-4 justify-content-center align-items-center etsy_button"
                target="_blank"
                rel="noreferrer"
              >
                ETSY
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="col-6 etsy_email_box p-0 pl-2">
            <div className="d-flex py-3 px-2 flex-column justify-content-center align-items-center etsy_email_inner">
              <p className="mb-2">Email your requests here</p>
              <a href="mailto:sarahbrennanillustrates@gmail.com">
                <img
                  className="h-100"
                  src={`${process.env.PUBLIC_URL}/assets/mail.png`}
                  alt="Email"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Form */}
        <form
          className="mobile_form mx-2 mt-3 p-3"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <h2 className="py-3">Send a message</h2>

          {/* Name */}
          <div className="my-3 form-group d-flex flex-column">
            {/* Heading */}
            <label className="mb-1">name</label>

            {/* Error Handling */}
            {errors.name ? (
              <small className="errorMessage text-danger pb-2">
                {errors.name.message}
              </small>
            ) : null}

            {/* Input */}
            <input
              className="p-2"
              type="text"
              placeholder="Your name..."
              {...register("name", {
                required: {
                  value: true,
                  message: "Please enter your name",
                },
                maxLength: {
                  value: 30,
                  message: "Please use 30 characters or less",
                },
              })}
            />
          </div>

          {/* Email */}
          <div className="form-group d-flex flex-column">
            {/* Heading */}
            <label className="mb-1">email</label>

            {/* Error Handling */}
            {errors.email ? (
              <small className="errorMessage text-danger pb-2">
                Please enter a valid email address
              </small>
            ) : null}

            {/* Input */}
            <input
              className="p-2"
              type="text"
              placeholder="Your email..."
              required
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              })}
            />
          </div>

          {/* Subject */}
          <div className="form-group d-flex flex-column">
            {/* Heading */}
            <label className="mb-1">subject</label>

            {/* Error Handling */}
            {errors.subject ? (
              <small className="errorMessage text-danger pb-2">
                Please enter a subject line
              </small>
            ) : null}

            <input
              type="text"
              className="p-2"
              name="subject"
              {...register("subject", {
                required: true,
              })}
              placeholder="Your message subject..."
              required
            />
          </div>

          {/* Message */}
          <div className="form-group d-flex flex-column">
            {/* Heading */}
            <label className="mb-1">message</label>

            {/* Error Handling */}
            {errors.message ? (
              <small className="errorMessage text-danger pb-2">
                Please enter a message
              </small>
            ) : null}

            {/* Input */}
            <textarea
              type="text"
              className="p-2"
              name="message"
              {...register("message", {
                required: true,
              })}
              placeholder="Your  message (e.g. what are your commission rates?)..."
              required
            />
          </div>

          {/* Submit Btn */}
          <PrimaryBtn type="submit" value="send" />
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};
