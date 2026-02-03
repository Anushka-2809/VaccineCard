import { users } from "../data/dummyUsers";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      alert("Invalid credentials");
      return;
    }

    user.role === "patient"
      ? navigate("/patient")
      : navigate("/doctor");
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-xl w-[350px]">
        <h2 className="text-2xl font-bold mb-6">Login</h2>

        <input
          className="w-full mb-4 p-2 border rounded"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full mb-4 p-2 border rounded"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-indigo-600 text-white p-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
