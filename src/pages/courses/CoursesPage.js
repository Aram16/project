import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'
import CoursesNavbar from './welcomeNavbar/welcomNavbar';


const CoursesPage = () => {
    return(
        <div id="courses">
            <CoursesNavbar />
            <h1>COURSES </h1>
            <p>Learn and develop</p>
            <div className="cours-div">
                <div>
                    <Link to="/enginnerLaboratory" className="Link">
                        <h3>
                            ENGINNER LABORATORY
                        </h3>
                    </Link>
                    {/* <CourseCard laboratory/> */}
                </div>
                <div>
                    <Link to="/chessLaboratory" className="Link">
                        <h3>
                            CHESS LABORATORY
                        </h3>
                    </Link>
                </div>
            </div>
            <div className="cours-div">
                <div>
                    <Link to="/programmingLaboratory" className="Link">
                        <h3>
                            PROGRAMMING LABORATORY
                        </h3>
                    </Link>
                </div>
                <div>
                    <Link to="/mediaLaboratory" className="Link">
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