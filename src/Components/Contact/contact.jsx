import React from 'react'; // Import the React library
import './contact.css'; // Import the CSS file
import KSU from '../../assets/ksu.png'; // Import the image file
import Lowes from'../../assets/lowes.png'; // Import the image file
import Omni from '../../assets/omni.png'; // Import the image file
import Powercrunch from'../../assets/powercrunch.png'; // Import the image file
import twitter from '../../assets/twitterIcon.png'; // Import the image file
import linkedin from '../../assets/linkedinIcon.png'; // Import the image file
import facebook from '../../assets/facebookIcon.png'; // Import the image file
import instagram from '../../assets/instagramIcon.png'; // Import the image file
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qa3ucts', 'template_0tl31vb', form.current, {publicKey: 'J-OvpxJAsj_CmxwEo',})
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Email Sent!');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id="contactPage"> 
        <div id="clients">
            <h1 className="contactPageTitle">My Clients</h1>
            <p className="clientDesc">I have had the opportunity to work with a diverse group of companies</p>
            <div className="clientImgs">
                <img src={KSU} alt="Client" className="clientImg" />
                <img src={Lowes} alt="Client" className="clientImg" />
                <img src={Omni} alt="Client" className="clientImg" />
                <img src={Powercrunch} alt="Client" className="clientImg" />
            </div>
        </div>
        <div id="contact">
          <h1 className="contactPageTitle">Contact Me </h1>
          <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
          <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type="text" className="name" placeholder='Your Name' name='your_name'/>
            <input type="email" className="email" placeholder='Your Email'name='your_email' />
            <textarea className='msg' name="message" rows="5" placeholder="Your Message"></textarea>
            <button className ="submitBtn" value='send' type="submit">Submit</button>
            <div className="links">
              <img src={facebook} alt="" className="link" />
              <img src={linkedin} alt="" className="link" />
              <img src={instagram} alt="" className="link" />
              <img src={twitter} alt="" className="link" />
            </div>
          </form>
        </div>
    </section>
  )
}

export default Contact;