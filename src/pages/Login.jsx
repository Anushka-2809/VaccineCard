import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 flex justify-center items-center">
      <div className="bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-2xl w-96">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          onClick={() => navigate("/patient")}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
