import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { SocialIcon } from 'react-social-icons';
import './Body.css';



const Body = () => {
    return (
        <div>
            <div className='hero'>
            <div className='h-100 d-flex align-items-center justify-content-center'>
                <h1>Andrei Varcus</h1>
                <div className='type-animation'>
                    <span>I'm a &nbsp;</span>
                    <div className='float-animation'>
                        <TypeAnimation cursor={false} sequence={
                        [
                        'Developer', 2000,
                        'Designer', 2000,
                        'Freelancer', 2000,
                        ]
                        } speed={60} repeat={Infinity} />
                    </div>
                    
                </div>
                <div className='social-icons'>
                    <SocialIcon network="facebook" url="https://www.facebook.com/andrei.varcus/" style={{ height: 25, width: 25, margin: 10}} />
                    <SocialIcon network="instagram" url="https://www.instagram.com/andrei.varcus/" style={{ height: 25, width: 25, margin: 10}} />
                    <SocialIcon network="linkedin" url="https://ro.linkedin.com/in/andrei-varcus" style={{ height: 25, width: 25, margin: 10 }} />
                    <SocialIcon network="github" url="https://github.com/varx89" style={{ height: 25, width: 25, margin: 10 }} />
                </div>
            </div>
            </div>
        </div>
    )
}

export default Body;