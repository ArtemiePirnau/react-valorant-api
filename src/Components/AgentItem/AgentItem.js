import React from "react";
import "./AgentItem.scss";

const AgentItem = ({ info }) => {
  return (
    <li className="menu__item">
      <img className="agent__image" src={info.fullPortraitV2} alt="" />
      <h3 className="agent__name">{info.displayName}</h3>
    </li>
  );
};

export default AgentItem;
