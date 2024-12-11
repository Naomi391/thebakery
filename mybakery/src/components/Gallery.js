import React, { useState, useEffect } from "react";

const Gallery = () => {
  const imageData = [
    { src: "/assets/images/cakes/pic1.jpg", alt: "Cake 1" },
    { src: "/assets/images/cakes/pic2.jpg", alt: "Cake 2" },
    { src: "/assets/images/cakes/pic3.jpg", alt: "Cake 3" },
    { src: "/assets/images/cakes/pic4.jpg", alt: "Cake 4" },
    { src: "/assets/images/cakes/pic5.jpg", alt: "Cake 5" },
    { src: "/assets/images/cakes/pic6.jpg", alt: "Cake 6" },
    { src: "/assets/images/cakes/pic7.jpg", alt: "Cake 7" },
    { src: "/assets/images/cakes/pi8.jpg", alt: "Cake 8" },
    { src: "/assets/images/cakes/pic9.jpg", alt: "Cake 9" },
    { src: "/assets/images/cakes/pic10.jpg", alt: "Cake 10" },
    { src: "/assets/images/cakes/pic11.jpg", alt: "Cake 11" },
    { src: "/assets/images/cakes/pic12.jpg", alt: "Cake 12" },
    { src: "/assets/images/cakes/pic13.jpg", alt: "Cake 13" },
    { src: "/assets/images/cakes/pic14.jpg", alt: "Cake 14" },
    { src: "/assets/images/cakes/pic15.jpg", alt: "Cake 15" },
    { src: "/assets/images/cakes/pic16.jpg", alt: "Cake 16" },
    { src: "/assets/images/cakes/pic17.jpg", alt: "Cake 17" },
    { src: "/assets/images/cakes/pic18.jpg", alt: "Cake 18" },
    { src: "/assets/images/cakes/pic19.jpg", alt: "Cake 19" },
    { src: "/assets/images/cakes/pic20.jpg", alt: "Cake 20" },
  ];

  // Set state for current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically slide images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]);

  // Function to go to the next image
  const nextImage = () => {
    if (currentIndex < imageData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop back to the first image
    }
  };

  // Function to go to the previous image
  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(imageData.length - 1); // Loop back to the last image
    }
  };

  return (
    <section
      id="gallery"
      className="py-16 px-6 sm:px-16 lg:px-32 bg-gray-100 relative"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-pink-600 mb-8">
          Our Gallery
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Explore some of our delicious creations!
        </p>

        {/* Image Carousel Container */}
        <div className="relative">
          <div className="flex overflow-hidden justify-center items-center">
            {/* Left Arrow */}
            <button
              className="absolute left-0 z-10 text-white bg-pink-500 p-2 rounded-full hover:bg-pink-600"
              onClick={prevImage}
            >
              &#8592;
            </button>

            {/* Image */}
            <div className="w-64 h-40 flex-shrink-0 mx-4 bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={imageData[currentIndex].src}
                alt={imageData[currentIndex].alt}
                className="w-full h-full object-cover rounded-lg"
              />
              <p className="text-gray-600 text-center mt-4">
                {imageData[currentIndex].alt}
              </p>
            </div>

            {/* Right Arrow */}
            <button
              className="absolute right-0 z-10 text-white bg-pink-500 p-2 rounded-full hover:bg-pink-600"
              onClick={nextImage}
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
