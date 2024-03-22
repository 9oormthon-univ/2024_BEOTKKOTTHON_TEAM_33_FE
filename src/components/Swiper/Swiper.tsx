import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Swiper.css";
import { SwiperProps } from "./Swiper.types";

const Swiper = ({ children }: SwiperProps) => {
  const vw = window.innerWidth;

  const settings = {
    className: "center",
    infinite: false,
    slidesToShow: vw > 768 ? 8 : 4,
    swipeToSlide: true
  };

  return (
    <div style={{ width: "100%" }}>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default Swiper;
