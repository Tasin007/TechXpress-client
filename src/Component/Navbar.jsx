import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : (localStorage.theme = "light")
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
    <div className="navbar bg-amber-50 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold flex items-center">
            <img
              src="https://i.ibb.co/MNyrgTN/Navbar-logo.png"
              alt="Logo"
              className="h-8 w-8 mr-2"
            />
            TechXpress
          </Link>
        </div>

        <div className="flex items-center gap-x-8">
          <NavLink
            to="/"
            className="text-amber-950 font-semibold"
            activeClassName="underline"
          >
            Home
          </NavLink>
          <NavLink
            to="/addproduct"
            className="text-amber-950 font-semibold"
            activeClassName="underline"
          >
            Add Product
          </NavLink>
          <NavLink
            to="/myCart"
            className="text-amber-950 font-semibold"
            activeClassName="underline"
          >
            My Cart
          </NavLink>
          <label className="switch ml-4">
            <input type="checkbox" onClick={handleToggle} />
            <span className="slider round"></span>
          </label>
          {user ? (
            <div className="flex items-center gap-x-4">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="badge badge-sm indicator-item">8</span>
                  </div>
                </label>
                <div className="dropdown-content w-52 mt-2 p-4 shadow bg-base-100 rounded-box">
                  <div className="font-bold text-lg">8 Items</div>
                  <div className="text-info">Subtotal: $999</div>
                  <button className="btn btn-primary btn-block mt-3">View cart</button>
                </div>
              </div>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <div className="w-10 rounded-full">
                    <img
                      src={user.photoURL}
                      alt="Profile"
                    />
                  </div>
                </label>
                <ul className="dropdown-content w-52 mt-2 p-2 shadow bg-base-100 rounded-box">
                  <li>
                    <a className="flex justify-between items-center">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <button onClick={handleSignOut} className="btn btn-ghost btn-xs hover:bg-red-400">Logout</button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <NavLink
              to="/login"
              className="text-amber-950 font-semibold"
              activeClassName="underline"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
