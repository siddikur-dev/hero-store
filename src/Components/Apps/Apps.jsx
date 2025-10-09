import React from "react";
import useApps from "../../hooks/useApps";
import { GoDownload } from "react-icons/go";
import { FcRating } from "react-icons/fc";
import DefaultApps from "./DefaultApps";
import Button from "../Button/Button";
import { Link } from "react-router";
import loaderImg from "/logo.png";
import ImageLoader from "../ImageLoader";
const Apps = () => {
  const { apps, loading } = useApps();
  // Default 8 Apps shown
  const defaultApps = [...apps]
    .sort((a, b) => b.downloads - a.downloads)
    .slice(0, 8);

  // loading spinner applied
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
    <div className="py-8  bg-[#f5f5f5] ">
      <h1 className="text-xl font-bold md:text-2xl lg:text-4xl text-center">
        Trending Apps
      </h1>
      <p className="text-center text-sm md:text-base p-2">
        Explore All Trending Apps on the Market developed by us.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-8 container mx-auto ">
        {defaultApps.map((apps) => (
          <DefaultApps apps={apps} key={apps.id}></DefaultApps>
        ))}
      </div>
      <Button className="mx-auto flex btn ">
        <Link to={"/apps"}>Show All</Link>
      </Button>
    </div>
  );
};

export default Apps;
