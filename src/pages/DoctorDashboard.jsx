
const DoctorDashboard = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-yellow-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        
        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
          Doctor Dashboard
        </h1>

        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Add Vaccination Record
        </h2>

        <div className="space-y-4">
          <input
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="Patient Name"
          />

          <input
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="Vaccine Name"
          />

          <input
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="Dose Number"
          />
        </div>

        <button 
        onClick={() => alert("Record Saved")}
        className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
          Save Record
        </button>
      </div>
    </div>
  );
};

export default DoctorDashboard;
