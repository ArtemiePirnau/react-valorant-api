import React from "react";
import { useContext, useEffect } from "react";
import MapsList from "../MapsList/MapsList";
import { AppLevelContext } from "../../context/AppLevelContext";

const Maps = () => {
  const { fetchData } = useContext(AppLevelContext);

  useEffect(() => {
    fetchData("/maps");
  }, []);

  return <MapsList />;
};
export default Maps;
