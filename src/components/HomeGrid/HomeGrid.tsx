import React from "react";
import { food1, food2, food3, food4, food5, food6 } from "../../images";
import "./HomeGrid.css";

interface IHomeProps {
  children: string;
}

const HomeGrid = ({ children }: IHomeProps) => {
  return (
    <div className="container grid-container">
      <div className="grid big-left">
        <div className="item main">
          <img src={food1} alt="" />
          <div className="popular-header">
            <h1>POPULAR</h1>
            <h1>RECIPES</h1>
          </div>
          <div className="text-container">
            <p className="text-p">{children}</p>
          </div>
        </div>
        <div className="item sub sub1">
          <img src={food2} alt="" />
          <div className="sub-text-container">
            <p className="text-p">AIR FRYER</p>
          </div>
        </div>
        <div className="item sub sub2">
          <img src={food3} alt="" />
          <div className="sub-text-container">
            <p className="text-p">KETO</p>
          </div>
        </div>
      </div>
      <div className="grid big-right">
        <div className="item main">
          <img src={food4} alt="" />
          <div className="popular-header">
            <h1>CHEAP</h1>
            <h1 className="spacing">RECIPES</h1>
          </div>
          <div className="text-container">
            <p className="text-p">Save your money with these recipes</p>
          </div>
        </div>
        <div className="item sub sub1">
          <img src={food5} alt="" />
          <div className="sub-text-container">
            <p className="text-p">CHICKEN</p>
          </div>
        </div>
        <div className="item sub sub2">
          <img src={food6} alt="" />
          <div className="sub-text-container">
            <p className="text-p">SLOW COOKER</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeGrid;
