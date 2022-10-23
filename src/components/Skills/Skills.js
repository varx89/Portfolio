import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Skills.css';
import 'animate.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css/animate.min.css';
import html_icon from './../../assets/images/html-icon.png';
import css_icon from './../../assets/images/css-icon.png';
import javascript_icon from './../../assets/images/javascript-icon.png';
import react_icon from './../../assets/images/react-icon.png';
import python_icon from './../../assets/images/python-icon.png';
import photoshop_icon from './../../assets/images/photoshop-icon.png';
import mysql_icon from './../../assets/images/mysql-icon.png';


// import {Animated} from "react-animated-css";


const Skills = () => {
    return (
      <div className='flex pt-5 pb-5'>
      <AnimationOnScroll animateIn="animate__fadeInUp"> 
      <div className='container pt-5'>
        <div className='row col-sm mb-5'>
          <div className="skills-title">
              <h2>Skills</h2>
              <p className='skills'>I've got some skillz!!!</p>
          </div>
        </div>
      
      </div> 

      <div className='pb-5'>
      <div className='container-sm mb-5'>
        <div className="row">
          <div className="col-sm mt-3">
            <div className="progress">
              <span className='pbar'>HTML</span><div className="progress-bar" role="progressbar" aria-label="HTML" style={{width: '85%'}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div>
            </div>
          </div>
          <div className="col-sm mt-3">
            <div className="progress">
              <span className='pbar'>REACT</span><div className="progress-bar" role="progressbar" aria-label="REACT" style={{width: '55%'}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">55%</div>
            </div>
          </div>
      </div>
      <p style={{marginTop: '40px'}}></p>
      <div className="row">
          <div className="col-sm mt-3">
            <div className="progress">
              <span className='pbar'>CSS</span><div className="progress-bar" role="progressbar" aria-label="CSS" style={{width: '70%'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
            </div>
          </div>
          <div className="col-sm mt-3">
            <div className="progress">
              <span className='pbar'>NODE</span><div className="progress-bar" role="progressbar" aria-label="NODE" style={{width: '60%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
            </div>
          </div>
      </div>

      <p style={{margin: '40px'}}></p>
      <div className="row">
          <div className="col-sm mt-3">
            <div className="progress">
              <span className='pbar'>PYTHON</span><div className="progress-bar" role="progressbar" aria-label="PYTHON" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
            </div>
          </div>
          <div className="col-sm mt-3">
            <div className="progress">
              <span className='pbar'>PHOTOSHOP</span><div className="progress-bar" role="progressbar" aria-label="PHOTOSHOP" style={{width: '55%'}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">55%</div>
            </div>
          </div>
      </div>

      </div>
      </div>

      
      <div className='container text-center opacity-50'>
        <img src={html_icon} className='me-3 mt-2' style={{width: '70px', height: '100%'}} alt='HTML' />
        <img src={css_icon} className='me-3 mt-2' style={{width: '70px', height: '100%'}} alt='HTML' />
        <img src={javascript_icon} className='me-3 mt-2' style={{width: '70px', height: '100%'}} alt='HTML' />
        <img src={react_icon} className='me-3 mt-2' style={{width: '70px', height: '100%'}} alt='HTML' />
        <img src={python_icon} className='me-3 mt-2' style={{width: '70px', height: '100%'}} alt='HTML' />
        <img src={photoshop_icon} className='me-3 mt-2' style={{width: '70px', height: '100%'}} alt='HTML' />
        <img src={mysql_icon} className='me-3 mt-2' style={{width: '70px', height: '100%'}} alt='HTML' />
      </div>
      </AnimationOnScroll>
    </div>
        
    )
}

export default Skills;