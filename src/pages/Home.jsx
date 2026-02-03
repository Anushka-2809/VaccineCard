const Home = () => {
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold mb-4">VaccineCard</h1>
      <p className="text-gray-600 mb-6">
        Digital vaccination records & verification system
      </p>

      <div className="space-x-4">
        <a href="/login" className="px-6 py-2 bg-blue-600 text-white rounded">
          Login
        </a>
        <a href="/register" className="px-6 py-2 bg-green-600 text-white rounded">
          Register
        </a>
      </div>
    </div>
  );
};

export default Home;
