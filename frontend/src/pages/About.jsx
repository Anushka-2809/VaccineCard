import React from "react";

const About = () => {
    return (
        <div className="min-h-screen bg-gray-50">

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        About VaxiCard
                    </h1>
                    <p className="text-lg md:text-xl opacity-90">
                        Simplifying vaccination records for doctors and patients — securely, digitally, and effortlessly.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 px-6">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                            Our Mission
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            VaxiCard aims to replace paper-based vaccination records with a secure,
                            digital-first solution. We help doctors manage patient vaccination data
                            efficiently while empowering patients to access their records anytime,
                            anywhere.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                        <h3 className="text-xl font-semibold text-blue-600 mb-3">
                            Why VaxiCard?
                        </h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>Secure digital vaccination records</li>
                            <li>Easy access for patients & doctors</li>
                            <li>Reduces data loss and paperwork</li>
                            <li>Built for scalability and trust</li>
                        </ul>

                    </div>
                </div>
            </section>


            {/* Vision */}
            <section className="py-16 px-6 bg-gray-200">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                        Our Vision
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        To create a future where vaccination data is universally accessible,
                        secure, and trusted — supporting healthier communities through smart technology.
                    </p>
                </div>
            </section>

        </div>
    );
};

export default About;
