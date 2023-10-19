import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-amber-50 p-4">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center text-amber-950 mb-4 md:mb-0">
          <Link to="/" className="text-xl font-bold">
            TechXpress
          </Link>

          <img
            src="https://i.ibb.co/MNyrgTN/Navbar-logo.png"
            alt="Logo"
            className="h-8 w-8 ml-2"
          />
        </div>
        <div className="flex items-center">
          <Link to="/" className="text-amber-950 mr-4">
            Home
          </Link>
          <Link to="/addproduct" className="text-amber-950 mr-4">
            Add Product
          </Link>
          <Link to="/mycart" className="text-amber-950 mr-4">
            My Cart
          </Link>
          <Link to="/login" className="text-amber-950">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
