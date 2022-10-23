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
      <div>
      <div className='hero2'>
      <div className='h-100 d-flex align-items-center justify-content-center'>

      <AnimationOnScroll animateIn="animate__fadeInUp"> 

      <div className='mb-5'>
      <div className='container-sm mb-5'>
        <div className="section-title">
          <h2>Skills</h2>
            <p className='skills'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

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
      <p style={{margin: '40px'}}></p>
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

      <div style={{paddingTop: '50px'}}></div>
      <div className='d-flex justify-content-center opacity-50'>
        <img src={html_icon} className='me-3' style={{width: '70px', height: '100%'}} alt='HTML' />
        <img src={css_icon} className='me-3' style={{width: '70px', height: '100%'}} alt='HTML' />
        <img src={javascript_icon} className='me-3' style={{width: '70px', height: '100%'}} alt='HTML' />
        <img src={react_icon} className='me-3' style={{width: '70px', height: '100%'}} alt='HTML' />
        <img src={python_icon} className='me-3' style={{width: '70px', height: '100%'}} alt='HTML' />
        <img src={photoshop_icon} className='me-3' style={{width: '70px', height: '100%'}} alt='HTML' />
        <img src={mysql_icon} className='me-3' style={{width: '70px', height: '100%'}} alt='HTML' />
      </div>
      </AnimationOnScroll>
    

      
      </div>
      </div>
      </div>
        
    )
}

export default Skills;