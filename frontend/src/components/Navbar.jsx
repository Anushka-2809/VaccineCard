import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const [menuOpen, setMenuOpen] = useState(false);

  const handleDashboardClick = () => {
    setMenuOpen(false);

    if (!user) {
      navigate("/login");
      return;
    }

    if (user.role === "doctor") {
      navigate("/doctor-dashboard");
    } else {
      navigate("/patient-dashboard");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setMenuOpen(false);
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md px-6 md:px-20 py-4">
      <div className="flex justify-between items-center">
        
        {/* Logo */}
        <h1
          className="text-2xl font-bold text-blue-600 cursor-pointer"
          onClick={() => navigate("/")}
        >
          VaxiCard
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-gray-700 font-medium items-center">
          <Link to="/" className="hover:text-blue-600">Home</Link>

          <button onClick={handleDashboardClick} className="hover:text-blue-600">
            Dashboard
          </button>

          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>

          {!user ? (
            <Link to="/login" className="hover:text-blue-600">Login</Link>
          ) : (
            <button
              onClick={handleLogout}
              className="text-red-500 hover:text-red-600 font-medium"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-white rounded-xl shadow-lg py-4 px-6 space-y-4 text-gray-700 font-medium">
          <Link to="/" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">
            Home
          </Link>

          <button
            onClick={handleDashboardClick}
            className="block w-full text-left hover:text-blue-600"
          >
            Dashboard
          </button>

          <Link to="/about" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">
            About
          </Link>

          <Link to="/contact" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">
            Contact
          </Link>

          {!user ? (
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-blue-600"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="block text-left text-red-500 hover:text-red-600"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
