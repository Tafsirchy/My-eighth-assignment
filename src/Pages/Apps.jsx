import React, { useEffect, useRef, useState } from "react";
import useApps from "../Hooks/useApps";
import AppCard from "../Components/AppCard";
import LoadingSpinner from "../Components/LoadingSpinner";
import AppsNotfound from "./AppsNotfound";

const Apps = () => {
  const { apps } = useApps();
  const [searching, setSearching] = useState(false);
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);

  const term = search.trim().toLocaleLowerCase();

  useEffect(() => {
    if (!term) {
      setSearching(false);
      return;
    }

    setSearching(true);
    const timer = setTimeout(() => {
      setSearching(false);
      searchInput.current?.focus();
    }, 400);

    return () => clearTimeout(timer);
  }, [term]);

  const searchedApps = term
    ? apps.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : apps;

  // if (searchedApps !== app) {
  //   console.log("searchedApps")
  // }

  return (
    <div>
      {searchedApps.length > 0 ? (
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold pb-4">Our All Applications</h1>
            <p className="text-xl text-gray-500">
              Explore All Apps on the Market developed by us. We code for
              Millions
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
                ref={searchInput}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                required
                placeholder="Search Apps"
              />
            </label>
            {searching && (
              <div className="absolute right-4 top-4">
                <LoadingSpinner size="sm" />
              </div>
            )}
          </div>
          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {searchedApps.map((app) => (
                <AppCard key={app.id} app={app}></AppCard>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <AppsNotfound></AppsNotfound>
      )}
    </div>
  );
};

export default Apps;
