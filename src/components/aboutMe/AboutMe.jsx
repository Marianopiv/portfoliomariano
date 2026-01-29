import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import useServices from "../../hook/useServices";
import "./aboutMe.css";

const AboutMe = ({ i18n }) => {
  const { obtenerSobreMi, fullSobreMi } = useServices();
  const { t } = useTranslation();
  const timelineCount = fullSobreMi?.length ?? 5;
  const lineInset = `calc((100% - 3rem) / ${timelineCount} / 2 + 1.5rem)`;

  useEffect(() => {
    obtenerSobreMi();
  }, [obtenerSobreMi]);

  return (
    <div className="section-block reveal bg-black text-white pl-4 lg:pl-24">
      <div className="bg-black  h-24 flex  items-center drop-shadow-xl">
        <h3
          className=" font-bold portfolioTitle text-left sm:pl-8 lg:pl-10"
          id="sobremi"
        >
          {t("sobreMi")}
        </h3>
      </div>
      <div className="flex flex-col items-center justify-center mt-4 xl:pr-14 2xl:pr-20 ">
        <div className="flex gap-4 flex-wrap relative lg:hidden">
          {fullSobreMi === null
            ? Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="flex flex-wrap w-screen gap-4 sm:pl-8">
                  <div className="skeleton-line skeleton-line--year"></div>
                  <div className="item-point w-3 z-20 "></div>
                  <div className="skeleton-line skeleton-line--story"></div>
                </div>
              ))
            : fullSobreMi &&
              fullSobreMi.map(({ aAño, texto, text }, index) => (
                <div key={index} className="flex flex-wrap w-screen gap-4 sm:pl-8">
                  <p className="w-8 mr-1">{aAño ?? ""}</p>
                  <div className="item-point w-3 z-20 "></div>

                  <p className="w-52 text-left text-xs text-[#4f5257] story">
                    {i18n.language === "es" ? texto : text}
                  </p>
                </div>
              ))}
          <div className="timeline-line timeline-line--vertical absolute border-2 opacity-80 left-14 sm:left-custom top-4 bottom-4"></div>
          <div className="timeline-line timeline-line--cap absolute border-2 opacity-80 h-2 left-14 sm:left-custom bottom-4"></div>
        </div>
        <div className="hidden gap-4 relative lg:flex lg:w-full lg:justify-between lg:gap-0 lg:px-6">
          {fullSobreMi === null
            ? Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={index}
                  className="flex items-center md:pl-4 flex-wrap flex-col xl:pr-20 lg:flex-1 lg:min-w-0 lg:pl-0 lg:pr-0 xl:pr-0"
                >
                  <div className="skeleton-line skeleton-line--year"></div>
                  <div className="item-point w-3 z-20 "></div>
                  <div className="skeleton-line skeleton-line--story"></div>
                </div>
              ))
            : fullSobreMi &&
              fullSobreMi.map(({ aAño, texto, text }, index) => (
                <div
                  key={index}
                  className="flex items-center md:pl-4 flex-wrap flex-col xl:pr-20 lg:flex-1 lg:min-w-0 lg:pl-0 lg:pr-0 xl:pr-0"
                >
                  <p className="">{aAño ?? ""}</p>
                  <div className="item-point w-3 z-20 "></div>
                  <p className="w-40 text-left text-[#4f5257] story pt-3 xl:text-left ">
                    {i18n.language === "es"
                      ? texto && texto && aAño === 2022
                        ? texto.slice(0, 400)
                        : texto
                      : text}
                  </p>
                </div>
              ))}
          <div
            className="timeline-line timeline-line--horizontal absolute border-2 opacity-80 top-8"
            style={{ left: lineInset, right: lineInset }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
