import React from "react";
import useApps from "../../hooks/useApps";
import { FiDownload } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { FaS } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

const AllApps = () => {
  const { apps } = useApps();
  //   const { downloads, image, title, ratingAvg } = apps;
  return (
    <div className="bg-[#f5f5f5] py-16">
      <h1 className="md:text-2xl lg:text-4xl font-bold text-center">
        Our All Application
      </h1>
      <p className="text-center mt-4 text-gray-600 text-sm md:text-base">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      <div className="container mx-auto">
        {/* input search & Apps Found */}
        <div className="flex justify-between pt-16 px-5 ">
          <div className="hidden md:flex ">
            <h2 className=" text-gray-600 font-bold ">
              ({apps.length}) Apps Found
            </h2>
          </div>
          <div className="relative justify-center mx-auto md:mx-0">
            <input
              type="search"
              placeholder="Search Apps..."
              className="border border-gray-300 rounded-md py-2 px-4 pr-10 focus:outline-none "
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <FaSearch />
            </span>
          </div>
        </div>
        {/* All Apps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-8 container mx-auto ">
          {/* single card */}
          {apps.map((app) => {
            console.log(app.title);
            <div className=" rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden ">
              {/* Image Section */}
              <div className="w-full aspect-[4/3] bg-gray-200 flex items-center justify-center">
                {app.image ? (
                  <img src={app.image} alt={app.title} className=" w-28 " />
                ) : (
                  <div className="text-gray-400 text-sm">No Image</div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-3 flex flex-col  text-center">
                <h3 className="text-sm sm:text-base font-semibold text-gray-800">
                  {app.title}
                </h3>

                <div className="mt-2 flex  justify-between gap-2">
                  {/* Downloads */}
                  <div className="flex items-center bg-green-50 text-green-600 px-2 py-1 rounded-md text-xs sm:text-sm font-medium">
                    <FiDownload className="w-4 h-4 mr-1" />
                    {app.downloads}
                  </div>

                  {/* Rating */}
                  <div className="flex items-center bg-orange-50 text-orange-500 px-2 py-1 rounded-md text-xs sm:text-sm font-medium">
                    <AiFillStar className="w-4 h-4 mr-1" />
                    {app.ratingAvg}
                  </div>
                </div>
              </div>
            </div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default AllApps;
