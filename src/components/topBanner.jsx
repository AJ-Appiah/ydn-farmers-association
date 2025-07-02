import React from "react";
import { PhoneIcon, ClockIcon } from "@heroicons/react/24/solid";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import logo from "../assets/images/logo.png";

const TopBanner = () => {
  return (
    <div className="bg-ydn-dark text-white py-3 px-4 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left: Logo & Org Name */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="YDN Logo" className="h-12 w-auto" />
          <div>
            <h1 className="text-lg font-bold leading-tight">
              YDN Farmers Association
            </h1>
            <p className="text-xs">Adansi South, Ghana</p>
          </div>
        </div>

        {/* Middle: Social Media */}
        <div className="flex flex-col md:flex-row items-center gap-2">
          <span className="text-sm md:mr-2">Follow Us</span>
          <div className="flex gap-3 text-white">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF className="w-4 h-4 hover:text-ydn-green" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <FaYoutube className="w-4 h-4 hover:text-ydn-green" />
            </a>
          </div>
        </div>

        {/* Right: Contact Info */}
        <div className="flex items-start gap-3 text-xs">
          <div className="flex-shrink-0 pt-1">
            <PhoneIcon className="w-6 h-6 text-ydn-green" />
          </div>
          <div>
            <div className="mb-1">+233 55 555 5555</div>
            <div>info@ydnfarmers.org</div>
          </div>
          <div className="hidden md:flex items-center gap-1 ml-6">
            <ClockIcon className="w-4 h-4 text-ydn-green" />
            <div>
              Mon – Fri: 8.00 – 17.00 <br />
              Sat & Sun: Closed
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
