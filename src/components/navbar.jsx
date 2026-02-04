import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">
        VaxiCard
      </h1>

      <div className="flex gap-6 text-gray-700 font-medium">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/login" className="hover:text-blue-600">Login</Link>
        <Link to="/register" className="hover:text-blue-600">Register</Link>
        <Link to="/qrcode" className="hover:text-blue-600">QR Code</Link>
      </div>
    </nav>
  );
};

export default Navbar;
