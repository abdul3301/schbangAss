import React from "react";
import "./SectionOne.css";

const MainPage = () => {
  return (
    <div className="top">
      <div className="MainWrapper">
        <div className="first">
          <img className="dish" src="/assets/foodPlate.png" alt="" />
          <img className="lettuce" src="/assets/lettuce.png" alt="" />
          <div className="white">
            <header className="header">
              <img src="/assets/logo.png" alt="" />

              <p>Menu One</p>
              <p>Menu Two</p>
              <p>Menu Three</p>
              <p>Menu Four</p>
            </header>
            <div className="heading">
              <h2>
                Discover Restaurant <br />& Delicious Food
              </h2>
              <br />

              <input
                placeholder="Search Food, Restaurants"
                type="text"
                className="headingInput"
              />
              <button>GO</button>
            </div>
            <div className="location">
              <p>Location</p>
            </div>
          </div>
          <div className="red">
            <img src="/assets/Mask.png" alt="" />
            <p>user</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
