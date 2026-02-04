function PatientDashboard() {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-blue-100">
        <h2 className="text-2xl font-bold mb-2 text-green-600">
          Patient Dashboard
        </h2>
    </div>
  );
}

export default PatientDashboard;
