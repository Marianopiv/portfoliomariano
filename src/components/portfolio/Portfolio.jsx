import React, { useEffect } from "react";
import { projects } from "../../config/config";
import useMostrar from "../../hook/useMostrar";
import Button from "../../UI/Button";
import Projecto from "../projecto/Projecto";
import "animate.css";
import "./portfolio.css";
import useServices from "../../hook/useServices";

const Portfolio = () => {
  const {obtenerProyectos,fullProyectos} = useServices()

  

  useEffect(() => {
    obtenerProyectos()
  }, [])
  

  return (
    <div className="animate__animated animate__fadeIn sm:animate__fadeInUp bg-black pr-2">
      <div className="h-24 flex items-center drop-shadow-xl px-4">
        <h3
          className="widest font-bold text-white  portfolioTitle sm:pl-9 lg:pl-32 "
          id="portfolio"
        >
          Proyectos
        </h3>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col gap-10 sm:flex-row items-center justify-center flex-wrap">
          {fullProyectos&&fullProyectos.map(({ name, descripcion, img, tecnologias, url,github }) => (
            <Projecto
              url={url}
              key={name}
              name={name}
              descripcion={descripcion}
              img={img}
              tecnologias={tecnologias}
              github={github}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
