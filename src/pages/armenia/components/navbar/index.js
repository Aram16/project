import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/ket.png';
import './index.css';

const Navbar = () => {
    return (
        <nav>
            <div className="navv">
                <input type="checkbox" id="nav-checkk" />
                <div className="nav-header">
                    <div className="nav-title">
                        <Link to="/am">
                            <a>
                                <img src={logo}/>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="ereq-ket">
                    <label for="nav-checkk">
                    <span></span>
                    <span></span>
                    <span></span>
                    </label>
                </div>

                <div className="navigation">
                        <Link to="/am/aboutUs" className="Link"><a href="">Մեր մասին</a></Link>
                        <Link to="/am/allNews" className="Link"><a href="">Նորություններ</a></Link>
                        <Link to="/am/events" className="Link"><a href="">Իրադարձություններ</a></Link>
                        <Link to="/am/courses" className="Link"><a href="">Դասընթացներ</a></Link>
                        <Link to="/am/contact" className="Link"><a href="">Կապ</a></Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;