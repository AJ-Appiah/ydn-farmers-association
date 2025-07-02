import React from 'react';
import { FaFacebookF, FaYoutube } from 'react-icons/fa';
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';
import logo from '../assets/images/logo.png'; // Adjust path as needed

const Footer = () => {
  return (
    <footer className="bg-ydn-dark text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <img src={logo} alt="YDN Logo" className="h-12 mb-3" />
          <p className="text-sm">
            YDN Farmers Association is committed to empowering smallholder farmers in Adansi South, Ghana through sustainable farming practices, mechanization, and agroforestry.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[--color-ydn-yellow]">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-[--color-ydn-yellow]">Home</a></li>
            <li><a href="/about/key-team" className="hover:text-[--color-ydn-yellow]">About Us</a></li>
            <li><a href="/projects/farmers" className="hover:text-[--color-ydn-yellow]">Projects</a></li>
            <li><a href="/news" className="hover:text-[--color-ydn-yellow]">News</a></li>
            <li><a href="/gallery" className="hover:text-[--color-ydn-yellow]">Gallery</a></li>
            <li><a href="/contact" className="hover:text-[--color-ydn-yellow]">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[--color-ydn-yellow]">Contact Us</h3>
          <ul className="text-sm space-y-3">
            <li className="flex items-start gap-2">
              <MapPinIcon className="h-5 w-5 text-[--color-ydn-yellow]" />
              <span>Asarekrom, Adansi South District, Ashanti Region, Ghana</span>
            </li>
            <li className="flex items-center gap-2">
              <PhoneIcon className="h-5 w-5 text-[--color-ydn-yellow]" />
              <span>+233 55 555 5555</span>
            </li>
            <li className="flex items-center gap-2">
              <EnvelopeIcon className="h-5 w-5 text-[--color-ydn-yellow]" />
              <span>info@ydnfarmers.org</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[--color-ydn-yellow]">Follow Us</h3>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF className="h-5 w-5 hover:text-[--color-ydn-green]" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <FaYoutube className="h-5 w-5 hover:text-[--color-ydn-orange]" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[--color-ydn-green] text-center py-3 text-sm">
        © {new Date().getFullYear()} YDN Farmers Association. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
