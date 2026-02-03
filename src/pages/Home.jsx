const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-24">
      <h1 className="text-5xl font-bold mb-4">VaccineCard</h1>

      <p className="text-gray-600 text-lg mb-8 text-center max-w-xl">
        A digital vaccination record and verification system that allows
        patients and doctors to securely manage vaccination details.
      </p>

      <div className="space-x-4">
        <a
          href="/login"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Login
        </a>

        <a
          href="/register"
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Register
        </a>
      </div>
    </div>
  );
};

export default Home;
