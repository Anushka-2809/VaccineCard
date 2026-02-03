import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-4 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl font-bold text-white">💉 VaccineCard</h1>

      <div className="space-x-6 text-white font-medium">
        <Link to="/" className="hover:text-yellow-300">Home</Link>
        <Link to="/login" className="hover:text-yellow-300">Login</Link>
        <Link to="/register" className="hover:text-yellow-300">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
