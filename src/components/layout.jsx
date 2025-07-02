import React from 'react';
import TopBanner from './topBanner';
import Navbar from './navbar';
import Footer from './footer';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <>
    <TopBanner />
    <Navbar />
    <main className="min-h-screen">
      <Outlet />
    </main>
    <Footer />
  </>
);

export default Layout;
