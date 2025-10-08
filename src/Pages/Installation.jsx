import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import useApps from "../hooks/useApps";
import InstallationApps from "./InstallationApps";
import { getStoredInstalledApps } from "../Utility/AddToLS";
import loaderImg from "../assets/logo.png";
import ImageLoader from "../Components/ImageLoader";
const Installation = () => {
  const { apps, loading } = useApps();
  //state set installedApps Data
  const [installedApps, setInstalledApps] = useState([]);
  //fetch Apps
  useEffect(() => {
    const storedApps = getStoredInstalledApps();
    const myApps = apps.filter((app) => storedApps.includes(app.id));
    setInstalledApps(myApps);
  }, [apps]);
  //sort set readList Book Data
  const [sort, setSort] = useState("");

  //sort function
  const handleSort = (type) => {
    const sortedList = [...installedApps];
    setSort(type);
    if (type === "High") {
      sortedList.sort((a, b) => b.size - a.size);
    } else if (type === "Low") {
      sortedList.sort((a, b) => a.size - b.size);
    }
    setInstalledApps(sortedList);
  };

  //loading spinner 
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-5xl">
        L{" "}
        <ImageLoader
          className="loading loading-spinner w-2"
          src={loaderImg}
          alt=""
        />
        ading...
      </div>
    );
  }
  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4 sm:px-6 lg:px-12">
      <div className="container mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 ">
          <p className="text-gray-500 text-sm sm:text-base text-center md:text-left">
            Explore All Trending Apps on the Market developed by us
          </p>
          {/* Sort By Dropdown */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">
              Sort By: {sort ? sort : "Select"}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <button onClick={() => handleSort("High")}>High - Low </button>
              </li>
              <li>
                <button onClick={() => handleSort("Low")}>Low - High</button>
              </li>
            </ul>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
          {installedApps.length} Apps Found
        </h2>

        {/* App List */}
        <div className="space-y-4">
          {installedApps.map((app) => (
            <InstallationApps key={app.id} app={app} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Installation;
