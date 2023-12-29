import React,{useRef} from 'react'
import "./contactme.css"
import { BsCursor } from "react-icons/bs"
import emailjs from '@emailjs/browser';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const serviceId=process.env.REACT_APP_SERVICE_ID
const template=process.env.REACT_APP_TEMP
const key=process.env.REACT_APP_KEY
  


const ContactMe = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm(serviceId, template, form.current,key)
        .then((result) => {
            form.current.reset();
            toast.success("The message has been successfully sent")

        }, (error) => {
            toast.error(error.txt);
        });
    };

    
    return (
        <div id="contact">
            <div className='cont container grid'>
                <div className='contact_details'>
                    <h2 className='Contact_Heading'><span>Contact Me</span></h2>
                    <p>I will read all emails. Send me any message you want and I'ill get back to you</p>
                    <p>I need your <b>Name</b> and <b>Email Address</b>,but you won't receive anything other than your reply.</p>
                    <div className='orangebox'></div>
                </div>
                <div className='sendemail'>
                    <h2>Send me a message</h2>
                    <form ref={form} onSubmit={sendEmail}>
                        
                            <div>
                                <input id="name" name="user_name" className="finput" placeholder='Name' type="text" required />
                                <label htmlFor='name' className='flabel'>Name</label>
                            </div>
                            <div>
                                <input id="email" name="user_email"  className="finput" placeholder='Email Address' type="email" required />
                                <label htmlFor='email' className='flabel' >Email </label>
                            </div>
                       
                        <div>
                            <textarea id="message" name="message" className="finput" placeholder='Write your message' type="text" required />
                            <label htmlFor='message' className='flabel'>Message</label>
                        </div>

                        <button type="submit" className='form_button'><BsCursor /><span>Send Message</span></button>

                    </form>


                </div>

            </div>

        </div>
    )
}

export default ContactMe