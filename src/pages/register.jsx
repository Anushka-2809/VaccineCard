const Register = () => {
  return (
    <div className="flex justify-center items-center mt-20">
      <div className="w-96 p-6 border rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-2 mb-3 border rounded"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-3 border rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-3 border rounded"
        />

        <select className="w-full p-2 mb-4 border rounded">
          <option>Patient</option>
          <option>Doctor</option>
        </select>

        <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
