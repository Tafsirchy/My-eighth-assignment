import React from "react";
import { Link } from "react-router";
import AppCard from "../Components/AppCard";
import useApps from "../Hooks/useApps";
import Banner from "../Components/Banner";
const Home = () => {
  const { apps } = useApps();

  const featuredApps = apps.slice(0, 8);

  return (
    <div>
      <Banner></Banner>

      <div className="text-center mb-12 ">
        <h1 className="text-5xl font-bold pb-4">Trending Apps</h1>
        <p className="text-xl text-gray-500">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 container  mx-auto">
        {featuredApps.map((app) => (
          <AppCard key={app.id} app={app}></AppCard>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Link
          to="/apps"
          className="btn btn-primary mt-10 w-30 font-bold  text-white hover:scale-110 ease-in-out duration-500  "
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Home;
