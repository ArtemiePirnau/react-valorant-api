import React, { useState, createContext } from "react";
import axios from "axios";

export const AppLevelContext = createContext();

const API = "https://valorant-api.com/v1";

const AppLevelProvider = ({ children }) => {
  
  const [info, setInfo] = useState([]);

  const fetchData = async (url) => {
    const response = await axios.get(`${API}${url}`);
    setInfo(response.data.data);
  };

  return (
    <AppLevelContext.Provider
      value={{
        info,
        fetchData,
        setInfo,
      }}
    >
      {children}
    </AppLevelContext.Provider>
  );
};
export default AppLevelProvider;
