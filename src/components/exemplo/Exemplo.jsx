import React from "react";
import SlickSlider from "react-slick";
import teste from "../../assets/image/capa.jpg";
import teste2 from "../../assets/image/banner2.png";
import teste3 from "../../assets/image/banner3.png";
import teste4 from "../../assets/image/banner4.png";

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Slider = () => (
  <SlickSlider {...sliderSettings}>
    <img src={teste} alt="Image 1" />
    <img src={teste2} alt="Image 2" />
    <img src={teste3} alt="Image 3" />
    <img src={teste4} alt="Image 4" />
  </SlickSlider>
);

const Exemplo = () => (
  <div>
    <Slider />
  </div>
);

export default Exemplo;
