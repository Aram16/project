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
                        <Link to="/aboutUs" className="Link"><a>About</a></Link>
                        <Link to="/allNews" className="Link"><a>News</a></Link>
                        <Link to="/events" className="Link"><a>Events</a></Link>
                        <Link to="/courses" className="Link"><a>Courses</a></Link>
                        <Link to="/contact" className="Link"><a>Contact</a></Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;