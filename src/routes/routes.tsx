import React from "react";
import { Route, Routes } from "react-router-dom";
import SobreMi from "../pages/sobremi/SobreMi";
import Projectos from "../pages/projectos/Projectos";
import LayoutPrimario from "../components/layout/LayoutPrimario";
import Experiencia from "../pages/experiencia/Experiencia";
import Contacto from "../pages/contacto/Contacto";
import LayoutSecundario from "../components/layout/LayoutSecundario";
import Habilidades from "../pages/habilidades/Habilidades";
import Estudios from "../pages/estudios/Estudios";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutPrimario />}>
        <Route index element={<SobreMi />}></Route>
        <Route path="experiencia" element={<Experiencia />}></Route>
        <Route path="habilidades" element={<Habilidades />}></Route>
        <Route path="projectos" element={<Projectos />}></Route>
      </Route>

      <Route path="/contacto" element={<LayoutSecundario />}>
        <Route index element={<Contacto />}></Route>
      </Route>
      <Route path="/estudios" element={<LayoutSecundario />}>
        <Route index element={<Estudios />}></Route>
      </Route>

      <Route path="*" element={<div />} />
    </Routes>
  );
};

export default AppRoutes;
