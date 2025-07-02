import React from 'react';
import { Outlet } from 'react-router-dom';

const Projects = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Our Projects</h1>
      <Outlet />
    </div>
  );
};

export default Projects;
