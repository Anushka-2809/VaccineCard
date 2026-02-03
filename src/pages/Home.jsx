const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl font-extrabold text-indigo-700 mb-6">
        VaccineCard
      </h1>

      <p className="text-xl text-gray-700 max-w-2xl mb-10">
        A secure digital platform for managing, verifying, and accessing
        vaccination records for patients and healthcare professionals.
      </p>

      <div className="flex gap-6">
        <a
          href="/login"
          className="px-8 py-4 bg-blue-600 text-white rounded-full text-lg font-semibold shadow-lg hover:bg-blue-700 transition"
        >
          Login
        </a>

        <a
          href="/register"
          className="px-8 py-4 bg-green-600 text-white rounded-full text-lg font-semibold shadow-lg hover:bg-green-700 transition"
        >
          Register
        </a>
      </div>
    </div>
  );
};

export default Home;
