import React from 'react';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import { Link } from "react-router-dom";
import './index.css'

const CoursPage = () => {
    return(
        <div className="courses">
            <Navbar />
            <h1>COURSES </h1>
            <p>Learn and develop</p>
            <div className="cours">
            <div className="cours-div">
                <div>
                    <Link to="/enginnerLaboratory" className="Link">
                        <h3>
                            ENGINNER LABORATORY
                        </h3>
                    </Link>
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
            </div>
            <Footer/>
        </div>
    )
}

export default CoursPage