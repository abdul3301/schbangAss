import React from "react";
import "./SectionTwo.css";
const SecondSection = () => {
  return (
    <div className="container">
      <div className="top_section">
        <div className="top_section_left">
          <div className="top_section_left_border"></div>
          <span>Our Services</span>
        </div>
        <div className="top_section_right">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
        </div>
      </div>
      <div className="body_section">
        <div className="left_body_section">
          <div className="left_body_section_first_row">
            <div className="left_body_section_first_row_first_column">
              <img src="/assets/peoples.png" />
            </div>
            <div className="left_body_section_first_row_second_column">
              <h2>advanced table booking</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
            </div>
          </div>
          <div className="left_body_section_second_row">
            <div className="left_body_section_second_row_first_column">
              <div className="left_body_section_second_row_first_column_content">
                <h2 className="food">Food for Free </h2>
                <h2 className="hour">24/7</h2>
              </div>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              </p>
            </div>
            <div className="left_body_section_second_row_second_column">
              <img src="/assets/plate.png" />
            </div>
          </div>
        </div>
        <div className="right_body_section">
          <img
            src="/assets/scooter.png"
            width={150}
            height={100}
            alt="scooter"
          />

          <h2>free home delivery at your door steps</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
