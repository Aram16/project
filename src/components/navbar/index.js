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
                        <Link to="/">
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
                        <Link to="/aboutUs" className="Link">About</Link>
                        <Link to="/allNews" className="Link">News</Link>
                        <Link to="/events" className="Link">Events</Link>
                        <Link to="/courses" className="Link">Courses</Link>
                        <Link to="/contact" className="Link">Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;