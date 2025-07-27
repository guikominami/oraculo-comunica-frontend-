import { useState } from "react";
import { Link } from "react-router";

const NavBar = () => {
  const baseURL = import.meta.env.VITE_PROJECT_URL;

  console.log("Base URL:", baseURL);

  const [isActive, setIsActive] = useState<number | undefined>(0);
  return (
    <nav
      className='
        fixed top-0 z-3 w-full 
      bg-white text-black 
        flex justify-between items-center
        md:px-130 
        mx-auto h-12 shadow-md
        outline outline-black/5
        dark:-outline-offset-1
        dark:outline-white/10 
        font-bold uppercase
      '
    >
      <Link
        to={baseURL + "/"}
        onClick={() => setIsActive(0)}
        className={"px-3 py-3 " + (isActive === 0 ? "bg-black/10" : "")}
      >
        <p>Listas</p>
      </Link>
      <Link
        to={baseURL + "/loadData"}
        onClick={() => setIsActive(1)}
        className={"px-3 py-3 " + (isActive === 1 ? "bg-black/10" : "")}
      >
        <p>Carregar dados</p>
      </Link>
      <Link
        to={baseURL + "/about"}
        onClick={() => setIsActive(2)}
        className={"px-3 py-3 " + (isActive === 2 ? "bg-black/10" : "")}
      >
        <p>Sobre</p>
      </Link>
    </nav>
  );
};

export default NavBar;
