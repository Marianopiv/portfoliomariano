import React, { useState } from "react";

const useMostrar = () => {
  const [mostrar, setMostrar] = useState(false);

  function handleClick(section) {
    const contactoSection = document.querySelector(`#${section}`);
    contactoSection.scrollIntoView({ behavior: "smooth" });
  }
  function openLinkInNewWindow(url) {
    window.open(url, '_blank');
  }
  return { setMostrar,mostrar,handleClick,openLinkInNewWindow };
};
export default useMostrar;
