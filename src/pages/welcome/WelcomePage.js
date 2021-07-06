import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/ket.png";
import armenia from "../../assets/logo/armenia.png";
import america from "../../assets/logo/america.png";
import big from "../../assets/logo/logop.png";
import AboutPage from "../about/AboutPage";
import CoursesPage from "../courses/CoursesPage";
import NewsPage from "../news/newsPage";
import "./index.css";
import { useTranslation } from "react-i18next";

const WelcomePage = () => {
  const { t, i18n } = useTranslation();
  const onClick = (name) => {
    console.log(name);
    i18n.changeLanguage(name);
  };

  return (
    <Suspense fallback="Loading...">
      <div id="div">
        <nav>
          <div className="navv">
            <input type="checkbox" id="nav-checkk" />
            <div className="nav-header">
              <div className="nav-title">
                <a>
                  <img src={logo} alt="ket" />
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
              <a href="#about">{t("About")}</a>
              <a href="#news">{t("News")}</a>
              <Link to="/events" className="Link">
              {t("Events")}
              </Link>
              <a href="#courses">{t("Courses")}</a>
              <Link to="/contact" className="Link">
              {t("Contact")}
              </Link>
              <div onClick={() => onClick("hy")} className="navigation-div">
                <img className="droosh" src={armenia} alt="armenia" />
              </div>
              <div onClick={() => onClick("en")} className="navigation-div">
                <img className="droosh" src={america} alt="english" />
              </div>
            </div>
          </div>
        </nav>
        <div className="ket">
          <img src={big} alt="ket" />
        </div>

        <img src={logo} className="workk" alt="ket" />

        <div className="work">
            <p>
            ՄՏԱԾԻՐ, ՍՏԵՂԾԻՐ, ԱՇԽԱՏԻՐ
            <br />
            <h3>ՄԻ ԼՔԻՐ ՔՈ ԲՆՕՐՐԱՆԸ</h3>
          </p>
        </div>
        {/* ABOUT US PAGE */}
        <AboutPage />
        {/* COURSES PAGE */}
        <CoursesPage />
        {/* NEWS PAGE */}
        <NewsPage />
      </div>
    </Suspense>
  );
};

export default WelcomePage;