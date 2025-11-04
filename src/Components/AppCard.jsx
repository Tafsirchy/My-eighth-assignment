import { Download, Star } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router";

const AppCard = ({ app }) => {
  const { title, image, downloads, ratingAvg, id } = app;
  // console.log(app);
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/apps/${id}`)}
      className="card bg-base-100 shadow-2xl cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300"
    >
      <figure className="h-60 p-4 ">
        <img
          className="h-full w-full rounded-lg shadow-md"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title mb-4 font-bold text-2xl">{title}</h2>
        <div className="flex justify-between gap-2 ">
          <div className="bg-[#f1f5e8] font-bold text-xl p-2 lg:py-2 lg:px-3 text-[#00d390] rounded-lg flex items-center gap-1 md:gap-2 lg:gap-2">
            <Download size={20} strokeWidth={3} />
            {downloads}
          </div>
          <div className="bg-[#fff0e1] p-2 lg:py-2 lg:px-3 text-[#ff8811] rounded-lg flex items-center gap-1 md:gap-2 lg:gap-2 font-bold text-xl">
            <img className="w-5 h-5" src="/assets/icon-ratings.png" alt="" />
            {ratingAvg}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
