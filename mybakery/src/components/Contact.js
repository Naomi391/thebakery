import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., sending to an API or email)
    console.log("Form submitted", formData);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-16 px-6 sm:px-16 lg:px-32 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-pink-600 mb-8">
          Contact Us
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          We'd love to hear from you! Please fill out the form below.
        </p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-xl border-2 border-gray-200"
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-left text-gray-700 font-semibold mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-left text-gray-700 font-semibold mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-left text-gray-700 font-semibold mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              rows="6"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 text-white font-semibold py-4 rounded-lg hover:bg-pink-600 transition duration-300 ease-in-out"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
