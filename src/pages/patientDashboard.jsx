const PatientDashboard = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-indigo-700 mb-4">
        Patient Dashboard
      </h1>

      <div className="bg-white p-6 rounded-xl shadow">
        <p className="text-gray-600">
          View vaccination history, QR code, and personal details.
        </p>
      </div>
    </div>
  );
};

export default PatientDashboard;
