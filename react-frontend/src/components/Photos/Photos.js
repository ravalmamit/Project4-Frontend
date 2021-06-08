import React from "react";
import Slider from "react-slick";
import condo1 from "../../images/condo1.jpeg";
import condo2 from "../../images/condo2.jpeg";
import condo3 from "../../images/condo3.jpeg";
import condo4 from "../../images/condo4.jpeg";
import condo5 from "../../images/condo5.jpeg";
import condo6 from "../../images/condo6.jpeg";
import condo7 from "../../images/condo7.jpeg";

import "./Photos.css";

const images = [condo1, condo2, condo3, condo4, condo5, condo6, condo7];

function Photos(props) {
  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
  };
  return (
    <div>
      <Slider className="images">
        {images.map((img, idx) => (
          <div>
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Photos;
