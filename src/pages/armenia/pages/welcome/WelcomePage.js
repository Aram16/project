import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/ket.png';
import armenia from '../../assets/logo/armenia.png';
import america from '../../assets/logo/america.png';
import big from '../../assets/logo/logop.png'
import './index.css'
import AboutPage from '../about/AboutPage';
import CoursesPage from '../courses/CoursesPage';
import NewsPage from '../news/newsPage';


const WelcomePage = () => {

    return (
        <div id="div">
            <nav>
            <div className="navv">
                <input type="checkbox" id="nav-checkk" />
                <div className="nav-header">
                    <div className="nav-title">
                        <a>
                            <img src={logo}/>
                        </a>
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
                        <a href="#about">Մեր մասին</a>
                        <a href="#news">Նորություններ</a>
                        <Link to="/am/events" className="Link"><a href="">Իրադարձություններ</a></Link>
                        <a href="#courses">Դասընթացներ</a>
                        <Link to="/am/contact" className="Link"><a href="">Կապ</a></Link>
                        <Link to={'/am'}><a href=""><img className="droosh" src={armenia} /></a></Link>
                        <Link to={'/en'}><a href=""><img className="droosh" src={america} /></a></Link>
                </div>
            </div>
        </nav>
            <div className="ket">
                <img src={big} />
            </div>
  
            <img src={logo} className="workk"/>

            <div className="work">
                <p>ՄՏԱԾԻՐ, ՍՏԵՂԾԻՐ, ԱՇԽԱՏԻՐ<br/><h3>ՄԻ ԼՔԻՐ ՔՈ ԲՆՕՐՐԱՆԸ</h3></p>
            </div>
            {/* ABOUT PAGE */}
            <AboutPage />
            {/* COURSES PAGE */}
            <CoursesPage />
            {/* NEWS PAGE */}
            <NewsPage />
        </div>
    )
}

export default WelcomePage