import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";

const InstallationApps = ({ app, handleUninstallApp }) => {
  return (
    <div>
      <div
        key={app.id}
        className="bg-white rounded-md shadow-sm border border-gray-100 flex flex-col sm:flex-row justify-between items-center sm:items-center p-4 sm:p-5 hover:shadow transition"
      >
        {/* Left Section */}
        <div className="flex items-center gap-4 w-full sm:w-auto">
          {/* App Image */}
          <div className="w-14 h-14 sm:w-16 sm:h-16  rounded-md flex-shrink-0">
            <img src={app.image} alt="" />
          </div>

          {/* App Info */}
          <div>
            <h3 className="text-gray-800 font-medium text-sm sm:text-base md:text-lg">
              {app.title}
            </h3>

            <div className="flex items-center gap-3 mt-1 text-sm sm:text-base">
              <div className="flex items-center gap-1 text-green-600">
                <FiDownload className="w-4 h-4" />
                <span className="text-gray-800">{app.downloads}</span>
              </div>

              <div className="flex items-center gap-1 text-yellow-500">
                <AiFillStar className="w-4 h-4" />
                <span className="text-gray-800">{app.ratingAvg}</span>
              </div>

              <span className="text-gray-500">{app.size} MB</span>
            </div>
          </div>
        </div>

        {/* Right Button */}
        <button
          onClick={() => handleUninstallApp(app.id)}
          className="mt-3 sm:mt-0 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium px-4 py-1.5 rounded-md transition"
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstallationApps;
