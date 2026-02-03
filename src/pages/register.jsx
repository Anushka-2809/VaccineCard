const Register = () => {
  return (
    <div className="max-w-sm mx-auto mt-20">
      <h2 className="text-2xl font-bold mb-4">Register</h2>

      <input className="w-full p-2 mb-3 border" placeholder="Name" />
      <input className="w-full p-2 mb-3 border" placeholder="Email" />
      <input className="w-full p-2 mb-3 border" placeholder="Password" />

      <select className="w-full p-2 mb-3 border">
        <option>Patient</option>
        <option>Doctor</option>
      </select>

      <button className="w-full bg-green-600 text-white py-2">
        Register
      </button>
    </div>
  );
};

export default Register;
