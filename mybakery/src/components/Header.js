import React from "react";
import logo from "../assets/shefa.png";

const Header = () => {
  return (
    <header className="bg-pink-200 fixed top-0 left-0 w-full shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo and Bakery Name */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Shefa Bakery Logo"
            className="w-10 h-10 rounded-full" // Adjust the size of the logo
          />
          <h1 className="ml-2 text-2xl font-bold text-gray-800">
            Shefa Bakery
          </h1>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#home"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
