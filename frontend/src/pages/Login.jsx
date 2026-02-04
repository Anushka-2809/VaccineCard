import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.email === email && user.password === password) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));

      if (user.role === "doctor") navigate("/doctor-dashboard");
      else navigate("/patient-dashboard");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex py-20 justify-center">
      
      {/* Same container as Home */}
      <div className="max-w-7xl w-full px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Content (same alignment style as Home) */}
          <div className="text-center md:text-left">
            <h1 className="text-6xl font-extrabold text-blue-600 mb-6">
              VaxiCard
            </h1>

            <p className="text-2xl font-semibold text-gray-800 mb-4">
              Welcome back
            </p>

            <p className="text-lg text-gray-600 max-w-xl mb-8 mx-auto md:mx-0">
              Log in to access your digital vaccination records, manage
              verifications, and stay protected with VaxiCard.
            </p>
          </div>

          {/* Right Login Card */}
          <div className="flex justify-center">
            <form
              onSubmit={handleLogin}
              className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
            >
              <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
                Login
              </h2>

              <input
                type="email"
                placeholder="Email address"
                className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full mb-3 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <p
                className="text-sm text-blue-500 text-right cursor-pointer mb-6 hover:underline"
                onClick={() =>
                  alert("Password recovery link will be sent to your email (demo)")
                }
              >
                Forgot password?
              </p>

              <button className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition">
                Login
              </button>

              {/* Sign up link */}
              <p className="text-center text-gray-600 mt-6">
                Don’t have an account?
                <span
                  onClick={() => navigate("/register")}
                  className="text-blue-600 font-semibold cursor-pointer ml-1 hover:underline"
                >
                  Sign up
                </span>
              </p>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;