import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Footer from '../Components/Footer';
import { ToastContainer } from 'react-toastify';
import LoadingSpinner from '../Components/LoadingSpinner';



const MainLayouts = () => {
  const navigation = useNavigation();
  const location = useLocation();
  const [loadingPage, setLoadingPage] = useState(false);

  const NavigationLoading = navigation.state === 'loading';

  useEffect(() => {
    setLoadingPage(true);
    const timer = setTimeout(() => {
      setLoadingPage(false);
    },400)
    return () => clearTimeout(timer);
  }, [location.pathname]);


  const isLoading = NavigationLoading || loadingPage;

    return (
      <div className="relative flex flex-col min-h-screen">
        <Navbar></Navbar>
        {isLoading && <LoadingSpinner></LoadingSpinner>}
        <div className="bg-gray-100 flex-1 max-w-screen w-full px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
        <ToastContainer></ToastContainer>
      </div>
    );
};

export default MainLayouts;