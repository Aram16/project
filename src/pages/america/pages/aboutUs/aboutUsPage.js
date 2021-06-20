import React from 'react';
import TextField from '../../components/aboutUs/textFiled';
import Partners from '../../components/aboutUs/partners';
import Footer from '../../components/footer';
import { fullText, shotText } from '../../constants/about';
import './aboutUsPage.css';
import Navbar from '../../components/navbar';

const AboutUsPage = () => {
    return (
        <div className="about">
            <Navbar />
            <h1 className="about-h1">ABOUT</h1>
            <TextField
                fullText={fullText} 
                className="about-p"    
            />
            <p className="partners">our partners</p> 
            <div className="partners-div">
                <Partners />
            </div>
            <Footer />
        </div>
    );
};
export default AboutUsPage;