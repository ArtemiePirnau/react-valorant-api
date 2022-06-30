import React from "react";
import { useContext } from "react";
import { AppLevelContext } from "../../context/AppLevelContext";
import AgentItem from "../AgentItem/AgentItem";
import "./AgentsList.scss";

const AgentsList = () => {
  const { info } = useContext(AppLevelContext);
  return (
    <ul className="menu__list">
      <div className="container">
        <div className="menu__list-inner">
          {info.map((info, idx) => (
            <AgentItem info={info} key={idx} />
          ))}
        </div>
      </div>
    </ul>
  );
};

export default AgentsList;
