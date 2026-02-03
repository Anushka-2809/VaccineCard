const PatientDashboard = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Patient Dashboard</h2>

      <div className="border p-4 rounded shadow max-w-md">
        <h3 className="font-semibold mb-2">Vaccination Card</h3>
        <p>Name: Demo User</p>
        <p>Vaccine: Covishield</p>
        <p>Dose: 2</p>
        <p>Date: 12 Jan 2025</p>
      </div>
    </div>
  );
};

export default PatientDashboard;
