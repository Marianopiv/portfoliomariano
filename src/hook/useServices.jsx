import { collection, getDocs } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../FireBase";

const useServices = () => {
  const [fullHabilidades, setFullHabilidades] = useState("");
  const [fullProyectos, setFullProyectos] = useState("");
  const [fullRedes, setFullRedes] = useState("");
  const [fullSobreMi, setFullSobreMi] = useState("");

  const obtenerHabilidades = async () => {
    const usus = await getDocs(collection(db, `habilidades`));
    console.log(usus.docs);
    const resultado = usus.docs.map((doc) => ({
      id: doc.id,
      habilidad: doc.data().habilidad,
    }));
    console.log(resultado);
    setFullHabilidades(resultado);
    setFullHabilidades(resultado.sort((a, b) => a - b))
  };

  const obtenerProyectos = async () => {
    const usus = await getDocs(collection(db, `proyectos`));
    console.log(usus.docs);
    const resultado = usus.docs.map((doc) => ({
      id: doc.id,
      descripcion: doc.data().descripcion,
      github: doc.data().github,
      img: doc.data().img,
      name: doc.data().name,
      tecnologias: doc.data().tecnologias,
      url: doc.data().url,
    }));
    console.log(resultado);
    setFullProyectos(resultado);
  };

  const obtenerRedesSociales = async () => {
    const usus = await getDocs(collection(db, `redes sociales`));
    console.log(usus.docs);
    const resultado = usus.docs.map((doc) => ({
      id: doc.id,
      img: doc.data().img,
      link: doc.data().link,
    }));
    console.log(resultado);
    setFullRedes(resultado);
  };
  const obtenerSobreMi = async () => {
    const usus = await getDocs(collection(db, `sobre mi`));
    console.log(usus.docs);
    const resultado = usus.docs.map((doc) => ({
      id: doc.id,
      año: Number(doc.data().año),
      texto: doc.data().texto,
    }));
    console.log(resultado);
    setFullSobreMi(resultado);
    setFullSobreMi(resultado.sort((a, b) => a.año - b.año))
  };
  return {
    obtenerHabilidades,
    fullHabilidades,
    obtenerSobreMi,
    fullSobreMi,
    fullRedes,
    obtenerRedesSociales,
    obtenerProyectos,
    fullProyectos,
  };
};

export default useServices;
