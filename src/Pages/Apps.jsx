import React from "react";
import useApps from "../Hooks/useApps";
import AppCard from "../Components/AppCard";

const Apps = () => {
  const { apps } = useApps();
  return (
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold pb-4">Our All Applications</h1>
        <p className="text-xl text-gray-500">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="mb-4 flex  items-center justify-between ">
        <p className="text-2xl font-semibold ">({apps.length}) Apps Found </p>
        <button className="btn text-2xl font-semibold">Search</button>
      </div>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {apps.map((app) => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apps;
