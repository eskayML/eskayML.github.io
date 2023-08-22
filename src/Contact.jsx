import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

const SERVICE_ID ='service_8luy121';
const TEMPLATE_ID = 'template_769r3j6';
const PUBLIC_KEY = 'MaThsTtrPVdWpsDka';


export default function Contact(){
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

  
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div id = 'Contact' className="container">
            <div className="mt-5 mb-3 text-center">
                <h3>Contact</h3>
                <p>Let's talk about your project</p>
                <form ref={form} onSubmit={sendEmail}>

                    <input type="text" name="Name" placeholder="Your Name" />
                    <input type="email" name="Email" id="" placeholder="Your Email" />
                    <input type="text" name="Subject" placeholder="Subject"/>
                    <textarea name="Content"  placeholder="Write Content.."></textarea>
                   
                    <button type="submit" className="btn btn-dark btn-long">Send</button>
                  
                </form>
            </div>
            
        </div>
    )
}