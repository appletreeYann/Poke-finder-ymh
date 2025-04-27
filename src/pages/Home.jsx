import { Link } from "react-router-dom";
import { ToastContainer, Bounce } from "react-toastify";

export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 mt-[30vh]">
      <h1 className="text-5xl font-bold mb-6">¡Bienvenido a mi Pokedex!</h1>
      <Link to="/pokedex" className="px-12 py-2 bg-red-500 text-white rounded-4xl text-2xl">
        Entrar
      </Link>
    </div>
  );
};
