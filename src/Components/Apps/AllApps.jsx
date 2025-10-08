import React from "react";
import useApps from "../../hooks/useApps";
import { FiDownload } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { FaS } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

const AllApps = () => {
  const { apps } = useApps();
  const { downloads, image, title, ratingAvg } = apps;
  return (
    <div className="bg-[#f5f5f5] py-16">
      <h1 className="md:text-2xl lg:text-4xl font-bold text-center">
        Our All Application
      </h1>
      <p className="text-center mt-4 text-gray-600 text-sm md:text-base">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      <div className="flex justify-between p-5 ">
        <div className="hidden md:flex ">
          <h2 className=" text-gray-600 font-bold ">
            ({apps.length}) Apps Found
          </h2>
        </div>
        {/* input search */}
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
    </div>
  );
};

export default AllApps;
