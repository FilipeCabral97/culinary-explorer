import React from "react";
import "./Home.css";
// import food1 from "../../images/food1.jpg";
// import food2 from "../../images/food2.jpg";
// import food3 from "../../images/food3.jpg";
// import food4 from "../../images/food4.jpg";
// import food5 from "../../images/food5.jpg";
// import food6 from "../../images/food6.jpg";
import { food1, food2, food3, food4, food5, food6 } from "../../images";

const Home = () => {
  return (
    <div className="container grid-container">
      <div className="grid big-left">
        <div className="item main">
          <img src={food1} alt="" />
          <div className="popular-header">
            <h1>POPULAR</h1>
            <h1>RECIPES</h1>
          </div>
          <div className="popular-text">
            <p className="test-p">Get inspired with these popular recipes</p>
          </div>
        </div>
        <div className="item sub sub1">
          <img src={food2} alt="" />
        </div>
        <div className="item sub sub2">
          <img src={food3} alt="" />
        </div>
      </div>
      <div className="grid big-right">
        <div className="item main">
          <img src={food4} alt="" />
          <div className="popular-header">
            <h1>CHEAP</h1>
            <h1 className="spacing">RECIPES</h1>
          </div>
          <div className="popular-text">
            <p className="test-p">Get inspired with these popular recipes</p>
          </div>
        </div>
        <div className="item sub sub1">
          <img src={food5} alt="" />
        </div>
        <div className="item sub sub2">
          <img src={food6} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
