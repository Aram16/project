import React from 'react';
import Partner from '../../components/about/partners';
import TextField from '../../components/about/textField';
import { fullText, shotText } from '../../constants/about';
import { useTranslation } from "react-i18next";
import AboutNavbar from './welcomeNavbar/welcomNavbar';

import './index.css';


const AboutPage = () => {
    const { t, i18n } = useTranslation();
    const onClick = (name) => {
        console.log(name);
        i18n.changeLanguage(name);
    };
    return (
        <div id="about">
            <AboutNavbar />
            <h1 className="about-h1">{t("About")}</h1>
            <TextField
                text={shotText} 
                className="about-p"    
            />
            <p className="partners">{t("partners")}</p> 
            <div>
                <Partner />
            </div>
            {/* <Footer /> */}
        </div>
    );
};
export default AboutPage;