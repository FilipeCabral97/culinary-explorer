import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Explore from "./pages/Explore/Explore";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import WorkInProgress from "./pages/WorkInProgress/WorkInProgress";
import { ModalContainer } from "./components/ModalContainer/ModalContainer";

const App = () => {
  const [showWorkInProgress, setShowWorkInProgress] = useState<boolean>(false);

  const handleContinue = () => {
    setShowWorkInProgress(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setShowWorkInProgress(true);
    }, 1500);
  }, []);

  return (
    <div>
      <ModalContainer>
        {showWorkInProgress && <WorkInProgress handleClose={handleContinue} />}
      </ModalContainer>

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
    </div>
  );
};

export default App;
