import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SimpleSliderProps {
  imgUrl: string;
}

const SimpleSlider: React.FC<SimpleSliderProps> = ({ imgUrl }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    prevArrow: <></>,
    nextArrow: <></>,
  };

  const imageUrls = imgUrl.split(",").map((url) => url.trim());

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {imageUrls.map((url, index) => (
          <div key={index}>
            <img src={url} alt={`Slide ${index + 1}`} className="scale-125" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
