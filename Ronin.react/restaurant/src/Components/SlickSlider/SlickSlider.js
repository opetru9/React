import React from "react";
import Slider from "react-slick";
import './slickSlider.css'

function SlickSlider({ data }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
       {data.map( product => (
                <div  key={product.id}>
                    <div className="slider_item">
                        <a href={`/product/${product.category}/${product.id}`}>
                            <img src={product.img} alt={product.name}></img>
                        </a>
                        <h3><a href="##">{product.name}</a></h3>
                        <h4>{product.price} {product.currency}</h4>
                    </div>
                </div>
            ))}
      </Slider>
    </div>
  );
}

export default SlickSlider;
