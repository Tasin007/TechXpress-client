import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then()
      .catch();
  };
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

        <div className="flex items-center gap-x-20">
        <NavLink to="/"  className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-amber-950 underline font-semibold" : "font-[600]"
          }>
            Home
          </NavLink>
          {user ? (
            <>
              <NavLink to="/addproduct" className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-amber-950 underline font-semibold" : "font-[600]"
          }>
                Add Product
              </NavLink>
              <NavLink to="/mycart" className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-amber-950 underline font-semibold" : "font-[600]"
          }>
                My Cart
              </NavLink>

              <div className="flex flex-col justify-center items-center">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} alt="Photo Not found" />
              </div>
            </label>
            <p>{user.displayName}</p>
            <button
              onClick={handleSignOut}
              className="btn btn-active btn-ghost btn-xs hover:bg-red-400"
            >
              logout
            </button>
          </div>
            </>
          ) : (
            <NavLink to="/login" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-amber-950 underline font-semibold" : "font-[600]"
              }>
              Login
            </NavLink>
          )}
        </div>
        
      </div>
    </nav>
  );
};
export default Navbar;
