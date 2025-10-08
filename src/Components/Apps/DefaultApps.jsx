import React from "react";
import { FcRating } from "react-icons/fc";
import { GoDownload } from "react-icons/go";

const DefaultApps = ({ apps }) => {
  //destructure apps
  const { downloads, id, image, title, ratings } = apps;
  return (
    <div className="card bg-base-100  shadow-sm p-4">
      <img className="w-16 mx-auto" src={image} alt="Shoes" />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        <div className="flex justify-between">
          <div className="badge badge-outline text-xl">
            <GoDownload />
            {downloads}
          </div>
          <div className="badge badge-outline text-xl">
            {" "}
            <FcRating />
            {/* {ratings} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultApps;
