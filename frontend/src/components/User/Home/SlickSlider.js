import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./css/slick.scss";

export default function SlickSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <Slider {...settings}>
      <div>
        <div className="backImage">
          <div className="ImageContent">
            <h1>Make Your Business More Profitable</h1>
            <p></p>

              <a className="btn btn-red">Read More</a>

          </div>
        </div>
      </div>
      <div>
        <div className="backImage2">
          <div className="ImageContent">
          <h1>Make Your Business More Profitable</h1>
            <p></p>

              <a className="btn btn-red">Read More</a>

          </div>
        </div>
      </div>
    </Slider>
  );
}
