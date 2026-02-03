const DoctorDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-yellow-100 p-10">
      <h2 className="text-4xl font-bold text-pink-700 mb-8">
        Doctor Dashboard
      </h2>

      <div className="bg-white p-6 rounded-xl shadow-lg max-w-md">
        <h3 className="text-xl font-semibold mb-4 text-yellow-600">
          Add Vaccination Record
        </h3>

        <input className="w-full p-3 mb-3 border rounded-lg" placeholder="Patient Name" />
        <input className="w-full p-3 mb-3 border rounded-lg" placeholder="Vaccine Name" />
        <input className="w-full p-3 mb-5 border rounded-lg" placeholder="Dose Number" />

        <button className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700">
          Save Record
        </button>
      </div>
    </div>
  );
};

export default DoctorDashboard;
