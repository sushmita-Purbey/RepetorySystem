import React, { useState } from "react";

const ContactSupport = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Support request submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Contact Support</h2>
      <p className="text-gray-600 mb-6">
        Have a question or issue? Reach out to our support team.
      </p>

      {submitted ? (
        <div className="bg-green-100 text-green-800 p-4 rounded-lg">
          ✅ Your message has been sent! Our support team will contact you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
              placeholder="Describe your issue..."
              rows="4"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Submit Request
          </button>


        </form>


      )}

      {/* Contact Details */}
      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
        <p className="text-gray-700">📍 Hospital Address: 123 Main St, City, Country</p>
        <p className="text-gray-700">📞 Phone: +123-456-7890</p>
        <p className="text-gray-700">📧 Email: support@hospital.com</p>
      
      </div>
    </div>
  );
};

export default ContactSupport;
