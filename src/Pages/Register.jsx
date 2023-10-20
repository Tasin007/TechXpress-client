import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
const Register = () => {
    const navigate = useNavigate();
    const { createUser, googleLoginUser } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState("");
    const [success, setSuccess] = useState("");
  
    const handleRegister = (e) => {
      e.preventDefault();
      const form = new FormData(e.currentTarget);
  
      const photo = form.get("photoUrl");
      const name = form.get("name");
      const email = form.get("email");
      const password = form.get("password");
      console.log(photo, name, email, password);
  
      setRegisterError("");
      setSuccess("");
  
      if (password.length < 6) {
        setRegisterError("Password should be at least 6 characters or longer");
        return;
      } else if (!/[A-Z]/.test(password)) {
        setRegisterError(
          "Your password should have at least one capital characters."
        );
        return;
      } else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(password)) {
        setRegisterError("Your password should have special characters");
        return;
      }
  
      createUser(email, password)
        .then((result) => {
          console.log(result.user);
          setSuccess("User Created Successfully.");
          navigate("/");
        })
        .catch((error) => {
          console.error(error);
          setRegisterError(error.message);
        });
    };
  
    const handleGoogleSignIn = () => {
      const additionalData = {};
  
      googleLoginUser(additionalData)
        .then((result) => {
          console.log(result.user);
          setSuccess("User Created Successfully.");
        })
        .catch((error) => {
          console.error("error", error);
          setRegisterError(error.message);
        });
    };
    return (
        <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-br from-blue-900 via-pink-300 to-green-900 text-white">
          <div className="card-body ">
            <form onSubmit={handleRegister}>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photoUrl"
                  placeholder="Enter Photo URL"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="Password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
                <button onClick={handleGoogleSignIn} className="btn btn-xs mt-5 hover:text-red-500 text-right">Register with google?</button>

                {success && <Navigate to="/" replace={true} />}
              </div>
            </form>
            {registerError && <p className="text-red-700">{registerError}</p>}
            {success && <p className="text-green-600">{success}</p>}
            {success && <Navigate to="/" replace={true} />}
          </div>
        </div>
      </div>
    </div>
    );
}

export default Register;
