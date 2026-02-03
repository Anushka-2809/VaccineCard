const Register = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-xl w-[350px]">
        <h2 className="text-2xl font-bold mb-6">Register</h2>

        <input className="w-full mb-4 p-2 border rounded" placeholder="Email" />
        <input
          className="w-full mb-4 p-2 border rounded"
          placeholder="Password"
        />

        <button className="w-full bg-green-600 text-white p-2 rounded">
          Register
        </button>

        <p className="text-sm text-gray-500 mt-3">
          * Prototype only (no backend)
        </p>
      </div>
    </div>
  );
};

export default Register;
