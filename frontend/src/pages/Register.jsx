import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "patient",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    localStorage.setItem("user", JSON.stringify(form));
    alert("Account created successfully!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex py-20 justify-center">
      <div className="max-w-7xl w-full px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="text-center md:text-left">
            <h1 className="text-6xl font-extrabold text-blue-600 mb-6">
              VaxiCard
            </h1>

            <p className="text-2xl font-semibold text-gray-800 mb-4">
              Create your account
            </p>

            <p className="text-lg text-gray-600 max-w-xl mb-8 mx-auto md:mx-0">
              Register to securely manage vaccination records and access
              verified healthcare services.
            </p>
          </div>

          {/* Smaller Register Form */}
          <div className="flex justify-center">
            <form
              onSubmit={handleRegister}
              className="bg-white p-7 rounded-2xl shadow-lg w-full max-w-sm"
            >
              <h2 className="text-2xl font-bold text-center text-blue-600 mb-5">
                Sign Up
              </h2>

              <input
                name="name"
                placeholder="Full name"
                className="w-full mb-3 p-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
                required
              />

              <input
                name="email"
                type="email"
                placeholder="Email address"
                className="w-full mb-3 p-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
                required
              />

              <input
                name="password"
                type="password"
                placeholder="Password"
                className="w-full mb-3 p-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
                required
              />

              <input
                name="confirmPassword"
                type="password"
                placeholder="Confirm password"
                className="w-full mb-4 p-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
                required
              />

              {/* Role Selection – Radio Cards */}
              <div className="mb-5">
                <p className="text-sm font-medium text-gray-700 mb-2">
                  Register as
                </p>

                <div className="flex gap-3">
                  <label
                    className={`flex-1 cursor-pointer border rounded-lg p-2.5 text-center transition
                      ${
                        form.role === "patient"
                          ? "border-blue-600 bg-blue-50 text-blue-600"
                          : "border-gray-300 text-gray-600 hover:border-blue-400"
                      }`}
                  >
                    <input
                      type="radio"
                      name="role"
                      value="patient"
                      className="hidden"
                      checked={form.role === "patient"}
                      onChange={handleChange}
                    />
                    Patient
                  </label>

                  <label
                    className={`flex-1 cursor-pointer border rounded-lg p-2.5 text-center transition
                      ${
                        form.role === "doctor"
                          ? "border-blue-600 bg-blue-50 text-blue-600"
                          : "border-gray-300 text-gray-600 hover:border-blue-400"
                      }`}
                  >
                    <input
                      type="radio"
                      name="role"
                      value="doctor"
                      className="hidden"
                      checked={form.role === "doctor"}
                      onChange={handleChange}
                    />
                    Doctor
                  </label>
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-2.5 rounded-lg text-base font-medium hover:bg-blue-700 transition">
                Create Account
              </button>

              <p className="text-center text-gray-600 mt-5 text-sm">
                Already have an account?
                <span
                  onClick={() => navigate("/login")}
                  className="text-blue-600 font-semibold cursor-pointer ml-1 hover:underline"
                >
                  Login
                </span>
              </p>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Register;
