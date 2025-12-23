import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import translate from "../../assets/translate.png"
import useMostrar from "../../hook/useMostrar";
import useServices from "../../hook/useServices";

const Footer = () => {
  const {openLinkInNewWindow} = useMostrar()
  const {fullRedes,obtenerRedesSociales} = useServices()
  const {t} = useTranslation()

  useEffect(() => {
    obtenerRedesSociales()
  }, [])
  return (
    <div className="footer-shell reveal flex flex-col gap-2 pb-4 sm:pl-9 lg:pl-28 xl:pl-32">
    <div className="flex px-4 pt-10 items-center">
      <h3 className="title text-sm text-left">
        {t('contactame')}
      </h3>
      <div className="flex gap-4 justify-center w-2/4 lg:justify-end lg:gap-4 lg:ml-24">
        {fullRedes&&fullRedes.map(({img,link}, index) => (
         <div  key={index} className="hover:cursor-pointer" onClick={()=>openLinkInNewWindow(link)}>
         <img  className="social-icon w-6 h-6" src={img} alt="" />
       </div>
        ))}
      </div>
    </div>
      <h3 className="text-sm text-white text-left px-4 ">marianopividori93@gmail.com</h3>
    </div>
  );
};

export default Footer;
