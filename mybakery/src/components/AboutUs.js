import React from "react";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-r from-pink-200 via-white to-pink-200 py-16 px-6 sm:px-16 lg:px-32"
    >
      <div className="container mx-auto max-w-6xl bg-white rounded-3xl shadow-lg p-12 border-t-8 border-pink-400">
        {/* Flexbox Layout for Image and Content */}
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center items-center p-4">
            <img
              src="/assets/images/img.jpg" // Update with your cake image path
              alt="Beautiful Cake"
              className="rounded-3xl shadow-md w-full md:w-auto max-h-96 object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
            <h2 className="text-5xl font-extrabold text-pink-600 mb-6 leading-tight text-center">
              About Us
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Welcome to{" "}
              <span className="text-pink-600 font-semibold">Shefa Bakery</span>,
              where every bake is crafted with abudant love and care. We
              specialize in creating delightful cakes and cupcakes that bring
              joy to every occasion.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Our mission is to provide fresh, high-quality baked cakes and
              cupcakes made from the finest ingredients. Whether you're
              celebrating a special moment or simply indulging in a sweet treat,
              Shefa Bakery is here to make your day extraordinary.
            </p>
            <p className="text-pink-600 text-lg font-medium">
              "Abundance in taste."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
