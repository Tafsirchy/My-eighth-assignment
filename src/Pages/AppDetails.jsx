import React, { useState, useEffect } from "react";
import useApps from "../Hooks/useApps";
import { useParams } from "react-router";
import {
  Bar,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  BarChart,
} from "recharts";
import { toast } from "react-toastify";
import AppsNotfound from "./AppsNotfound";

const AppDetails = () => {
  const { apps, loading } = useApps();
  const { id } = useParams();
  const app = apps.find((ap) => ap.id === parseInt(id));

  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const existingApps = JSON.parse(localStorage.getItem("installed")) || [];
    const found = existingApps.some((ap) => ap.id === app?.id);
    setIsInstalled(found);
  }, [app]);

  if (loading) return <h1>Loading...</h1>;
  if (!app) return <AppsNotfound></AppsNotfound>

  const {
    title,
    downloads,
    description,
    image,
    reviews,
    ratingAvg,
    companyName,
    size,
    ratings, // Make sure to destructure the ratings data from app
  } = app;

  const handleInstalled = () => {
    const existingApps = JSON.parse(localStorage.getItem("installed")) || [];
    const isDuplicate = existingApps.some((ap) => ap.id === app.id);

    if (isDuplicate) return toast.error("App already installed");

    const updatedApps = [...existingApps, app];
    localStorage.setItem("installed", JSON.stringify(updatedApps));
    setIsInstalled(true);
    toast.success("App installed successfully");
  };

  return (
    <div className="container mx-auto py-10 text-center lg:text-start">
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        <div className="w-[30%]">
          <img
            className="mx-auto rounded-lg shadow-xl lg:w-88 lg:h-88"
            src={image}
            alt={title}
          />
        </div>
        <div className="w-[70%]">
          <div className="pb-5 w-full border-b border-gray-400">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="mt-1">
              <span className="text-xl text-gray-500">Developed by </span>
              <span className="text-xl text-[#743ce7] font-bold">
                {companyName}
              </span>
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 pt-5 pb-10">
            <div className="flex flex-col items-center lg:items-start">
              <img
                className="w-10 h-10"
                src="/assets/icon-downloads.png"
                alt=""
              />
              <p className="text-[#001931] pb-2 pt-3">Downloads</p>
              <h1 className="text-[#001931] text-4xl font-extrabold">
                {downloads}
              </h1>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <img
                className="w-10 h-10"
                src="/assets/icon-ratings.png"
                alt=""
              />
              <p className="text-[#001931] pb-2 pt-3">Average Ratings</p>
              <h1 className="text-[#001931] text-4xl font-extrabold">
                {ratingAvg}
              </h1>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <img className="w-10 h-10" src="/assets/icon-review.png" alt="" />
              <p className="text-[#001931] pb-2 pt-3">Total Reviews</p>
              <h1 className="text-[#001931] text-4xl font-extrabold">
                {reviews}
              </h1>
            </div>
          </div>

          <button
            onClick={handleInstalled}
            disabled={isInstalled}
            className={`btn text-xl font-semibold text-white transition-all duration-300 ${
              isInstalled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#00d390] hover:bg-cyan-500"
            }`}
          >
            {isInstalled ? "Installed" : `Install Now (${size} MB)`}
          </button>
        </div>
      </div>

      <div className="border-b border-gray-400 pt-10 w-full"></div>

      <div className="text-center text-2xl font-bold mt-5">
        <p>Ratings</p>
      </div>
      <div className=" w-full mt-5 flex flex-col items-center justify-center">
        <ResponsiveContainer width="100%" aspect={1.618}>
          <BarChart
            data={ratings} // Use the ratings data directly
            layout="vertical" // Horizontal bars (left → right)
            margin={{
              top: 10,
              right: 5,
              left: 5,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis type="category" dataKey="name" width={50} />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="count" // Use the count as the bar length
              fill="#82ca9d"
              activeBar={<Rectangle fill="gold" stroke="purple" />}
              name="Number of Ratings"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-10 ml-2">
        <h3 className="text-2xl font-semibold mb-5">Description</h3>
        <p className="text-xl text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
