import React from "react";
import useApps from "../../hooks/useApps";
import { GoDownload } from "react-icons/go";
import { FcRating } from "react-icons/fc";
import DefaultApps from "./DefaultApps";
import Button from "../Button/Button";

const Apps = () => {
  const { apps } = useApps();
  const defaultApps = [...apps]
    .sort((a, b) => b.downloads - a.downloads)
    .slice(0, 8);

  return (
    <div className="my-8">
      <h1 className="text-xl font-bold md:text-2xl lg:text-4xl text-center">
        Trending Apps
      </h1>
      <p className="text-center text-sm md:text-base py-2">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-8 container mx-auto">
        {defaultApps.map((apps) => (
          <DefaultApps apps={apps} key={apps.id}></DefaultApps>
        ))}
      </div>
      <Button className="mx-auto flex btn ">Show All</Button>
    </div>
  );
};

export default Apps;
