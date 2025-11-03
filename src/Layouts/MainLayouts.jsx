import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const MainLayouts = () => {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar></Navbar>
        <div className="bg-gray-100 flex-1 max-w-screen w-full px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 mx-auto">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default MainLayouts;