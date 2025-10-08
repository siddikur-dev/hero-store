import React from "react";
import useApps from "../hooks/useApps";
import { useParams } from "react-router";

const AppDetails = () => {
  const { id } = useParams();
  console.log(id);
  const { apps } = useApps();
  console.log(apps);
  return (
    <div>
      <h1>App Details</h1>
    </div>
  );
};

export default AppDetails;
