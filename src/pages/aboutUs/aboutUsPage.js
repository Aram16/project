import React, { Suspense } from "react";
import TextField from "../../components/aboutUs/textFiled";
import Partners from "../../components/aboutUs/partners";
import Footer from "../../components/footer";
import { fullText, shotText } from "../../constants/about";
import { useTranslation } from "react-i18next";
import "./aboutUsPage.css";
import Navbar from "../../components/navbar";

const AboutUsPage = () => {
  const { t, i18n } = useTranslation();
  const onClick = (name) => {
    console.log(name);
    i18n.changeLanguage(name);
  };

  return (
    <Suspense fallback="Loading...">
      <div className="about">
        <Navbar id="navv-checkk" />
        <h1 className="about-h1">{t("About")}</h1>
        <TextField fullText={fullText} className="about-p" />
        <p className="partners">{t("partners")}</p>
        <div>
          <Partners />
        </div>
        <Footer />
      </div>
    </Suspense>
  );
};
export default AboutUsPage;
