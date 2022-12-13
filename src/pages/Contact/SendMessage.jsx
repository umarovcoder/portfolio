import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SendMessage = () => {

    const notify = (e) => {
        e.preventDefault();
        toast.success("sent successfully")

        emailjs.sendForm('service_74mmpui', 'template_6vq1yte', form.current, 'V-bfgxD4r4xG7xw5k')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    const form = useRef();

    return (

        <form ref={form} onSubmit={notify}>
            <div className="row">
                <div data-aos="zoom-in" className="contact-form reveal">
                    <h3>Send Message</h3>
                    <div className="input-box">
                        <input 
                            type="text" 
                            placeholder="Name" 
                            name='user_name' 
                            required
                        />
                    </div>
                    <div className="input-box">
                        <input 
                            type="text" 
                            placeholder="Email" 
                            name='user_email' 
                            required
                        />
                    </div>
                    <div className="input-box">
                        <textarea
                            placeholder="Message"
                            cols="80" rows="8"
                            name='message'
                            required
                        ></textarea>
                    </div>
                    <div className="input-box">
                        <input
                            type="submit"
                            className="send-btn"
                            value="Send"
                        />
                    </div>
                </div>
                <ToastContainer position='top-right'/>
            </div>
        </form>
    );
}

export default SendMessage