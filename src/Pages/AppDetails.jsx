import React from "react";
import useApps from "../Hooks/useApps";
import { useNavigate, useParams } from "react-router";

const AppDetails = () => {
  const { apps, loading } = useApps();

  const navigate = useNavigate();

  const { id } = useParams();
  const app = apps.find((ap) => ap.id === parseInt(id));
  console.log(app);

  if (loading) return <h1>Loading...</h1>;
  if (!app) return <h1 className="text-center text-red-500">App not found</h1>;

  const {
    title,
    downloads,
    description,
    image,
    reviews,
    ratingAvg,
    companyName,
    size,
  } = app;

  return (
    <div className="container mx-auto py-10 text-center lg:text-start">
      <div className="flex flex-col text-center items-center justify-center lg:text-start lg:flex-row  lg:justify-start gap-10 ">
        <div className="w-[30%]">
          <img
            className="mx-auto rounded-lg w-88 h-88 shadow-xl"
            src={image}
            alt=""
          />
        </div>
        <div className="w-[70%]">
          <div className="pb-5 w-full border-b-1 border-gray-400">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="mt-1">
              <span className="text-xl text-gray-500">Developed by</span>{" "}
              <span className="text-xl text-[#743ce7] font-bold">
                {companyName}
              </span>
            </p>
          </div>
          <div className="flex gap-12 pt-5  pb-10">
            <div className="flex flex-col items-center lg:items-start justify-center">
              <img
                className="w-10 h-10"
                src="/assets/icon-downloads.png"
                alt=""
              />
              <p className="text-[#001931] text-4 pb-2 pt-3">Downloads</p>
              <h1 className="text-[#001931] text-4xl font-extrabold">
                {downloads}
              </h1>
            </div>
            <div className="flex flex-col items-center lg:items-start justify-center">
              <img
                className="w-10 h-10"
                src="/assets/icon-ratings.png"
                alt=""
              />
              <p className="text-[#001931] text-4 pb-2 pt-3">Average Ratings</p>
              <h1 className="text-[#001931] text-4xl font-extrabold">
                {ratingAvg}
              </h1>
            </div>
            <div className="flex flex-col items-center lg:items-start justify-center">
              <img className="w-10 h-10" src="/assets/icon-review.png" alt="" />
              <p className="text-[#001931] text-4 pb-2 pt-3">Total Reviews</p>
              <h1 className="text-[#001931] text-4xl font-extrabold">
                {reviews}
              </h1>
            </div>
          </div>
          <div>
            <button className="btn bg-[#00d390] text-xl font-semibold text-white hover:bg-cyan-500 transition-all duration-300">
              Install Now ({size} MB)
            </button>
          </div>
        </div>
      </div>
      <div className="border-b-1 border-gray-400 pt-10 w-full"></div>

      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-5">Description</h3>
        <p className="text-xl text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
