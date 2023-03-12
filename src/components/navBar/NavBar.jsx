import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import translate from "../../assets/translate.png";
import useMostrar from "../../hook/useMostrar";
import useServices from "../../hook/useServices";

const NavBar = ({ handleLanguageChange, fullRedes }) => {
  const { handleClick, openLinkInNewWindow } = useMostrar();

  

  const { t } = useTranslation();

  return (
    <>
      <div className="border-0 w-full bg-black text-white relative sm:flex">
        <div className="sm:w-1/4">
          <div className="flex py-2 justify-center sm:justify-around">
            <p className="">M.P portfolio</p>
            <div className="flex gap-4 justify-end w-2/4 sm:hidden">
              {fullRedes &&
                fullRedes.map(({ img, link }, index) => (
                  <div
                    key={index}
                    className=""
                    onClick={() => openLinkInNewWindow(link)}
                  >
                    <img className="w-6 h-6" src={img} alt="" />
                  </div>
                ))}
              <img
                onClick={handleLanguageChange}
                className="w-6 h-6 hover:cursor-pointer"
                src={translate}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex p-4 items-center justify-between sm:justify-around sm:w-1/3 xl:w-1/2  mx-6">
          <p
            className="text-xs hover:cursor-pointer "
            onClick={() => handleClick("portfolio")}
          >
            {t("proyectos")}
          </p>
          <p
            className="text-xs hover:cursor-pointer "
            onClick={() => handleClick("tecnologias")}
          >
            {t("tech")}
          </p>
          <p
            className="text-xs hover:cursor-pointer "
            onClick={() => handleClick("sobremi")}
          >
            {t("sobreMi")}
          </p>
        </div>
        <div className="sm:flex gap-4 justify-center w-1/3 py-2 hidden ">
          {fullRedes &&
            fullRedes.map(({ img, link }, index) => (
              <div
                key={index}
                className="hover:cursor-pointer"
                onClick={() => openLinkInNewWindow(link)}
              >
                <img className="w-6 h-6" src={img} alt="" />
              </div>
            ))}
          <img
            onClick={handleLanguageChange}
            className="w-6 h-6 hover:cursor-pointer"
            src={translate}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default NavBar;
