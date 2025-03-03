import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import EjerciciosEspaldabaja from "./components/ejercicios/EjerciciosEspaldabaja";
import EjercicioEspaldaAlta from "./components/ejercicios/EjercicioEspaldaAlta";
import EjercicioHombros from "./components/ejercicios/EjercicioHombros";
import EjercicioManos from "./components/ejercicios/EjercicioManos";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/EjerciciosEspaldabaja" element={<EjerciciosEspaldabaja />} />
      <Route path="/EjercicioEspaldaAlta" element={<EjercicioEspaldaAlta />} />
      <Route path="/EjercicioHombros" element={<EjercicioHombros />} />
      <Route path="/EjercicioManos" element={<EjercicioManos />} />
    </Routes>
  );
};

export default AppRoutes;