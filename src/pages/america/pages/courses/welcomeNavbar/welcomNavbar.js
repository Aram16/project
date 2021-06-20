import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/ket.png'
import './index.css';

const CoursesNavbar = () => {
    return (
        <nav>
            <div className="navv">
                <input type="checkbox" id="nav-courses" />
                <div className="nav-header">
                    <div className="nav-title">
                        <a href="#div">
                            <img src={logo}/>
                        </a>
                    </div>
                </div>
                <div className="ereq-ket">
                    <label for="nav-courses">
                    <span></span>
                    <span></span>
                    <span></span>
                    </label>
                </div>

                <div className="navigation">
                        <a href="#about">About</a>
                        <a href="#news">News</a>
                        <Link to="/en/events" className="Link"><a href="">Events</a></Link>
                        <a href="#courses">Courses</a>
                        <Link to="/en/contact" className="Link"><a href="">Contact</a></Link>
                </div>
            </div>
        </nav>
    );
};

export default CoursesNavbar;