import Header from "../components/Header";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  const params = useParams();

  const goToAboutPage = (language) => {
    navigate(`/about/${language}`);
  };
  return (
    <div>
      <Header />
      <h1>Página Inicial</h1>
      {/* função on click quando coloca uma função com parâmetro precisa chamar o callback ()=> se não a função vai rodar toda vez que o código lê, e dá problemas com isso */}
      <button onClick={() => goToAboutPage("PT-BR")}>
        {" "}
        Página sobre - PT - BR
      </button>
      <button onClick={() => goToAboutPage("EN")}> Página sobre - EN </button>
    </div>
  );
};
