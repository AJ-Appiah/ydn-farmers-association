import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import HomePage from "./pages/home";
import ContactPage from "./pages/contact";
import GalleryPage from "./pages/gallery";
import Partners from "./pages/partners";
import ProjectsPage from "./pages/projects";
import AboutPage from "./pages/about";
import NewsPage from "./pages/news";
// Import other pages as needed

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index="true" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="partners" element={<Partners />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        {/* Add other routes inside Layout here */}
      </Route>
    </Routes>
  );
};

export default App;
