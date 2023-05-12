import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Explore from "./pages/Explore/Explore";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="content">
          <Routes>
            {/* ---------- RECIPES ---------- */}
            <Route path="/" element={<Home />} />

            {/* ---------- EXPLORE ---------- */}
            <Route path="/explore" element={<Explore />} />
          </Routes>
          <footer style={{ height: "500px" }}></footer>
        </div>
      </div>
    </Router>
  );
};

export default App;
