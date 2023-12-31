import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const [theme, setTheme] = useState(
    localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : (localStorage.theme = "light")
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const handleSignOut = () => {
    logOut()
      .then(() => {
        toast.success("user signed out");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <nav className="bg-teal-50 p-4">
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

        <div className="flex items-center gap-x-5 md:gap-x-20">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-amber-950 underline font-semibold"
                : "font-[600]"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/addproduct"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-amber-950 underline font-semibold"
                : "font-[600]"
            }
          >
            Add Product
          </NavLink>

          <NavLink
            to="/myCart"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-amber-950 underline font-semibold"
                : "font-[600]"
            }
          >
            My Cart
          </NavLink>

          <label className="swap swap-rotate mr-4">
            <input type="checkbox" onClick={handleToggle} />

            <svg
              className="swap-on fill-current w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5Zm5.66,7.66a1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71a1,1,0,0,0-1.41,1.41l.71.71A1,1,0,0,0,17.66,12.66Zm.71,4.71a1,1,0,0,0-1.41,0l-.71.71a1,1,0,0,0,1.41,1.41l.71-.71A1,1,0,0,0,18.37,17.37ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            <svg
              className="swap-off fill-current w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>

          {user ? (
  <div className="flex items-center flex-wrap gap-x-3 md:flex-nowrap">
    <div className="md:flex flex-col justify-center items-center">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user.photoURL} alt="Photo Not found" />
        </div>
      </label>
      <p>{user.displayName}</p>
    </div>
    <button
      onClick={handleSignOut}
      className="btn btn-active btn-ghost btn-xs hover:bg-red-400 mt-2 md:mt-0"
    >
      Logout
    </button>
  </div>
) : (
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-amber-950 underline font-semibold"
                  : "font-[600]"
              }
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
