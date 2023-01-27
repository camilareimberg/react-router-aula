import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TextInEnglish } from "../constants/TextEn";
import { TextoEmPortugues } from "../constants/TextPt";

const Header = () => {
  const navigate = useNavigate();
  const params = useParams();

  const goToHomePage = () => {
    navigate("/");
  };

  const goBack = () => {
    //o -1 volta para a página anterior
    navigate(-1);
  };

  return (
    <div>
      {/* logica para quando o caminho é português ou inglês, qual pagina abre */}
      {params.language === "PT-BR" ? <TextoEmPortugues /> : <TextInEnglish />}
      <button onClick={goToHomePage}>Ir para página inicial</button>
      <button onClick={goBack}>Voltar</button>
    </div>
  );
};

// tava dando erro sem esse export aqui embaixo
export default Header;
