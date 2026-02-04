import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  if (!user) {
    navigate("/login");
    return null;
  }

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-100 via-blue-100 to-yellow-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-96 text-center">
        
        <div className="w-24 h-24 mx-auto rounded-full bg-blue-500 text-white flex items-center justify-center text-3xl font-bold mb-4">
          {user.name.charAt(0)}
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-1">
          {user.name}
        </h2>

        <p className="text-gray-500 mb-4">{user.email}</p>

        <span className="inline-block px-4 py-1 mb-6 rounded-full bg-blue-100 text-blue-600 font-semibold">
          {user.role.toUpperCase()}
        </span>

        <div className="space-y-3">
          {user.role === "doctor" && (
            <button
              onClick={() => navigate("/doctor")}
              className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600"
            >
              Go to Doctor Dashboard
            </button>
          )}

          {user.role === "patient" && (
            <button
              onClick={() => navigate("/patient")}
              className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
            >
              Go to Patient Dashboard
            </button>
          )}

          <button
            onClick={logout}
            className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </div>

      </div>
    </div>
  );
}

export default Profile;
