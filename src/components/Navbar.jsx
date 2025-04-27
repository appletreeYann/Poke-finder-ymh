import { Link } from "react-router-dom";
import LOGO from "../assets/pokemon-logo.svg"

export const Navbar = () => {
  return (
    <nav className="bg-red-500 text-white p-4 flex justify-center md:justify-start">
      <Link to="/" className="">
        <img 
          src={LOGO}  
          alt="Logo pokemon"
          className=" w-[10rem]"
        />
      
      </Link>
    </nav>
  );
};
