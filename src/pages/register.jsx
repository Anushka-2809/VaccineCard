const Register = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 flex justify-center items-center">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-96">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
          Register
        </h2>

        <input className="w-full p-3 mb-3 border rounded-lg" placeholder="Full Name" />
        <input className="w-full p-3 mb-3 border rounded-lg" placeholder="Email" />
        <input className="w-full p-3 mb-3 border rounded-lg" placeholder="Password" />

        <select className="w-full p-3 mb-6 border rounded-lg">
          <option>Patient</option>
          <option>Doctor</option>
        </select>

        <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition">
          Create Account
        </button>
      </div>
    </div>
  );
};

export default Register;
