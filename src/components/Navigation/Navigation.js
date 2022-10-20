import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Navigation.css';
import { Home, Activity, Archive, AtSign } from 'react-feather';

const Navigation = () => {
    return (
        <div id="header" className="d-flex flex-column justify-content-center">
                <nav id="navbar" className="navbar nav-menu">
                    <ul>
                        <li><a href="#home" className="nav-link scrollto active border border-info"><Home /> <span>Home</span></a>
                        </li>
                        <li><a href="#skills" className="nav-link scrollto border border-info"><Activity /> <span>Skills</span></a>
                        </li>
                        <li><a href="#portfolio" className="nav-link scrollto border border-info"><Archive /> <span>Portfolio</span></a>
                        </li>
                        <li><a href="#contact" className="nav-link scrollto border border-info"><AtSign /> <span>Contact</span></a>
                        </li>
                    </ul>
                </nav>
            </div>
        
    )
}

export default Navigation;