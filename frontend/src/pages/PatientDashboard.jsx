import { useNavigate } from "react-router-dom";

const PatientDashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  return (
    <div className="min-h-screen bg-gray-50 flex py-20 justify-center">
      <div className="max-w-7xl w-full px-8">

        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-blue-600 mb-2">
            Welcome, {user?.name || "Patient"}
          </h1>
          <p className="text-lg text-gray-600">
            Manage and view your vaccination records securely
          </p>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Vaccination Records */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              My Vaccinations
            </h3>
            <p className="text-gray-600 mb-4">
              View your vaccination history and certificates.
            </p>
            <button className="text-blue-600 font-medium hover:underline">
              View Records →
            </button>
          </div>

          {/* Verification */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Verification Status
            </h3>
            <p className="text-gray-600 mb-4">
              Check verification status of your vaccines.
            </p>
            <button className="text-blue-600 font-medium hover:underline">
              Check Status →
            </button>
          </div>

          {/* Profile */}
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              My Profile
            </h3>
            <p className="text-gray-600 mb-4">
              Update personal details and security settings.
            </p>
            <button className="text-blue-600 font-medium hover:underline">
              Edit Profile →
            </button>
          </div>

        </div>

        {/* Logout */}
        <div className="mt-14 text-center md:text-left">
          <button
            onClick={() => {
              localStorage.removeItem("loggedInUser");
              navigate("/login");
            }}
            className="inline-block bg-red-500 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>

      </div>
    </div>
  );
};

export default PatientDashboard;
