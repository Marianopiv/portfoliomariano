import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "es",
  fallbackLng: "en",

  resources: {
    es: {
      translation: {
        proyectos: "Proyectos",
        tech: "Tecnologias",
        sobreMi: "Sobre mi",
        greeting: "Hola, soy Mariano,",
        jobTitle: "desarrollador frontend",
        epigrafe:
          "Comprometido con la formación continua y la resolución de problemas concretos a través de mis habilidades en el campo de la programación.",
        downloadCV: "Descargar CV",
        liveDemo: "Demo en vivo",
        contactame: "Contactame para cualquier propuesta o consulta",
        
      },
    },
    en: {
      translation: {
        proyectos: "Projects",
        tech: "Technologies",
        sobreMi: "About Me",
        greeting: "Hi, I'm Mariano,",
        jobTitle: "frontend developer",
        epigrafe:
          "Compromised to continuous learning, in order to take complex challenges and create innovative solutions in the field of software development.",
        downloadCV: "Download CV",
        liveDemo: "Live Demo",
        contactame: "Contact me for any question or proposal",
      },
    },
  },
});

export default i18n;
