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
    const resultado = usus.docs.map((doc) => ({
      id: doc.id,
      habilidad: doc.data().habilidad,
    }));
    setFullHabilidades(resultado);
    setFullHabilidades(resultado.sort((a, b) => a.habilidad.localeCompare(b.habilidad)))
  };

  const obtenerProyectos = async () => {
    const usus = await getDocs(collection(db, `proyectos`));
    const resultado = usus.docs.map((doc) => ({
      id: doc.id,
      descripcion: doc.data().descripcion,
      github: doc.data().github,
      img: doc.data().img,
      name: doc.data().name,
      tecnologias: doc.data().tecnologias,
      url: doc.data().url,
    }));
    setFullProyectos(resultado);
  };

  const obtenerRedesSociales = async () => {
    const usus = await getDocs(collection(db, `redes sociales`));
    const resultado = usus.docs.map((doc) => ({
      id: doc.id,
      img: doc.data().img,
      link: doc.data().link,
    }));
    setFullRedes(resultado);
  };
  const obtenerSobreMi = async () => {
    const usus = await getDocs(collection(db, `sobre mi`));
    const resultado = usus.docs.map((doc) => ({
      id: doc.id,
      año: Number(doc.data().año),
      texto: doc.data().texto,
    }));
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
