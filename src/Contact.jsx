import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

const SERVICE_ID = 'service_8luy121';
const TEMPLATE_ID = 'template_769r3j6';
const PUBLIC_KEY = 'HuHne3fsWTTd854xt';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        // Clear the form after successful submission
        form.current.reset();
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <div id="Contact" className="container ">

      <div className="mx-auto text-center">
        <h3>Contact</h3>
        <p>Let's talk about your project</p>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="from_name" placeholder="Your Name" required/>
          <input type="email" name="from_email" placeholder="Your Email" required/>
          <textarea name="message" placeholder="Write Message.."  required ></textarea>
          <button type="submit" className="btn btn-dark btn-long">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
