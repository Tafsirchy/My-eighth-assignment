import React from 'react';
import AppError from '../assets/AppError.png';

const AppsNotfound = () => {
    return (
      <div>
        <div>
          <div className="flex flex-col justify-center items-center p-2 space-y-1 mt">
            <img className="w-85 h-78" src={AppError} alt="" />
            <h1 className="text-[40px] font-semibold">OPPS!! APP NOT FOUND</h1>
            <p className="text-xl text-gray-500">
              The App you are requesting is not found on our system. please try
              another apps
            </p>
            <button
              onClick={() => (window.location.href = "/apps")}
              to="/apps"
              className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-bold hover:from-[#7446E8] hover:to-[#AE7AF6] border-none flex gap-2 rounded-lg items-center duration-200 hover:scale-105"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    );
};

export default AppsNotfound;