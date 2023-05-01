import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <header>
      <nav>
        <div className="container">
          <div className="nav-wrapper">
            <div className="logo-container">
              <h1 className="logo">Culinary</h1>
              <h1 className="logo logo-down">Explorer</h1>
            </div>
            <ul className="nav-list">
              <li className="dropdown">
                <div className="explore-dropdown">Recipes</div>
                <div className="dropdown-content">
                  <span>All Recipes</span>
                  <span>Popular</span>
                  <span>Random</span>
                </div>
              </li>
              <li className="dropdown">
                <div className="explore-dropdown">Explore</div>
                <div className="dropdown-content">
                  <span>Cuisine</span>
                  <span>Diet</span>
                  <span>Intolerances</span>
                  <span>Type</span>
                  <span>Ready Time</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="nav-input-wrapper">
            <input
              type="text"
              placeholder="Search Recipe..."
              className="nav-input"
            />
            <span className="search-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
