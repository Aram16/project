import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/ket.png'
import './index.css';

const AboutNavbar = () => {
    return (
        <nav>
            <div className="navv">
                <input type="checkbox" id="nav-about" />
                <div className="nav-header">
                    <div className="nav-title">
                        <a href="#div">
                            <img src={logo}/>
                        </a>
                    </div>
                </div>
                <div className="ereq-ket">
                    <label for="nav-about">
                    <span></span>
                    <span></span>
                    <span></span>
                    </label>
                </div>

                <div className="navigation">
                        <a href="#about">Մեր մասին</a>
                        <a href="#news">Նորություններ</a>
                        <Link to="/am/events" className="Link"><a href="">Իրադարձություններ</a></Link>
                        <a href="#courses">Դասընթացներ</a>
                        <Link to="/am/contact" className="Link"><a href="">Կապ</a></Link>
                </div>
            </div>
        </nav>
    );
};

export default AboutNavbar;