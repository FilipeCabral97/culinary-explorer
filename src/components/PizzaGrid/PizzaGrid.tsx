import React from "react";
import "./PizzaGrid.css";
import MoreButton from "../MoreButton/MoreButton";

const PizzaGrid = () => {
  return (
    <div className="container pizza-container">
      <div className="pizza-grid-container">
        <div className="dish-1 dish"></div>
        <div className="dish-2 dish"></div>
        <div className="dish-3 dish"></div>
        <div className="dish-4 dish"></div>
        <div className="dish-5 dish"></div>
        <div className="dish-6 dish"></div>
      </div>
      <MoreButton>More Pizza Recipes</MoreButton>
    </div>
  );
};

export default PizzaGrid;
