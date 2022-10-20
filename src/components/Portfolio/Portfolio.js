import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';


import './Portfolio.css';

const Portfolio = () => {
    return (
      <div>
      <div className='container'>
      <div className="section-title">
          <h2>Portfolio</h2>
      </div>
      </div>
      
        <div id="gallery">
          <div className="container">
            <div className="row">
            <div className="col-lg-4 mb-4">
            <div className="card">
              <img src="https://images.unsplash.com/photo-1477862096227-3a1bb3b08330?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" alt="" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Portfolio</h5>
                <p className="card-text"></p>
                <a href="" className="btn btn-outline-primary btn-sm">URL</a> &nbsp;
                <a href="" className="btn btn-outline-primary btn-sm">GitHUB</a>
              </div>
            </div>
            </div>
          <div className="col-lg-4 mb-4">
          <div className="card">
              <img src="https://images.unsplash.com/photo-1516214104703-d870798883c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60" alt="" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">FaceRecognition Frontend</h5>
                <p className="card-text"></p>
                <a href="" className="btn btn-outline-primary btn-sm">URL</a> &nbsp;
                <a href="" className="btn btn-outline-primary btn-sm">GitHUB</a>
              </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
            <div className="card">
              <img src="https://images.unsplash.com/photo-1477862096227-3a1bb3b08330?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" alt="" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">FaceRecognition Api</h5>
                <p className="card-text"></p>
                <a href="" className="btn btn-outline-primary btn-sm">URL</a> &nbsp;
                <a href="" className="btn btn-outline-primary btn-sm">GitHUB</a>
              </div>
            </div>
            </div>
          </div>
        </div>
        </div>
      </div>
        
    )
}

export default Portfolio;