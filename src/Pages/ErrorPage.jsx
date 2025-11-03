import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
      <div>
        <div className="flex flex-col justify-center items-center p-10 space-y-6">
          <img className="w-90 h-90" src="/assets/error-404.png" alt="" />
          <h1 className="text-5xl font-semibold">Oops, page not found!</h1>
          <p className="text-xl text-gray-500">
            The page you are looking for is not available.
          </p>
          <Link to="/" className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-bold hover:from-[#7446E8] hover:to-[#AE7AF6] border-none flex gap-2 rounded-lg items-center duration-200 hover:scale-105">
            Go Back
          </Link>
        </div>
      </div>
    );
};

export default ErrorPage;