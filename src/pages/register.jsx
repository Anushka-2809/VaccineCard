const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-indigo-200">
      <div className="bg-white p-8 rounded-xl shadow-lg w-[380px]">
        <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">
          Register
        </h2>

        <input className="input" placeholder="Name" />
        <input className="input" placeholder="Email" />
        <input className="input" placeholder="Password" />

        <select className="input">
          <option>Patient</option>
          <option>Doctor</option>
        </select>

        <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">
          Create Account
        </button>
      </div>
    </div>
  );
};

export default Register;
