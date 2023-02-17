import React, { useEffect } from "react";
import { icons } from "../../config/config";
import useMostrar from "../../hook/useMostrar";
import useServices from "../../hook/useServices";

const NavBar = () => {
  const { handleClick,openLinkInNewWindow } = useMostrar();
  const {fullRedes,obtenerRedesSociales} = useServices()

  useEffect(() => {
    obtenerRedesSociales()
  }, [])
  return (
    <>
      <div className="border-0 w-full bg-black text-white relative sm:flex">
        <div className="sm:w-1/4">
          <div className="flex py-2 justify-center sm:justify-around">
            <p className="">M.P portfolio</p>
            <div className="flex gap-4 justify-end w-2/4 sm:hidden">
              {fullRedes&&fullRedes.map(({ img, link }, index) => (
                  <div key={index} className="" onClick={()=>openLinkInNewWindow(link)}>
                    <img className="w-6 h-6" src={img} alt="" />
                  </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex p-4 items-center justify-between sm:justify-around sm:w-1/3 xl:w-1/2  mx-6">
          <p
            className="text-xs hover:cursor-pointer "
            onClick={() => handleClick("portfolio")}
          >
            Proyectos
          </p>
          <p
            className="text-xs hover:cursor-pointer "
            onClick={() => handleClick("tecnologias")}
          >
            Tecnologias
          </p>
          <p
            className="text-xs hover:cursor-pointer "
            onClick={() => handleClick("sobremi")}
          >
            Sobre mi
          </p>
        </div>
        <div className="sm:flex gap-4 justify-center w-1/3 py-2 hidden ">
          {fullRedes&&fullRedes.map(({img,link}, index) => (
            <div  key={index} className="" onClick={()=>openLinkInNewWindow(link)}>
            <img  className="w-6 h-6" src={img} alt="" />
          </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavBar;
