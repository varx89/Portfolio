import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Skills.css';
// import {Animated} from "react-animated-css";


const Skills = () => {
    return (
      <div>
      <div className='hero2'>
      <div className='h-100 d-flex align-items-center justify-content-center'>

      
      <div>
      <div className='container-sm'>
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
              <span className='pbar'>CSS</span><div className="progress-bar" role="progressbar" aria-label="CSS" style={{width: '85%'}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div>
            </div>
          </div>
          <div className="col-sm mt-3">
            <div className="progress">
              <span className='pbar'>NODE</span><div className="progress-bar" role="progressbar" aria-label="NODE" style={{width: '55%'}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">55%</div>
            </div>
          </div>
      </div>

      <p style={{margin: '40px'}}></p>
      <div className="row">
          <div className="col-sm mt-3">
            <div className="progress">
              <span className='pbar'>PHP</span><div className="progress-bar" role="progressbar" aria-label="PHP" style={{width: '85%'}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div>
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
    

      
      </div>
      </div>
      </div>
        
    )
}

export default Skills;