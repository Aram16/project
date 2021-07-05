import React, {Suspense} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/ket.png';
import armenia from '../../assets/logo/armenia.png';
import america from '../../assets/logo/america.png';
import big from '../../assets/logo/logop.png'
import AboutPage from '../about/AboutPage';
import CoursesPage from '../courses/CoursesPage';
import NewsPage from '../news/newsPage';
import './index.css'
import i18n from "i18next";
import { useTranslation, initReactI18next, Trans } from "react-i18next";

const translationsEn = {
  welcome: "Welcome!",
};

const translationsFr = {
  welcome: "Bienvenue!",
};
const translationsAm = {
  welcome: "Hello Armenia!",
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: translationsEn },
      fr: { translation: translationsFr },
      am: { translation: translationsAm },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

  

const WelcomePage = () => {

    const { t } = useTranslation();
  // const [count, setCount] = useState(0);
  const onChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };
    
    return(
        <Suspense fallback="Loading...">
        <div id="div">
            <nav>
            <div className="navv">
                <input type="checkbox" id="nav-checkk" />
                <div className="nav-header">
                    <div className="nav-title">
                        <a>
                            <img src={logo} alt="ket"/>
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
                        <a href="#about">{t("welcome")}</a>
                        <a href="#news">News</a>
                        <Link to="/events" className="Link">Events</Link>
                        <a href="#courses">Courses</a>
                        <Link to="/contact" className="Link">Contact</Link>
                        <Link  >
                            <div name="language" onChange={()=> onChange('hy')}>
                                <img value="am"  className="droosh" src={armenia} />
                            </div>
                        </Link>
                            <div value="en" name="language" onClick={onChange}>
                                <img className="droosh" src={america} />
                            </div>
                        {/* <button name="language" onClick={onChange} value="am">hay</button> */}
                        {/* <button name="language" onClick={onChange} value="en">eng</button> */}
                        {/* <Link to={'/en'}><img className="droosh" src={america} /></Link> */}
                </div>
            </div>
        </nav>
            <div className="ket">
                <img src={big} alt="ket"/>
            </div>
  
            <img src={logo} className="workk" alt="ket"/>

            <div className="work">
                <p>ՄՏԱԾԻՐ, ՍՏԵՂԾԻՐ, ԱՇԽԱՏԻՐ<br/><h3>ՄԻ ԼՔԻՐ ՔՈ ԲՆՕՐՐԱՆԸ</h3></p>
            </div>
            {/* ABOUT US PAGE */}
            <AboutPage />
            {/* COURSES PAGE */}
            <CoursesPage />
            {/* NEWS PAGE */}
            <NewsPage />
        </div>
        </Suspense>
    )
}

export default WelcomePage