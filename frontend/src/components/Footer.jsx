const Footer = () => {
  return (
    <footer className="bg-blue-900 text-gray-200">

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            VaxiCard
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            A secure digital vaccination record and verification platform
            designed for patients, doctors, and healthcare authorities.
          </p>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Product
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Dashboard</li>
            <li className="hover:text-white cursor-pointer">Verification</li>
            <li className="hover:text-white cursor-pointer">Security</li>
            <li className="hover:text-white cursor-pointer">Features</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Company
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms of Service</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Contact
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li> support@vaxicard.com</li>
            <li> +91 98765 43210</li>
            <li> India</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800 text-center py-4 text-sm text-gray-300">
        © {new Date().getFullYear()} VaxiCard. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
