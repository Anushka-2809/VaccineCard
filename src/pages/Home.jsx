const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">
      <div className="bg-white p-10 rounded-2xl shadow-xl text-center w-[350px]">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          VaccineCard
        </h1>

        <p className="text-gray-600 mb-6">
          Digital vaccination record system for patients and doctors
        </p>

        <div className="flex gap-4 justify-center">
          <a
            href="/login"
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Login
          </a>

          <a
            href="/register"
            className="px-6 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
