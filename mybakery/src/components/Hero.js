import React from "react";

const Hero = () => {
  return (
    <section className="bg-pink-100 h-screen flex flex-col items-center justify-center text-center relative">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/images/deva.jpg')", // Replace with your local image path
          backgroundPosition: "left center",
          opacity: 0.6,
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Welcome to Shefa Bakery
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          Freshly Baked Delights Every Day!
        </p>
        <div className="space-x-4">
          <button className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600">
            Order Now
          </button>
          <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300">
            View Price List
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
