const DoctorDashboard = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Doctor Dashboard</h2>

      <div className="border p-4 rounded shadow max-w-md">
        <h3 className="font-semibold mb-4">Add Vaccination Record</h3>

        <input className="w-full p-2 mb-3 border rounded" placeholder="Patient Name" />
        <input className="w-full p-2 mb-3 border rounded" placeholder="Vaccine Name" />
        <input className="w-full p-2 mb-3 border rounded" placeholder="Dose Number" />

        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Add Record
        </button>
      </div>
    </div>
  );
};

export default DoctorDashboard;
