import React from "react";
import OurTeam from "./OurTeam";

function AboutUs() {
  return (
    <>
      <div id="about-us">
        <div className="container">
          <div className="grid-row">
            <div className="left">
              <h1>Who we are</h1>
              <div className="line"></div>
              
              <p>
                We are a group of professionals providing Information Technology Services
              </p>
              {/* <a className="btn btn-red btn-left">Learn More</a> */}
            </div>
            <div className="right">
                {/* <div className="box"></div> */}
                <img className="box" src="/images/carousel/business2.jpg" alt="image"/>
            </div>
          </div>
          </div>
          <OurTeam />
        
      </div>
    </>
  );
}

export default AboutUs;
