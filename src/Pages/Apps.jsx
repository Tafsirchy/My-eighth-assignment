import React, { useState } from "react";
import useApps from "../Hooks/useApps";
import AppCard from "../Components/AppCard";

const Apps = () => {
  const { apps } = useApps();

  const [search, setSearch] = useState("");

  const term = search.trim().toLocaleLowerCase();

  const searchedApps = term
    ? apps.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : apps;

  return (
    <div className="container mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold pb-4">Our All Applications</h1>
        <p className="text-xl text-gray-500">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="mb-4 flex  items-center justify-between ">
        <p className="text-2xl font-semibold ">
          ({searchedApps.length}) Apps Found
        </p>
        <label className="input w-50">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            required
            placeholder="Search Apps"
          />
        </label>
      </div>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {searchedApps.map((app) => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apps;
