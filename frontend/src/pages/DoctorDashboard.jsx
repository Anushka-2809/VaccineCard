import { useNavigate } from "react-router-dom";

const DoctorDashboard = () => {
  const navigate = useNavigate();
  const doctor = JSON.parse(localStorage.getItem("loggedInUser"));

  return (
    <div className="min-h-screen bg-gray-50 flex py-20 justify-center">
      <div className="max-w-7xl w-full px-8">

        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-blue-600 mb-2">
            Welcome, Dr. {doctor?.name || "Doctor"}
          </h1>
          <p className="text-lg text-gray-600">
            Add and manage patient vaccination records securely
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Add Vaccination Record */}
          <div className="md:col-span-2 bg-white p-6 rounded-2xl shadow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Add Vaccination Record
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="Patient Name"
              />

              <input
                className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="Patient ID / Aadhaar (optional)"
              />

              <input
                className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="Vaccine Name"
              />

              <input
                className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="Doses Number (1 / 2 / Booster)"
              />

              <input
                type="date"
                className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
              />

              <input
                className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="Vaccination Center"
              />
            </div>

            <button
              onClick={() => alert("Vaccination record saved")}
              className="mt-6 bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Save Record
            </button>
          </div>

          {/* Side Actions */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Quick Actions
            </h3>

            <ul className="space-y-4 text-gray-600">
              <li className="cursor-pointer hover:text-blue-600">
                View Patient Records
              </li>
              <li className="cursor-pointer hover:text-blue-600">
                Verify Vaccination Certificates
              </li>
              <li className="cursor-pointer hover:text-blue-600">
                Pending Approvals
              </li>
              <li className="cursor-pointer hover:text-blue-600">
                Update Profile
              </li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};

export default DoctorDashboard;
