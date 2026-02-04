import HomeImage from "../../public/Home.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex py-20 justify-center">

      {/* Container */}
      <div className="max-w-7xl w-full px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="text-center md:text-left">
            <h1 className="text-6xl font-extrabold text-blue-600 mb-6">
              VaxiCard
            </h1>

            <p className="text-2xl font-semibold text-gray-800 mb-4">
              Your Digital Vaccination Passport
            </p>

            <p className="text-lg text-gray-600 max-w-xl mb-8 mx-auto md:mx-0">
              VaxiCard is a secure digital vaccination record and verification
              platform that helps patients, doctors, and authorities easily
              store, access, and validate vaccination data anytime, anywhere.
            </p>

            {/* Buttons */}
            <div className="flex justify-center md:justify-start gap-4">
              <button onClick={() => navigate('/login')} className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition">
                Get Started
              </button>

              <button onClick={() => navigate('/about')} className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-50 transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src={HomeImage}
              alt="Vaccination record illustration"
              className="w-full max-w-md rounded-2xl shadow-lg"
            />
          </div>

        </div>
      </div>

    </div>
  );
};

export default Home;
