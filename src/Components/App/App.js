import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Agents from "../Agents/Agents";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Weapons from "../Weapons/Weapons";
import Maps from "../Maps/Maps";
import "../../../assets/main.scss";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/weapons" element={<Weapons />} />
          <Route path="/maps" element={<Maps />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
