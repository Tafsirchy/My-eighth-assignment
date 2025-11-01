import { Download, Star } from "lucide-react";
import React from "react";

const AppCard = ({ app }) => {
  const { title, image, downloads, ratingAvg } = app;
  // console.log(app);
  return (
    <div className="card bg-base-100 shadow-2xl ">
      <figure className="h-60 p-4 ">
        <img
          className="h-full w-full rounded-lg shadow-md"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title mb-4 font-bold text-2xl">{title}</h2>
        <div className="flex justify-between ">
          <div className="bg-[#f1f5e8] font-bold text-xl py-2 px-3 text-[#00d390] rounded-lg flex items-center gap-2">
            <Download size={16} strokeWidth={3} />
            {downloads}
          </div>
          <div className="bg-[#fff0e1] py-2 px-3 text-[#ff8811] rounded-lg flex items-center gap-2 font-bold text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
            >
              <polygon
                fill="#ff8811"
                points="12,2 15,9 22,9 17,14 18.5,21 12,17.5 5.5,21 7,14 2,9 9,9"
              />
            </svg>

            {ratingAvg}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
