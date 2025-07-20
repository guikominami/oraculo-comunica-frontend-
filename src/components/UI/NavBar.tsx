import { Link } from "react-router";

const NavBar = () => {
  return (
    <nav
      className='
        fixed top-0 z-3 w-full 
      bg-white text-black 
        flex justify-between items-center
        md:px-112 px-12 
        mx-auto h-12 shadow-md
        outline outline-black/5
        dark:-outline-offset-1
        dark:outline-white/10 
        font-bold uppercase
      '
    >
      <Link to='/'>
        <p>Home</p>
      </Link>
      <Link to='/loadData'>
        <p>Load data</p>
      </Link>
    </nav>
  );
};

export default NavBar;
