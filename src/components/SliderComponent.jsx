import React from "react";
import Slider from "react-slick";
import Button from "@mui/material/Button";
import "./slick.css";
import "./slick-theme.css";

import img1 from "../assets/image/capa.jpg";
import img2 from "../assets/image/capa2.jpg";
import img3 from "../assets/image/exemmplo2.jpg";
import menudino from "../assets/image/logo.jpg";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
};

function SliderComponent() {
  return (
    <div>
      <Slider {...settings}>
        <div className="slider">
          <img src={img1} alt="img 1" />
        </div>
        <div className="slider">
          <img src={img2} alt="img 1" />
        </div>
        <div className="slider">
          <img src={img3} alt="img 1" />
        </div>
      </Slider>
      <div className="cardapio">
        <i src="www.google.com.br">
          <Button variant="contained" className="menudino">
            Cardapio Online
          </Button>
        </i>
      </div>
    </div>
  );
}

export default SliderComponent;
