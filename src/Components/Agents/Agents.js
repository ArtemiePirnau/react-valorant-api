import React from "react";
import { useContext, useEffect } from "react";
import AgentsList from "../AgentsList/AgentsList";
import { AppLevelContext } from "../../context/AppLevelContext";

const Agents = () => {
  const { fetchData } = useContext(AppLevelContext);

  useEffect(() => {
    fetchData("/agents?isPlayableCharacter=true");
  }, []);

  return <AgentsList />;
};
export default Agents;
