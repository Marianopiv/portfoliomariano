import { collection, getDocs } from "firebase/firestore";
import { useCallback, useState } from "react";
import { db } from "../FireBase";

const useServices = () => {
  const [fullHabilidades, setFullHabilidades] = useState(null);
  const [fullProyectos, setFullProyectos] = useState(null);
  const [fullRedes, setFullRedes] = useState(null);
  const [fullSobreMi, setFullSobreMi] = useState(null);

  const obtenerHabilidades = useCallback(async () => {
    const usus = await getDocs(collection(db, "habilidades"));
    const resultado = usus.docs.map((doc) => ({
      id: doc.id,
      habilidad: doc.data().habilidad,
      order: doc.data().order,
    }));
    const sorted = resultado.sort((a, b) => a.habilidad.localeCompare(b.habilidad));
    setFullHabilidades(sorted);
  }, []);

  const obtenerProyectos = useCallback(async () => {
    const usus = await getDocs(collection(db, "proyectos"));
    const resultado = usus.docs.map((doc) => ({
      id: doc.id,
      descripcion: doc.data().descripcion,
      descript: doc.data().descript,
      github: doc.data().github,
      img: doc.data().img,
      name: doc.data().name,
      tecnologias: doc.data().tecnologias,
      order: doc.data().order,
      url: doc.data().url,
    }));
    setFullProyectos(resultado);
  }, []);

  const obtenerRedesSociales = useCallback(async () => {
    const usus = await getDocs(collection(db, "redes sociales"));
    const resultado = usus.docs.map((doc) => ({
      id: doc.id,
      img: doc.data().img,
      link: doc.data().link,
    }));
    setFullRedes(resultado);
  }, []);

  const obtenerSobreMi = useCallback(async () => {
    const usus = await getDocs(collection(db, "sobre mi"));
    const resultado = usus.docs.map((doc) => ({
      id: doc.id,
      aAño: (() => {
        const data = doc.data();
        const rawYear = data.aAño ?? data["año"] ?? data.anio;
        if (rawYear === undefined || rawYear === null) {
          return null;
        }
        if (typeof rawYear === "string") {
          const cleaned = rawYear.replace(/[^\d]/g, "");
          return cleaned ? Number(cleaned) : null;
        }
        const value = Number(rawYear);
        return Number.isNaN(value) ? null : value;
      })(),
      texto: doc.data().texto,
      text: doc.data().text,
    }));
    const sorted = resultado.sort((a, b) => (a.aAño ?? 0) - (b.aAño ?? 0));
    setFullSobreMi(sorted);
  }, []);

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
