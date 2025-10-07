import React from "react";
import useApps from "../../hooks/useApps";

const Apps = () => {
  const { apps } = useApps();
  console.log(apps);
  return <div>Aps</div>;
};

export default Apps;
