import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-transparent text-white py-4 shadow-lg relative z-[2]">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide trade">
          TRADEVISION
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to={"/"}>
              <a href="#" className="text-white hover:text-caribbeangreen-600 transition-colors duration-200">
                Home
              </a>
          </Link>
          <a href="#features" className="text-white hover:text-caribbeangreen-600 transition-colors duration-200">
            About Us
          </a>
          <a href="#contact" className="text-white hover:text-caribbeangreen-600 transition-colors duration-200">
            Contact
          </a>
        </nav>

        {/* Call to Action Button */}
        <Link to={"/login"}>
          <div className="hidden md:block">
            <a
              href="#get-started"
              className="px-5 py-2 rounded-full text-white font-semibold hover:bg-red-600 transition-colors duration-200 btn" linkto={"/signup"}
            >
              Get Started
            </a>
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none text-white hover:text-[#D7263D]">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div> 
    </header>
  );
}




