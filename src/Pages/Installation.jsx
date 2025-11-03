import React, { useEffect, useState } from "react";

const Installation = () => {
  const [installed, setInstalled] = useState([]);
  const [sortApps, setSortApps] = useState("none");

  useEffect(() => {
    const installedApps = JSON.parse(localStorage.getItem("installed"));
    if (installedApps) {
      setInstalled(installedApps);
    }
  }, []);

  const parseDownloads = (downloads) => {
    const num = parseFloat(downloads);
    if(downloads.toLowerCase().includes("k")) return num * 1000;
    else if(downloads.toLowerCase().includes("m")) return num * 1000000;
  };

  const sortedApps = () => {
    if (sortApps === "downloads-asc") {
      return [...installed].sort(
        (a, b) => parseDownloads(a.downloads) - parseDownloads(b.downloads)
      );
    } 
    else if (sortApps === "downloads-desc") {
      return [...installed].sort(
        (a, b) => parseDownloads(b.downloads) - parseDownloads(a.downloads)
      );
    } else {
      return installed;
    }
  }

  return (
    <div>
      <div className="flex justify-between py-5 items-center">
        <h1 className="text-3xl font-semibold">
          {installed.length} Apps Found
        </h1>
        <label className="form-control w-full max-w-xs">
          <select
            className="select select-bordered"
            value={sortApps}
            onChange={(e) => setSortApps(e.target.value)}
          >
            <option value="none">Sort by downloads</option>
            <option value="downloads-asc">Low-&gt;High</option>
            <option value="downloads-desc">High-&gt;Low</option>
          </select>
        </label>
      </div>
      <div className="space-y-6 ">
        {sortedApps().map((inst) => (
          <div className="flex justify-between items-center bg-white">
            <div className="flex flex-row justify-baseline items-center space-x-4 p-2">
              <div>
                <img
                  className="w-28 h-28 rounded-lg shadow"
                  src={inst.image}
                  alt={inst.title}
                />
              </div>
              <div className="space-y-4">
                <h1>{inst.title}</h1>
                <div className="flex gap-5">
                  <div className="text-[#00d390] flex items-center justify-start gap-2">
                    <img
                      className="w-4 h-4"
                      src={"/assets/icon-downloads.png"}
                      alt=""
                    />
                    <p className="font-semibold">{inst.downloads}</p>
                  </div>
                  <div className=" text-[#ff8811] flex items-center justify-start gap-2">
                    <img
                      className="w-4 h-4"
                      src="/assets/icon-ratings.png"
                      alt=""
                    />
                    <p className="font-semibold">{inst.ratingAvg}</p>
                  </div>
                  <div className="text-4 text-gray-500">{inst.size} MB</div>
                </div>
              </div>
            </div>
            <div className="p-2">
              <button
                // onClick={handleInstalled}
                className="btn bg-[#00d390] text-xl font-semibold text-white hover:bg-cyan-500 transition-all duration-300"
              >
                Uninstall
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
