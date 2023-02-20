import React, { useRef } from "react";
import "./contect.css";
import { AiOutlineMail } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

export default function Contect() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm( "service_3b3b7n9", "template_kgm4kgk",  form.current, "9ZosH-q7XabEj-zU6")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <AiOutlineMail className="contact_option_icon" />
            <h4>Email</h4>
            <h5>example@gmail.com</h5>
            <a href="mailto:example@gmail.com" target="_blank" rel="noreferrer">
              {" "}
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="contact_option_icon" />
            <h4>Messenger</h4>
            <h5>Blank</h5>
            <a href="https://m.me/ernest.achiever" target="_blank" rel="noreferrer">
              {" "}
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option_icon" />
            <h4>Whatsapp</h4>
            <h5>+123456789</h5>
            <a
              href="https://api.whatsapp.com/send?phone=8135082381"
              target="_blank" rel="noreferrer"
            >
              {" "}
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
        {/* <form ref={form} onSubmit="#"> */}
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button typeof="submit" className="btn btn-primary">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
