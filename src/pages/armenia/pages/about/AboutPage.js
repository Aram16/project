import React from 'react';
import Partner from '../../components/about/partners';
import TextField from '../../components/about/textField';
import { fullText, shotText } from '../../constants/about';
import './index.css';
import AboutNavbar from './welcomeNavbar/welcomNavbar';

const AboutPage = () => {
    return (
        <div id="about">
            <AboutNavbar />
            <h1 className="about-h1">Մեր մասին</h1>
            <TextField
                text={shotText} 
                className="about-p"    
            />
            <p className="partners">մեր գործընկերները</p> 
            <div>
                <Partner />
            </div>
            {/* <Footer /> */}
        </div>
    );
};
export default AboutPage;