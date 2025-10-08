import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FcRating } from "react-icons/fc";
import { FiDownload } from "react-icons/fi";
import { GoDownload } from "react-icons/go";

const DefaultApps = ({ apps }) => {
  //destructure apps object
  const { downloads, image, title, ratingAvg } = apps;
  return (
    <div className=" rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden">
      {/* Image Section */}
      <div className="w-full aspect-[4/3] bg-gray-300 flex items-center justify-center">
        {image ? (
          <img src={image} alt={title} className=" w-28 " />
        ) : (
          <div className="text-gray-400 text-sm">No Image</div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-3 flex flex-col  text-center">
        <h3 className="text-sm sm:text-base font-semibold text-gray-800">
          {title}
        </h3>

        <div className="mt-2 flex  justify-between gap-2">
          {/* Downloads */}
          <div className="flex items-center bg-green-50 text-green-600 px-2 py-1 rounded-md text-xs sm:text-sm font-medium">
            <FiDownload className="w-4 h-4 mr-1" />
            {downloads}
          </div>

          {/* Rating */}
          <div className="flex items-center bg-orange-50 text-orange-500 px-2 py-1 rounded-md text-xs sm:text-sm font-medium">
            <AiFillStar className="w-4 h-4 mr-1" />
            {ratingAvg}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultApps;
