const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-bold text-indigo-700 mb-4">
        VaxiCard
      </h1>

      <p className="text-lg text-gray-600 max-w-2xl text-center">
        A digital vaccination record & verification system designed to securely
        store, manage, and verify vaccination data for patients, doctors, and
        authorities.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="font-semibold text-indigo-600">Patients</h3>
          <p className="text-sm text-gray-600">
            Access vaccination history anytime.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="font-semibold text-indigo-600">Doctors</h3>
          <p className="text-sm text-gray-600">
            Update and verify vaccination records.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="font-semibold text-indigo-600">Authorities</h3>
          <p className="text-sm text-gray-600">
            Secure verification using QR codes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
