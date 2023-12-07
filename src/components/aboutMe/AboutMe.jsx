import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import useServices from "../../hook/useServices";
import "./aboutMe.css";

const AboutMe = ({i18n}) => {

  const {obtenerSobreMi,fullSobreMi} = useServices()
  const {t} = useTranslation()

  

  useEffect(() => {
    obtenerSobreMi()
  }, [])
  
  return (
    <div className="bg-black text-white pl-4 lg:pl-24">
      <div className="bg-black  h-24 flex  items-center drop-shadow-xl">
        <h3
          className=" font-bold portfolioTitle text-left sm:pl-8 lg:pl-10"
          id="sobremi"
        >
          {t('sobreMi')}
        </h3>
      </div>
      <div className="flex flex-col items-center justify-center mt-4 xl:pr-14 2xl:pr-20 ">
        <div className="flex gap-4 flex-wrap relative  md:hidden">
          {fullSobreMi&&fullSobreMi.map(({ año, texto, text }, index) => (
            <div key={index} className="flex flex-wrap w-screen gap-4 sm:pl-8">
              <p className="w-8 mr-1">{año}</p>
              <div className="item-point w-3 z-20 "></div>

              <p className="w-52 text-left text-xs text-[#4f5257] story">
                {i18n.language==="es"?texto:text}
              </p>
            </div>
          ))}
          <div className="absolute border-2 opacity-80 h-96  left-14 sm:left-custom"></div>
          <div className="absolute border-2 opacity-80 h-2 top-96  left-14 sm:left-custom"></div>
        </div>
        <div className="hidden gap-4 relative md:flex">
          {fullSobreMi&&fullSobreMi.map(({ año, texto, text }, index) => (
            <div
              key={index}
              className="flex items-center md:pl-4 flex-wrap flex-col xl:pr-20"
            >
              <p className="">{año}</p>
                <div className="absolute border-2 opacity-80 w-custom top-8 w-customlg  left-24"></div>
              <div className="item-point w-3 z-20 ">
              </div>
              <p className="w-40 text-left text-[#4f5257] story pt-3 xl:text-left ">
                {i18n.language==="es"?texto&&texto&&año===2022?texto.slice(0, 288):texto:text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
