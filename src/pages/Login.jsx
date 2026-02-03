import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.email === email && user.password === password) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));

      if (user.role === "doctor") navigate("/doctor");
      else navigate("/patient");
    } else {
      alert("Invalid email or password");
    }
  };

  const forgotPassword = () => {
    alert("Password recovery link will be sent to your email (demo)");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-yellow-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-5">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-2 p-2 border rounded"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <p
          className="text-sm text-blue-500 text-right cursor-pointer mb-4"
          onClick={forgotPassword}
        >
          Forgot password?
        </p>

        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-pink-700">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
