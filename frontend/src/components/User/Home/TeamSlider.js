import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function TeamSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
      {/* <div id="team-slider">
        <div className="container"> */}
          <Slider {...settings}>
            <div className="t-box">
              <img src="/images/team/gagan.jpeg" alt="" />
            </div>
            <div className="t-box">
              <img src="/images/team/hritik.jpeg" alt="" />
            </div>
            <div className="t-box">
              <img src="/images/team/jenisha.jpeg" alt="" />
            </div>
            <div className="t-box">
              <img src="/images/team/gagan.jpeg" alt="" />
            </div>
            <div className="t-box">
              <img src="/images/team/hritik.jpeg" alt="" />
            </div>
            <div className="t-box">
              <img src="/images/team/jenisha.jpeg" alt="" />
            </div>
          </Slider>
        {/* </div>
      </div> */}
    </>
  );
}
