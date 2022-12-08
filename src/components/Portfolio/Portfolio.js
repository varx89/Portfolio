import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import portfolio_img from '../../assets/images/portfolio.png';
import facerecon_img from '../../assets/images/facerecon.png';
import robofriends_img from '../../assets/images/robofriends.png';
import api_img from '../../assets/images/api.png';
import realtor_img from '../../assets/images/realtor.jpg';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import './Portfolio.css';

const Portfolio = () => {
    return (
      <div className='flex mt-5'>
      <AnimationOnScroll animateIn="animate__fadeInUp"> 
      <div className='container'>
        <div className='row col-sm mb-5'>
          <div className="portfolio-title">
              <h2>Portfolio</h2>
          </div>
        </div>
      
      </div>

        <div id="gallery">
          <div className="container">
            <div className="row">

            <div className="col-lg-4 mb-4">
            <div className="card">
              <img src={realtor_img} alt="Real Estate" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Real Estate Website</h5>
                <p className="card-text"></p>
                <a href="https://github.com/varx89/real-estate-website" className="btn btn-outline-primary btn-sm">GitHUB</a> &nbsp;
                <a href="https://http://real-estate-website-nine.vercel.app" className="btn btn-outline-primary btn-sm">URL</a>
              </div>
            </div>
            </div>

            <div className="col-lg-4 mb-4">
            <div className="card">
              <img src={portfolio_img} alt="PortFolio" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Portfolio</h5>
                <p className="card-text"></p>
                <a href="https://github.com/varx89/Portfolio" className="btn btn-outline-primary btn-sm">GitHUB</a> &nbsp;
                <a href="https://drey-portfolio.netlify.app/" className="btn btn-outline-primary btn-sm">URL</a>
              </div>
            </div>
            </div>
            
          <div className="col-lg-4 mb-4">
          <div className="card">
              <img src={facerecon_img} alt="" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">FaceRecognition Frontend</h5>
                <p className="card-text"></p>
                <a href="https://github.com/varx89/facerecognitionbrain" className="btn btn-outline-primary btn-sm">GitHUB</a> &nbsp;
                <a href="https://loquacious-zuccutto-dafa32.netlify.app/" className="btn btn-outline-primary btn-sm">URL</a>
              </div>
              </div>
            </div>

            <div className="col-lg-4 mb-4">
            <div className="card">
              <img src={api_img} alt="" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">FaceRecognition Api</h5>
                <p className="card-text"></p>
                <a href="https://github.com/varx89/facerecognitionbrain-api" className="btn btn-outline-primary btn-sm">GitHUB</a> &nbsp;
                <a href="https://rocky-bayou-01851.herokuapp.com/" className="btn btn-outline-primary btn-sm">URL</a>
              </div>
            </div>
            </div>
            
            <div className="col-lg-4 mb-4">
            <div className="card">
              <img src={robofriends_img} alt="" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Robofriends</h5>
                <p className="card-text"></p>
                <a href="https://github.com/varx89/Robofriends" className="btn btn-outline-primary btn-sm">GitHUB</a> &nbsp;
                <a href="https://varx89.github.io/Robofriends/" className="btn btn-outline-primary btn-sm">URL</a>
              </div>
            </div>
            </div>
          </div>
        </div>
        </div>
        </AnimationOnScroll>
      </div>
        
    )
}

export default Portfolio;