import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // dummy logic
    navigate("/patient-dashboard");
  };

  return (
    <div className="max-w-sm mx-auto mt-20">
      <h2 className="text-2xl font-bold mb-4">Login</h2>

      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 mb-3 border"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 mb-3 border"
      />

      <button
        onClick={handleLogin}
        className="w-full bg-blue-600 text-white py-2"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
