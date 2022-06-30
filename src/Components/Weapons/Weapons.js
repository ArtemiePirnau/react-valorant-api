import React from "react";
import { useContext, useEffect } from "react";
import WeaponsList from "../WeaponsList/WeaponsList";
import { AppLevelContext } from "../../context/AppLevelContext";

const Weapons = () => {
  const { fetchData } = useContext(AppLevelContext);

  useEffect(() => {
    fetchData("/weapons");
  }, []);

  return <WeaponsList />;
};
export default Weapons;
