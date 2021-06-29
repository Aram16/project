import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/ket.png'
import './index.css';

const NewsNavbar = () => {
    return (
        <nav>
            <div className="navv">
                <input type="checkbox" id="nav-news" />
                <div className="nav-header">
                    <div className="nav-title">
                        <a href="#div">
                            <img src={logo}/>
                        </a>
                    </div>
                </div>
                <div className="ereq-ket">
                    <label for="nav-news">
                    <span></span>
                    <span></span>
                    <span></span>
                    </label>
                </div>

                <div className="navigation">
                        <a href="#about">About</a>
                        <a href="#news">News</a>
                        <Link to="/events" className="Link">Events</Link>
                        <a href="#courses">Courses</a>
                        <Link to="/contact" className="Link">Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default NewsNavbar;