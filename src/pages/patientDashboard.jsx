const PatientDashboard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-indigo-600 mb-4">
          Patient Dashboard
        </h1>

        <p className="text-gray-600 mb-6">
          View your vaccination history securely.
        </p>

        <div className="bg-indigo-50 p-4 rounded-lg">
          <p><b>Name:</b> Anushka Maity</p>
          <p><b>Last Vaccine:</b> Booster</p>
          <p><b>Dose:</b> 1</p>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
