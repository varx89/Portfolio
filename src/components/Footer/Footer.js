import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Footer.css';
import { SocialIcon } from 'react-social-icons';

const Contact = () => {
    return (
        <footer className="text-center text-lg-start bg-white text-muted">

        <section className="d-flex justify-content-center justify-content-lg-end p-4 border-bottom">


            <div className='ms-5'>
            <span>Get connected:</span>
            <SocialIcon network="facebook" url="https://www.facebook.com/andrei.varcus/" style={{ height: 25, width: 25, margin: 10}} />
            <SocialIcon network="instagram" url="https://www.instagram.com/andrei.varcus/" style={{ height: 25, width: 25, margin: 10}} />
            <SocialIcon network="linkedin" url="https://ro.linkedin.com/in/andrei-varcus" style={{ height: 25, width: 25, margin: 10 }} />
            <SocialIcon network="github" url="https://github.com/varx89" style={{ height: 25, width: 25, margin: 10 }} />
            </div>

        </section>

        <section className="">
            <div className="container text-center text-md-start mt-5">

                <div className="row mt-3">

                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                        <h6 className="text-uppercase fw-bold mb-4">
                            <i className="fas fa-gem me-3 text-secondary"></i>Andrei Varcus
                        </h6>
                        <p>Developer, Designer, Freelancer</p>
                    </div>

                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                        <h6 className="text-uppercase fw-bold mb-4">
                            Useful links
                        </h6>
                        <p>
                            <a href="#home" className="text-reset">Home</a>
                        </p>
                        <p>
                            <a href="#skills" className="text-reset">Skills</a>
                        </p>
                        <p>
                            <a href="#portfolio" className="text-reset">Portolio</a>
                        </p>
                        <p>
                            <a href="#contact" className="text-reset">Contact</a>
                        </p>
                    </div>


                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                    <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                    <p><i className="fas fa-home me-3 text-secondary"></i> Strada Nelu Aristide Dragomir 4, Arad</p>
                    <p>
                        <i className="fas fa-envelope me-3 text-secondary"></i>
                        andrei.varcus@yahoo.com
                    </p>
                    <p><i className="fas fa-phone me-3 text-secondary"></i> +40720 057 115</p>
                    </div>

                </div>

            </div>
        </section>


        <div className="text-center p-4" style={{background: 'rgba(0, 0, 0, 0.025)'}}>
            © 2022 Copyright: &nbsp;
            <a className="text-reset fw-bold" href="https://eclectic-eclair-43a9fd.netlify.app/">Andrei Varcus</a>
        </div>

    </footer>

        
    )
}

export default Contact;