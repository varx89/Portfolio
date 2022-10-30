import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Contact.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

// const YOUR_SERVICE_ID = 'service_pl4hjcj';
// const YOUR_TEMPLATE_ID = 'template_wl5366e';
// const YOUR_PUBLIC_KEY = 'peeRHsFREPqvhRtdg';
const YOUR_SERVICE_ID = process.env.YOUR_SERVICE_ID;
const YOUR_TEMPLATE_ID = process.env.YOUR_SERVICE_ID;
const YOUR_PUBLIC_KEY = process.env.YOUR_SERVICE_ID;

console.log(YOUR_PUBLIC_KEY);


const Contact = () => {
    
    const initialValues = {
        user_name: "",
        user_email: "",
        message: ""
    };
    const [contact, setContact] = useState(initialValues);

    const onChangeName = (e) =>{
        setContact({...contact, user_name: e.target.value})
    }
    const onChangeEmail = (e) =>{
        setContact({...contact, user_email: e.target.value})
    }
    const onChangeMessage = (e) =>{
        setContact({...contact, message: e.target.value})
    }
    
    
    const sendEmail = (event) => {
        event.preventDefault();
        console.log(YOUR_PUBLIC_KEY);
        
        if (contact.user_name || contact.user_email  || contact.message) {
        //    console.log(contact);

           const templateParams = {
                to_name: "Andrei Varcus",
                from_name: contact.user_name,
                message: contact.message,
                reply_to: contact.user_email
            }

           emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, templateParams, YOUR_PUBLIC_KEY)
           .then(result => {
                console.log(result.text)
                const alertmsg = document.getElementById("sent");

                if (alertmsg.style.display === "none") {
                    alertmsg.style.display = "block";
                    setTimeout(() => {
                        alertmsg.style.display = "none";
                    }, 10000)
                  } else {
                    alertmsg.style.display = "none";
                  }
            })
           .then(error => {
                console.log(error);
            })
        }
      };

    

    return (
      <div className='flex mt-5'>
      <AnimationOnScroll animateIn="animate__fadeInUp"> 
            <div className="container">
                <div className="row col-sm mb-5">
                    
                        <div className="contact-title">
                            <h2>Contact Me</h2>
                        
                        </div>
                        
                </div>
                <div className="row">
                    <div className="col-lg-7">
                        <form onSubmit={sendEmail} className="mb-4 mb-lg-0">
                            <div className="form-row">
                            <div id='sent' className="alert alert-primary" style={{display: 'none'}} role="alert">
                                Message Sent!
                            </div>
                                <div className="col-md-6 form-group">
                                    <input type="text" onChange={onChangeName} value={contact.user_name} name="user_name" className="form-control" id="name" placeholder="Your Name" required /><br></br>
                                </div>
                                <div className="col-md-6 form-group">
                                    <input type="email" onChange={onChangeEmail} value={contact.user_email} className="form-control" name="user_email" id="email" placeholder="Your Email" required /><br></br>
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" /><br></br>
                            </div>
                            <div className="form-group">
                                <textarea onChange={onChangeMessage} value={contact.message} className="form-control" name="message" placeholder="Type Message" required></textarea><br></br>
                            </div>
                            <button type="submit" className="btn btn-primary">Contact Now </button>
                        </form>
                    </div>

                    <div className="col-lg-5">
                        <div className="map">
                            <iframe title='Contact us' src="https://maps.google.com/maps?q=Nelu%20aristide%20dragomir%204&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="400" frameBorder="0" style={{border: '0'}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                        </div>
                    </div>
                </div>
            </div>
    </AnimationOnScroll>
        
        
        
      </div>
        
    )
}

export default Contact;