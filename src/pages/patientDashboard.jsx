function PatientDashboard() {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-blue-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96 text-center">
        <h2 className="text-2xl font-bold mb-2 text-green-600">
          Patient Dashboard
        </h2>
        <p><b>Name:</b> {user?.name}</p>
        <p><b>Email:</b> {user?.email}</p>
        <p><b>Role:</b> {user?.role}</p>
      </div>
    </div>
  );
}

export default PatientDashboard;
