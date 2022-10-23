import React from 'react';
// import { TypeAnimation } from 'react-type-animation';
import { SocialIcon } from 'react-social-icons';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Typewriter } from 'react-simple-typewriter'

import './Body.css';





const Body = () => {
    return (
        <div>
            <div className='hero'>
            <div className='h-100 d-flex align-items-center justify-content-center'>
            <AnimationOnScroll animateIn="animate__fadeInUp"> 
                <h1>Andrei Varcus</h1>
            </AnimationOnScroll>
                <div className='type-animation'>
                I <Typewriter words={['eat', 'sleep', 'code', 'repeat!']} loop={0} cursor cursorStyle='_' typeSpeed={70} deleteSpeed={50} delaySpeed={1000}/>
                    <div className='float-animation'>
                        
                    </div>
                    
                </div>
                <div className='social-icons'>
                    <SocialIcon className='grow' network="facebook" url="https://www.facebook.com/andrei.varcus/" style={{ height: 25, width: 25, margin: 10}} />
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