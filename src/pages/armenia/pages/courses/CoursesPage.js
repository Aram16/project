import React from 'react';
import './index.css'
import CoursesNavbar from './welcomeNavbar/welcomNavbar';
import { Link } from "react-router-dom";

const CoursesPage = () => {
    return(
        <div id="courses">
            <CoursesNavbar />
            <h1>Դասընթացներ </h1>
            <p>Սովորել և զարգանալ</p>
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
            {/* <Footer/> */}
        </div>
    )
}

export default CoursesPage