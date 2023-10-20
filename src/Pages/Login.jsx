import { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    setRegisterError("");
    setSuccess("");

    if (!email) {
      setRegisterError("email doesn't match");
      return;
    } else if (!password) {
      setRegisterError("password doesn't match");
      return;
    }

    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("User logged in Successfully.");
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-br from-blue-900 via-pink-300 to-green-900 text-white">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  required
                  className="input input-bordered"
                />
                {registerError && (
                  <p className="text-red-700">{registerError}</p>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="password"
                  className="input input-bordered "
                />
                {registerError && (
                  <p className="text-red-700">{registerError}</p>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary mb-4">Login</button>
                <Link to="/register">
                <button className="btn btn-xs mt-5 hover:text-red-500 text-right">Have No Account? Please Register</button>
                </Link>
              </div>
            </form>

            {success && <p className="text-green-600">{success}</p>}
            {success && <Navigate to="/" replace={true} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;