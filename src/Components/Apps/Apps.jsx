import React from "react";
import useApps from "../../hooks/useApps";
import { GoDownload } from "react-icons/go";
import { FcRating } from "react-icons/fc";
import DefaultApps from "./DefaultApps";
import Button from "../Button/Button";
import { Link } from "react-router";
import loaderImg from "/logo.png";
const Apps = () => {
  const { apps, loading, error } = useApps();
  // Default 8 Apps shown
  const defaultApps = [...apps]
    .sort((a, b) => b.downloads - a.downloads)
    .slice(0, 8);

  //   Loader state
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-6xl">
        <img
          className="loading loading-spinner text-6xl"
          src={loaderImg}
          alt=""
        />
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500 text-center">Error: {error.message}</p>;
  }

  return (
    <div className="py-8  bg-[#f5f5f5] ">
      <h1 className="text-xl font-bold md:text-2xl lg:text-4xl text-center">
        Trending Apps
      </h1>
      <p className="text-center text-sm md:text-base py-2">
        Explore All Trending Apps on the Market developed by us
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
