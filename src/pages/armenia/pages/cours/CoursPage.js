import React from 'react';
import CourseCard from '../../components/cours/coursCard';
import Footer from '../../components/footer';
import Navbar from '../../../armenia/components/navbar/index';
import { Link } from "react-router-dom";
import './index.css'

const CoursPage = () => {
    return(
        <div className="courses">
            <Navbar />
            <h1>Դասընթացներ</h1>
            <p>Սովորել և զարգանալ</p>
            <div className="courses-root">
            <div className="cours-div">
                <div>
                    <Link to="/am/enginnerLaboratory" className="Link">
                        <h3>
                            Ինժեներական լաբորատորիա
                        </h3>
                    </Link>
                </div>
                <div>
                    <Link to="/am/chessLaboratory" className="Link">
                        <h3>
                            Շախմատի լաբորատորիա
                        </h3>
                    </Link>
                </div>
            </div>
            <div className="cours-div">
                <div>
                    <Link to="/am/programmingLaboratory" className="Link">
                        <h3>
                            Ծրագրավորման լաբորատորիա
                        </h3>
                    </Link>
                </div>
                <div>
                    <Link to="/am/mediaLaboratory" className="Link">
                        <h3>
                            Մեդիա լաբորատորիա
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