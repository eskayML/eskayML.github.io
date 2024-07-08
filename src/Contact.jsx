import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';

const SERVICE_ID = 'service_slfznq3';
const TEMPLATE_ID = 'template_769r3j6';
const PUBLIC_KEY = 'HuHne3fsWTTd854xt';

export default function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        setSubmitStatus('success');
        form.current.reset();
      })
      .catch((error) => {
        console.log(error.text);
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div id="Contact" className="container">
      <div className="mx-auto text-center">
        <h3>Contact</h3>
        <p>Let's talk about your project</p>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="from_name" placeholder="Your Name" required />
          <input type="email" name="from_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Write Message.." required></textarea>
          <button type="submit" className="btn btn-dark btn-long" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send'}
          </button>
        </form>
        {submitStatus === 'success' && (
          <div className="alert alert-success mt-3" role="alert">
            Your message has been sent successfully!
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="alert alert-danger mt-3" role="alert">
            There was an error sending your message. Please try again.
          </div>
        )}
      </div>
    </div>
  );
}