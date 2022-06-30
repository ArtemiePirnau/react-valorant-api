import React from "react";
import { useContext } from "react";
import { AppLevelContext } from "../../context/AppLevelContext";
import MapsItem from "../MapsItem/MapsItem";
import "./MapsList.scss";

const MapsList = () => {
  const { info } = useContext(AppLevelContext);
  return (
    <ul className="menu__list">
      <div className="container">
        <div className="menu__list-inner">
          {info.map((info, idx) => (
            <MapsItem info={info} key={idx} />
          ))}
        </div>
      </div>
    </ul>
  );
};

export default MapsList;
