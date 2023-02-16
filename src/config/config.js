import bali from "../assets/bali.png";
import batatapiv from "../assets/batatapiv.png";
import banderas from "../assets/banderas.png"; 
import mercadopivo from "../assets/mercadopivo.png";
import paperRockScissors  from "../assets/paperRockScissors.png";
import passgenerator from "../assets/passgenerator.png" 
import tipCalculator from "../assets/tipCalcu.png"
import yugiOh from "../assets/yu-gi-oh.png"
import ninjamail from "../assets/ninjamail.png"
import tictactoe from "../assets/tic-tac-toe.png"
import github from "../assets/github-logo.png"
import linkedin from  "../assets/Linkedin.png"
import mail from "../assets/email.png"

export const icons = [{img:linkedin,link:"https://www.linkedin.com/in/mariano-pividori-5680a051/"},{img:github,link:"https://github.com/Marianopiv"}]

export const projects = [
  {
    name: "Generador de Contraseñas",
    img: passgenerator,
    descripcion: "Esta aplicación me brindó la oportunidad de mejorar habilidades en la manipulación de arrays. También fue desafiante a la hora del armado de la arquitectura  y la práctica de migrar el código de Javascript a TypeScript. ",
    tecnologias: "HTML,CSS,TYPESCRIPT,REACT,TAILWIND",
    url: "https://password-generator-tsx-6adi.vercel.app/",
    github:"https://github.com/Marianopiv/password-generator-tsx"
  },
  {
    name: "Tip Calculator",
    img: tipCalculator,
    descripcion: "Exploré tipos de datos en TypeScript y manejo de errores en esta aplicación. También me enfrenté al desafío de entender el método onBlur en Javascript.",
    tecnologias: "HTML,CSS,TYPESCRIPT,REACT,TAILWIND",
    url: "https://tip-calculator-typescript.vercel.app/",
    github:"https://github.com/Marianopiv/tip-calculator-typescript"
  },
  {
    name: "Yu Gi Oh Enciclopedia",
    img: yugiOh,
    descripcion: "Aplicación con la cual pude explorar distintas alternativas ofrecidas por la API, logrando mostrar y filtrar a mi gusto, y utilizando las opciones de paginado necesarias para poder mostrar los elementos",
    tecnologias: "HTML,CSS,JAVASCRIPT,REACT,TAILWIND",
    url: "https://yu-gi-oh-iota.vercel.app/",
    github:"https://github.com/Marianopiv/yu-gi-oh"
  },
  {
    name: "Tic Tac Toe",
    img: tictactoe,
    descripcion: "Juego que resulto un gran desafío armar, desde la logica a la hora de que juegue el contrincante, hasta poder perfeccionar la interaccion con Firebase y su guardado en la base de datos.",
    tecnologias: "HTML,CSS,JAVASCRIPT,REACT,TAILWIND",
    url: "https://tic-tac-3v6xj1z42-marianopiv.vercel.app/",
    github:"https://github.com/Marianopiv/tic-tac-toe"
  },
  {
    name: "Piedra Papel o Tijera!",
    img: paperRockScissors,
    descripcion: "Esta fue una de mis primeras aplicaciones complejas con TypeScript, y me desafió a pensar en cómo armar una arquitectura sólida y hacer que mi oponente (el PC) pudiera jugar en cada turno.",
    tecnologias: "HTML,TYPESCRIPT,REACT,TAILWIND,FIREBASE",
    url: "https://paper-rock-typescript.vercel.app/",
    github:"https://github.com/Marianopiv/paper-rock-typescript"
  },
  {
    name: "Banderas",
    img: banderas,
    descripcion: "Esta aplicación me permitió practicar la manipulación de datos a través de una API, y tuve la oportunidad de añadirle un modo oscuro.",
    tecnologias: "HTML,CSS,JAVSCRIPT,REACT,TAILWIND",
    url: "https://banderas-woad.vercel.app/",
    github:"https://github.com/Marianopiv/banderas"
  },
  {
    name: "Mercado Pivo",
    img: mercadopivo,
    descripcion: "Disfruté mucho trabajando en esta aplicación, ya que me permitió introducirme en el uso de Context, React Router Dom y el mapeo de arrays con objetos.",
    tecnologias: "HTML,CSS,JAVASCRIPT,REACT,TAILWIND",
    url: "https://mercadopiv.vercel.app/",
    github:"https://github.com/Marianopiv/mercadopiv"
  },
    {
      name: "BatataPiv",
      img: batatapiv,
      descripcion: "Este proyecto fue una oportunidad para profundizar mis conocimientos en HTML y CSS, y resultó ser uno de mis primeros proyectos largos en estas tecnologías.",
      tecnologias: "HTML y CSS",
      url: "https://batatapiv.vercel.app/",
      github:"https://github.com/Marianopiv/batatapiv"
    },
    {
      name: "Ninja Mail",
      img: ninjamail,
      descripcion: "Proyecto introduccion a boostrap el cual me ayudó a entender mucho el valor de los frameworks y librerias y su potencial para poder crear proyectos a mayor escala y el desarrollo responsive",
      tecnologias: "HTML CSS Y BOOSTRAP",
      url: "https://ninja-mail-kappa.vercel.app/",
      github:"https://github.com/Marianopiv/ninja-mail"
    },
    {
      name: "Escape a Bali",
      img: bali,
      descripcion: "Este proyecto me ayudó a comprender mejor cómo funciona Bootstrap y a desarrollar habilidades en el diseño responsivo y el uso de gradientes de colores.",
      tecnologias: "HTML,CSS,BOOSTRAP",
      url: "https://bali-boostrap.vercel.app/",
      github:"https://github.com/Marianopiv/bali-boostrap"
    },
  ]

export const tecnologias = ["HTML", "CSS", "JavaScript", "React", "TypeScript JSX", "Figma", "Git y Github", "Sass", "Tailwind CSS", "Bootstrap", "Firebase"]

export const sobreMi = [{año:"2011",logro:"Obtuve el First Certificate in English de Cambridge"},{año:"2016",logro:"Comencé a trabajar en facturacion, entrada de datos y asistencia a clientes anngloparlantes en Premys Car SRL."},{año:"2018",logro:"Me recibí de abogado en UBA."},{año:"2021",logro:"Mi curiosidad intelectual y mi deseo de alcanzar nuevos objetivos laborales me llevaron a explorar el mundo de la programación en 2021, comenzando mi formacion en Platzi de manera autodidácta."},{año:"2022",logro:"Continué mi desarrollo junto a Hovhannes Petrosyan, un Senior Developer que ha sido mi mentor desde entonces. Aproveché al máximo esta oportunidad para profundizar mis conocimientos en el Desarrollo Web Frontend y poner a prueba mis habilidades en diferentes proyectos. Al final del año, incluso tuve la oportunidad de tomar parte en el reto Skill UP de Alkemy junto con dos colegas."}]