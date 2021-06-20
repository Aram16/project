import React from 'react';
import './index.css'
import CoursesNavbar from './welcomeNavbar/welcomNavbar';
import { Link } from "react-router-dom";

const CoursesPage = () => {
    return(
        <div id="courses">
            <CoursesNavbar />
            <h1>COURSES </h1>
            <p>Learn and develop</p>
            <div className="cours-div">
                <div>
                    <Link to="/en/enginnerLaboratory" className="Link">
                        <h3>
                            ENGINNER LABORATORY
                        </h3>
                    </Link>
                </div>
                <div>
                    <Link to="/en/chessLaboratory" className="Link">
                        <h3>
                            CHESS LABORATORY
                        </h3>
                    </Link>
                </div>
            </div>
            <div className="cours-div">
                <div>
                    <Link to="/en/programmingLaboratory" className="Link">
                        <h3>
                            PROGRAMMING LABORATORY
                        </h3>
                    </Link>
                </div>
                <div>
                    <Link to="/en/mediaLaboratory" className="Link">
                        <h3>
                            MEDIA LABORATORY
                        </h3>
                    </Link>
                </div>
            </div>
            {/* <Footer/> */}
        </div>
    )
}

export default CoursesPage