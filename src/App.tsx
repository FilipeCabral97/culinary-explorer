import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Explore from "./pages/Explore/Explore";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import WorkInProgress from "./components/WorkInProgress/WorkInProgress";
import { ModalContainer } from "./components/ModalContainer/ModalContainer";
import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
  const [showWorkInProgress, setShowWorkInProgress] = useState<boolean>(false);

  const handleContinue = () => {
    setShowWorkInProgress(false);
    document.body.classList.remove("modal-open");
  };

  useEffect(() => {
    setTimeout(() => {
      setShowWorkInProgress(true);
      document.body.classList.add("modal-open");
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
              <Route path="/" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
