import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/Home';
import About from './pages/About';
// Import other pages as needed

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        {/* Add other routes inside Layout here */}
      </Route>
    </Routes>
  );
};

export default App;
