import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact"; // Corrected the import
import "./output.css";

const App = () => {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Sections */}
      <main className="pt-20">
        {/* Add padding-top to account for the fixed header */}
        <section id="home">
          <Hero />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="about">
          <AboutUs />
        </section>
        <section id="contact">
          <Contact />
        </section>
        {/* Add more sections like Contact, etc. */}
      </main>
    </div>
  );
};

export default App;
