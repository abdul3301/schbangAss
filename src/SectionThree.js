import React from "react";
import "./SectionThree.css";

const SectionThree = () => {
  return (
    <div className="sectionThree">
      <div className="leftpart">
        <div className="redline">
          <div className="box"></div>
          <h1>
            Download app for <br />
            Exciting Deals
          </h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet <br />
          consectetur adipisicing elit sed do <br />
          Ea aliquid nobis ab
        </p>
        <img src="/assets/playstore.png" alt="" />
      </div>
      <div className="rightpart">
        {/* <img className="mobile" src="/assets/mobile.png" alt="" />
        <img className="mobileinside" src="/assets/mobileinsider.png" alt="" />
        <img className="mobilebehind" src="/assets/mobilebehind..png" alt="" /> */}
        <img src="/assets/mobilefull.PNG" alt="" />
      </div>
    </div>
  );
};

export default SectionThree;
