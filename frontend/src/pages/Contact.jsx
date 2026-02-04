import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-lg opacity-90">
            We’re here to help. Reach out for support, feedback, or collaboration.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Get in Touch
            </h2>

            <p className="text-gray-600 mb-6">
              Whether you're a doctor, patient, or healthcare organization,
              we’d love to hear from you.
            </p>

            <div className="space-y-4 text-gray-700">
              <p>
                <span className="font-medium">Email:</span> support@vaxicard.com
              </p>
              <p>
                <span className="font-medium">Phone:</span> +91 98765 43210
              </p>
              <p>
                <span className="font-medium">Location:</span> India
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Send Us a Message
            </h3>

            <form className="space-y-4">

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
              />

              <textarea
                rows="3"
                placeholder="Your Message"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
