import React from 'react'
import './contact.css'
import { FiMail } from 'react-icons/fi'
import { AiFillLinkedin } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w47z7ew', 'template_46kvtkb', form.current, 'CuZ2JIbl7ykshpfL-')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

      e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Let's get in touch</h5>
      <h2>Contact me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <FiMail className='contact_option-icon' />
            <h4>Mail to</h4>
            <h5>niharranjanhota864@gmail.com</h5>
            <a href="mailto:niharranjanhota864@gmail.com" target='_blank' rel="noopener noreferrer">Send a mail</a>
          </article>
          <article className="contact_option">
            <AiFillLinkedin className='contact_option-icon' />
            <h4>Linked in message to</h4>
            <h5>nihar_14</h5>
            <a href="www.linkedin.com/in/nihar-ranjan-hota-9a82a61b1" target='_blank' rel="noopener noreferrer">Send a message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon' />
            <h4>Whatsapp message to</h4>
            <h5>+91 98610-86932</h5>
            <a href="https://api.whatsapp.com/send?phone=+919861086932" target='_blank' rel="noopener noreferrer">Send a whatsapp message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Enter your full name' required />
          <input type="email" name="email" placeholder='Enter your email' required />
          <textarea name="message" rows="7" placeholder='Enter your message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact