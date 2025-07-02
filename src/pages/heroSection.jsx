import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/images/hero.jpg'; // Replace with actual image

const HeroSection = () => {
  return (
    <section
      className="relative h-[80vh] md:h-[90vh] bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center items-start px-4 text-left">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[--color-ydn-yellow] drop-shadow-lg">
          Empowering Farmers, Growing Futures
        </h1>
        <p className="mt-4 text-lg md:text-2xl max-w-2xl text-white">
          We are a community of rice farmers in Adansi South using sustainable and modern practices to build a better future.
        </p>
        <Link
          to="/about/key-team"
          className="mt-6 inline-block px-6 py-3 rounded-full bg-[--color-ydn-green] text-white font-semibold hover:bg-[--color-ydn-orange] transition"
        >
          Learn More About Us
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
