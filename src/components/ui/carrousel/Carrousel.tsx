import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SimpleSliderProps {
  imgUrl: string;
  alt?: string;
}

const SimpleSlider: React.FC<SimpleSliderProps> = ({
  imgUrl,
  alt = "Screenshot del proyecto",
}) => {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setReduceMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const imageUrls = imgUrl
    .split(",")
    .map((url) => url.trim())
    .filter(Boolean);

  if (imageUrls.length === 0) return null;

  const settings = {
    dots: false,
    infinite: imageUrls.length > 1,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: !reduceMotion && imageUrls.length > 1,
    autoplaySpeed: 3500,
    speed: 600,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    arrows: false,
    swipe: imageUrls.length > 1,
  };

  return (
    <div className="slider-container h-full w-full">
      <Slider {...settings}>
        {imageUrls.map((url, index) => (
          <div key={`${url}-${index}`}>
            <img
              src={url}
              alt={`${alt} — imagen ${index + 1}`}
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
