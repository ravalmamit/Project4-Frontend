import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderData from "./SliderData";
import "./Photos.css";
import Header from "../Header/Header";

function Photos(props) {
  const settings = {
    infinite: true,
    arrows: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: 0,
  };
  return (
    <div>
      <Header />
      {console.log(SliderData)}
      <div className="photos">
        <Slider {...settings} className="images">
          {console.log(SliderData)}
          {SliderData.map((image, idx) => (
            <div>
              <img key={idx} src={image} alt={idx} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Photos;
