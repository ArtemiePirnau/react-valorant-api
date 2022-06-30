import React from "react";
import { useContext } from "react";
import { AppLevelContext } from "../../context/AppLevelContext";
import WeaponItem from "../WeaponItem/WeaponItem";
import "./WeaponsList.scss";

const WeaponsList = () => {
  const { info } = useContext(AppLevelContext);
  return (
    <ul className="menu__list">
      <div className="container">
        <div className="menu__list-inner">
          {info.map((info, idx) => (
            <WeaponItem info={info} key={idx} />
          ))}
        </div>
      </div>
    </ul>
  );
};

export default WeaponsList;
