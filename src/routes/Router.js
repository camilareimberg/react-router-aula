import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
import { ErrorPage } from "../pages/ErrorPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Router = () => {
  return (
    //  {/* o BrowserRouter ENGLOBA TODAS AS ROTAS */}
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        {/* essa caracteristica de :language é path parameters. É : e nome que dá para o caminho */}
        <Route path="about/:language" element={<AboutPage />} />
        {/* O * é para geral, significa qualquer página com erro */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
