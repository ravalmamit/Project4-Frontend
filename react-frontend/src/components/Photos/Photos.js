import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import condo1 from "../../images/condo1.jpeg";
import condo2 from "../../images/condo2.jpeg";
import condo3 from "../../images/condo3.jpeg";
import condo4 from "../../images/condo4.jpeg";
import condo5 from "../../images/condo5.jpeg";
import condo6 from "../../images/condo6.jpeg";
import condo7 from "../../images/condo7.jpeg";
import Header from "../Header/Header";
import "./Photos.css";

const images = [condo1, condo2, condo3, condo4, condo5, condo6, condo7];

function Photos(props) {
  const settings = {
    infinite: true,
    lazyLoad: true,
    arrows: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: 0,
  };
  return (
    <div>
      <Header />
      <div className="photos">
        <Slider {...settings} className="images">
          {images.map((img, idx) => (
            <div>
              <img src={img} alt={img} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Photos;
