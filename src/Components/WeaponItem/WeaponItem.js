import React from "react";
import "./WeaponItem.scss";

const WeaponItem = ({ info }) => {
  return (
    <li className="weapon__item">
      <h3 className="agent__name">{info.displayName}</h3>
      <img className="agent__icon" src={info.displayIcon} />
    </li>
  );
};

export default WeaponItem;
