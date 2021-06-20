import React from 'react';
import TextField from '../../components/aboutUs/textFiled';
import Partners from '../../components/aboutUs/partners';
import Footer from '../../components/footer';
import { fullText, shotText } from '../../constants/about';
import './aboutUsPage.css';
import Navbar from '../../../armenia/components/navbar/index';

const AboutUsPage = () => {
    return (
        <div className="about">
            {/* <Navbar /> */}
            <Navbar />
            <h1 className="about-h1">Մեր մասին</h1>
            <TextField
                fullText={fullText} 
                className="about-p"    
            />
            <p className="partners">մեր գործընկերները</p> 
            <div className="partners-div">
                <Partners />
            </div>
            <Footer />
        </div>
    );
};
export default AboutUsPage;