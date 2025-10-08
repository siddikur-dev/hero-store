import React from "react";
import useApps from "../hooks/useApps";
import { useParams } from "react-router";
import { AiFillStar } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import RatingChart from "./RatingChart";

const AppDetails = () => {
  const { id } = useParams();
  const appDetailsId = parseInt(id);
  const { apps } = useApps();
  const singleApp = apps.find((app) => app.id === appDetailsId);
  const {
    image,
    title,
    description,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    size,
    ratings,
  } = singleApp || {};

  return (
    <div className="p-5 sm:p-8 bg-[#f5f5f5]">
      {/* container  */}
      <div className="container mx-auto ">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 border-b border-gray-200 pb-6">
          {/* Left Image */}
          <div className="w-24 sm:w-36 md:w-44 lg:w-48 flex-shrink-0">
            <img
              src={image}
              alt={title}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Right Details */}
          <div className="flex-1 space-y-3 text-center md:text-left">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900">
              {title}
            </h1>
            <p className="text-gray-500 text-sm sm:text-base">
              Developed by{" "}
              <span className="text-indigo-600 font-medium">{companyName}</span>
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-8 pt-2">
              <div className="flex flex-col items-center">
                <FiDownload className="text-green-600 w-6 h-6  mb-1" />
                <p className="text-xs sm:text-sm md:text-base text-gray-500">
                  Downloads
                </p>
                <p className="font-semibold text-gray-800 text-base sm:text-lg md:text-2xl lg:text-3xl">
                  {downloads}
                </p>
              </div>

              <div className="flex flex-col items-center">
                <AiFillStar className="text-yellow-500 w-6 h-6 mb-1" />
                <p className="text-xs sm:text-sm md:text-base text-gray-500">
                  Average Ratings
                </p>
                <p className="font-bold text-gray-800 text-base sm:text-lg md:text-2xl lg:text-3xl">
                  {ratingAvg}
                </p>
              </div>

              <div className="flex flex-col items-center">
                <span className="text-purple-600 text-2xl font-bold leading-none mb-1">
                  💬
                </span>
                <p className="text-xs sm:text-sm md:text-base text-gray-500">
                  Total Reviews
                </p>
                <p className="font-bold text-gray-800 text-base sm:text-lg md:text-2xl lg:text-3xl">
                  {reviews}
                </p>
              </div>
            </div>

            {/* Install Button */}
            <div className="pt-4">
              <button className="bg-green-500 text-white font-medium px-6 py-2.5 rounded-md hover:bg-green-600 transition-all text-sm sm:text-base cursor-pointer">
                Install Now ({size})
              </button>
            </div>
          </div>
        </div>
        {/* Ratings Section */}
        <RatingChart ratings={ratings} />
        <div className="py-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Description
          </h2>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
