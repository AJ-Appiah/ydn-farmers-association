import React from "react";
import { Outlet } from "react-router-dom";

const Partners = () => {
  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold mb-4">Partnerships</h1>
      <Outlet />
    </section>
  );
};
export default Partners;
