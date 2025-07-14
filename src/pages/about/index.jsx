import React from "react";
import { Outlet } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">About YDN Farmers Association</h1>
      {/* Navigation Links (Optional) */}
      <div className="flex gap-4 mb-4">
        <a href="/about/key-team" className="text-blue-600 hover:underline">
          Key Team
        </a>
        <a href="/about/subteam" className="text-blue-600 hover:underline">
          Sub Team
        </a>
        <a href="/about/board" className="text-blue-600 hover:underline">
          Board
        </a>
      </div>
      {/* 🔥 This is where nested routes will show up */}
      <Outlet />{" "}
    </div>
  );
};

export default AboutPage;
