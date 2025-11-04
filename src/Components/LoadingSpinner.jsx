import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-white/80 z-50">
      <div className="w-8 h-8 border-4 border-t-transparent border-[#00d390] rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
