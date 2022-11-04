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
              <p>Eatiz</p>
              <p>Menu One</p>
              <p>Menu Two</p>
              <p>Menu Three</p>
              <p>Menu Four</p>
            </header>
            <div className="heading">
              <h2>Discover Restaurant</h2>
              <h2> & Delicious Food </h2>
            </div>
            <input type="text" className="headingInput" />
            <div className="location">
              <p>Location</p>
            </div>
          </div>
          <div className="red">
            <img src="UserImage" alt="" />
            <p>user</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
