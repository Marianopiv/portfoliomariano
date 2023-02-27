import React from "react";
import { useTranslation } from "react-i18next";
import useMostrar from "../../hook/useMostrar";
import Button from "../../UI/Button";
import "./projecto.css";

const Projecto = ({ name, img, tecnologias, descripcion, url,github }) => {
  const {openLinkInNewWindow} = useMostrar()
  const {t} = useTranslation()

  return (
    <div
      key={name}
      className="flex flex-col items-center justify-content-center w-80  sm:h-1/8  p-4 gap-2  border border-l-[#945dd6] border-y-[#6978d1] border-r-[#13adc7] rounded-lg"
    >
      <img
        className="w-52 rounded-sm h-26 sm:h-28 hover:cursor-pointer "
        src={img}
        alt=""
      />
      <h3 className="font-bold tracking-wide text-white">{name}</h3>{" "}
      <div className="flex flex-col justify-around">
        <p className=" text-xs text-justify text-[#929EB0] sm:h-24">
          {descripcion}
        </p>
        <p className="text-xs whitespace-no-wrap text-gray-500 py-4">
          {tecnologias}
        </p>{" "}
      </div>
      <div className="flex justify-center gap-2">
          <Button
          action={()=>openLinkInNewWindow(url)}
            text={t('liveDemo')}
            className={"hover:border-white border-2 border-black hover:cursor-pointer"}
          />

          <Button
          action={()=>openLinkInNewWindow(github)}
            text={`GitHub`}
            className={
              "border-2 border-gray-500  btnBlack hover:border-white hover:cursor-pointer"
            }
          />{" "}
      </div>
    </div>
  );
};

export default Projecto;
