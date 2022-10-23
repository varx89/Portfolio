import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Contact.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Contact = () => {
    return (
      <div>
      <AnimationOnScroll animateIn="animate__fadeInUp"> 
        <div className="contact-us">
            <div className="container">
                <div className="row">
                    
                        <div className="contact-title">
                            <h2>Contact Us</h2>
                            <p style={{margin: '20'}}></p>
                        </div>
                        <div className="col-md-7">
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-7">
                        <form action="/" className="mb-4 mb-lg-0">
                            <div className="form-row">
                                <div className="col-md-6 form-group">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" /><br></br>
                                </div>
                                <div className="col-md-6 form-group">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" /><br></br>
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" /><br></br>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" name="message" placeholder="Type Message"></textarea><br></br>
                            </div>
                            <button type="submit" className="btn btn-primary">Contact Now</button>
                        </form>
                    </div>

                    <div className="col-lg-5">
                        <div className="map">
                            <iframe title='Contact us' src="https://maps.google.com/maps?q=Nelu%20aristide%20dragomir%204&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="400" frameBorder="0" style={{border: '0'}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        <div>
          <footer className="bg-light text-center text-lg-start">
          <div className="text-center p-3" style={{background: 'rgba(0, 0, 0, 0.2)'}}>
            {'© 2020 Copyright:'}
            <a className="text-dark" href="https://eclectic-eclair-43a9fd.netlify.app/">Andrei Varcus</a>
          </div>
        </footer>
        </div>
        </AnimationOnScroll>
      </div>
        
    )
}

export default Contact;