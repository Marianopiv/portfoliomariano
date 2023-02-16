import { collection, getDocs } from "firebase/firestore";
import React, { useEffect } from "react";
import { tecnologias } from "../../config/config";
import { db } from "../../FireBase";
import useServices from "../../hook/useServices";
import "./tecnologias.css"

const Tecnologias = () => {
  const {obtenerHabilidades,fullHabilidades} = useServices()

  

  useEffect(() => {
    obtenerHabilidades()
  }, [])
  
  return (
    <div className="bg-black pt-4 pl-2 sm:pl-9 lg:flex lg:flex-col lg justify-between lg:pl-32  lg:w-screen">
      <div className=" text-white pb-4 px-2">
        <h3
          className=" font-bold text-white  portfolioTitle"
          id="tecnologias"
        >
          Tecnologias
        </h3>
      </div>
      <div className="flex flex-wrap  items-center text-white text-left pl-2 xl:pl-20 2xl:pl-28">
        {fullHabilidades&&fullHabilidades.map(({id,habilidad}) => (
          <div key={id} className="flex items-center gap-2 w-1/2 sm:w-1/3 pb-2">
            <div className="item-point w-3"></div>
            <p className="w-22 h-30">{habilidad}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tecnologias;
