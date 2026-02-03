const PatientDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-10">
      <h2 className="text-4xl font-bold text-indigo-700 mb-8">
        Patient Dashboard
      </h2>

      <div className="bg-white p-6 rounded-xl shadow-lg max-w-lg">
        <h3 className="text-xl font-semibold mb-4 text-purple-600">
          Vaccination Details
        </h3>

        <p><strong>Name:</strong> Demo User</p>
        <p><strong>Vaccine:</strong> Covishield</p>
        <p><strong>Dose:</strong> 2</p>
        <p><strong>Date:</strong> 12 Jan 2025</p>
      </div>
    </div>
  );
};

export default PatientDashboard;
