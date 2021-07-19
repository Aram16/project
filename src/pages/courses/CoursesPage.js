import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar';
import { useTranslation } from "react-i18next";
import './index.css'


const CoursesPage = () => {
    const { t, i18n } = useTranslation();
    const onClick = (name) => {
        console.log(name);
        i18n.changeLanguage(name);
    };

    return(
        <div id="courses">
            <Navbar id="nav-courses" />
            <h1>{t("Courses")} </h1>
            <p>{t("learn")}</p>
            <div className="cours-div">
                <div>
                    <Link to="/enginnerLaboratory" className="Link">
                        <h3>
                        {t("enginner")} 
                        </h3>
                    </Link>
                </div>
                <div>
                    <Link to="/chessLaboratory" className="Link">
                        <h3>
                        {t("chess")} 
                        </h3>
                    </Link>
                </div>
            </div>
            <div className="cours-div">
                <div>
                    <Link to="/programmingLaboratory" className="Link">
                        <h3>
                        {t("programming")} 
                        </h3>
                    </Link>
                </div>
                <div>
                    <Link to="/mediaLaboratory" className="Link">
                        <h3>
                        {t("media")} 
                        </h3>
                    </Link>
                </div>
            </div>
            {/* <Footer/> */}
        </div>
    )
}

export default CoursesPage