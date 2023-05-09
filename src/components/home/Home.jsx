import React, { useEffect } from "react";
import NavBar from "../navBar/NavBar";
import AboutMe from "../aboutMe/AboutMe";
import Portfolio from "../portfolio/Portfolio";
import "animate.css";
import Tecnologias from "../tecnologias/Tecnologias";
import "./home.css";
import ellipse14 from "../../assets/Ellipse-14.svg";
import withBg from "../../assets/black-white.png";
import Footer from "../footer/Footer";
import Button from "../../UI/Button";
import { useTranslation } from "react-i18next";
import useServices from "../../hook/useServices";
import Loading from "../../UI/Loading";

const Home = () => {
  const { i18n, t } = useTranslation();
  const { fullRedes, obtenerRedesSociales } = useServices();

  const downloadPDF = () => {
    const fileID = "1Swh4GJj9YLxVMa8qqd1qMi0LaqQWj6qV";
    const fileIDEnglish = "1SvDEFihHAe8rOsNvLDnFFhfcYk-OxwOg";
    const link = document.createElement("a");
    link.href = `https://drive.google.com/u/0/uc?id=${
      i18n.language === "es" ? fileID : fileIDEnglish
    }&export=download`;
    link.download = "CV Pividori Frontend.pdf";
    link.click();
  };
  const handleLanguageChange = () => {
    const newLanguage = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLanguage);
  };

  useEffect(() => {
    obtenerRedesSociales();
  }, []);
  if (fullRedes === "") {
    return <Loading />;
  } else {
    return (
      <div className="">
        <NavBar
          fullRedes={fullRedes}
          handleLanguageChange={handleLanguageChange}
        />
        <div className="drop-shadow-2xl bg-black text-white font-serif text-left flex flex-col pt-4 py-0 sm:items-center">
          <div className="animate__animated animate__fadeIn sm:animate__fadeInLeft py-4 px-10 sm:px-32 flex flex-col justify-center poppins ">
            <div className="flex flex-col justify-center sm:justify-start mt-4 sm:mt-10 sm:flex-row sm:flex-wrap md:flex-col md:gap-10 lg:pl-10">
              <div className="sm:z-20">
                <h3 className="title text-lg font-black sm:text-4xl">
                  {t("greeting")}
                </h3>
                <h3 className="text-white sm:text-3xl"> {t("jobTitle")}</h3>
              </div>
              <p className="text-xs text-gray-500 mt-2 sm:w-2/3 md:w-1/2 lg:w-1/3">
                {t("epigrafe")}
              </p>
              <div className="h-96 sm:h-58 md:h-56  z-50 lg:flex">
                <img
                  className="ellipse-14 md:hidden sm:top-20 md:left-130 "
                  src={ellipse14}
                  alt=""
                  srcset=""
                />
                <div className="absolute ellipse-15 rounded-full sm:left-135 sm:top-44 md:left-150 md:hidden"></div>

                <img
                  className="absolute cv border-2 border-r-cyan-400 border-l-violet-400 border-t-blue-400 border-b-blue-300 sm:left-120 sm:top-10 md:left-140 md:hidden"
                  src={withBg}
                  alt=""
                />
                <div className="absolute top-3/4 mt-8 sm:mt-0 right-26 sm:top-2/4 sm:left-32 md:top-96 lg:left-48 xl:left-80 xl:pl-6 2xl:left-1/4 2xl:pl-14 z-50 hover:cursor-pointer">
                  <Button
                    action={downloadPDF}
                    text={t("downloadCV")}
                    className={
                      "hover:border-white border-2 border-black btn-class mt-8 text-xs pb-8"
                    }
                  />
                </div>
                <div className="hidden md:flex pl-10 md:left-2/4 lg:left-auto">
                  <div className="w-96 h-96 circleTest border border-r-cyan-400 border-l-violet-400 border-t-blue-400 border-b-blue-300 ellipse-14lg"></div>
                  <div className="hidden ellipse-15lg rounded-full md:flex"></div>
                  <img
                    className="hidden cvlg border-2 border-r-cyan-400 border-l-violet-400 border-t-blue-400 border-b-blue-300 md:flex md:left-2/4 lg:left-auto"
                    src={withBg}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Portfolio i18n={i18n} />
        <Tecnologias />
        <AboutMe i18n={i18n} />
        <Footer />
      </div>
    );
  }
};

export default Home;
