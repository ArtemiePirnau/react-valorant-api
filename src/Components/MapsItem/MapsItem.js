import React from "react";
import "./MapsItem.scss";

const MapsItem = ({ info }) => {
  return (
    <li className="menu__item">
      <img className="map__image" src={info.splash} />
      <h3 className="agent__name">{info.displayName}</h3>
    </li>
  );
};

export default MapsItem;
