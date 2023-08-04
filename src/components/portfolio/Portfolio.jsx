import React, { useEffect } from "react";
import Projecto from "../projecto/Projecto";
import "animate.css";
import "./portfolio.css";
import useServices from "../../hook/useServices";
import { useTranslation } from "react-i18next";
import { orderElements } from "../../helper";

const Portfolio = ({i18n}) => {
  const { obtenerProyectos, fullProyectos } = useServices();
  const { t } = useTranslation();

  useEffect(() => {
    obtenerProyectos();
  }, []);

  return (
    <div className="animate__animated animate__fadeIn sm:animate__fadeInUp bg-black pr-2 md:pt-8">
      <div className="h-24 flex items-center drop-shadow-xl px-4">
        <h3
          className="widest font-bold text-white  portfolioTitle sm:pl-9 lg:pl-32 "
          id="portfolio"
        >
          {t('proyectos')}
        </h3>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col gap-10 sm:flex-row items-center justify-center flex-wrap">
          {fullProyectos &&
            orderElements(fullProyectos).map(
              ({ name, descripcion, img, tecnologias, url, github,descript,
              order }) => (
                <Projecto
                  url={url}
                  key={name}
                  name={name}
                  descripcion={i18n.language==="es"?descripcion:descript}
                  img={img}
                  tecnologias={tecnologias}
                  github={github}
                  order={order}
                />
              )
            )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
