import React from "react";
import TeamSlider from "./TeamSlider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function OurTeam() {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
      <div id="our-team">
        <div className="container">
          <div className="column">
            <h1>Our Team</h1>
            <div className="line"></div>
          </div>
          <div className="team">
            <Slider {...settings}>
              <div className="t-box">
                <div className="box-in">
                <img src="/images/team/gagan.jpeg" alt="" />
                <h4>Gagan</h4>
                <p>Founder</p>
                </div>
               
              </div>
              <div className="t-box">
              <div className="box-in">
                <img src="/images/team/hritik.jpeg" alt="" />
                <h4>Hritik</h4>
                <p>Founder</p>
                </div>
              </div>
              <div className="t-box">
              <div className="box-in">
                <img src="/images/team/jenisha.jpeg" alt="" />
                <h4>Jenisha</h4>
                <p>Founder</p>
                </div>
              </div>
              {/* anathor three */}
              {/* <div className="t-box">
              <div className="box-in">
                <img src="/images/team/gagan.jpeg" alt="" />
                <h4>Gagan</h4>
                <p>Founder</p>
                </div>
              </div>
              <div className="t-box">
              <div className="box-in">
                <img src="/images/team/hritik.jpeg" alt="" />
                <h4>Hritik</h4>
                <p>Founder</p>
                </div>
              </div>
              <div className="t-box">
              <div className="box-in">
                <img src="/images/team/jenisha.jpeg" alt="" />
                <h4>Jenisha</h4>
                <p>Founder</p>
                </div>
              </div> */}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurTeam;
