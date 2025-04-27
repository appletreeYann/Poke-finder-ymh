import { Routes, Route } from "react-router-dom";
import { Pokedex } from "../pages/Pokedex";
import { Home } from "../pages/Home";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokedex" element={<Pokedex />} />
    </Routes>
  );
};
