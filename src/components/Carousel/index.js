import React from "react";
import { Carousel } from "react-bootstrap";
import './style.css';
const CommonCarousel = (props) => {
     const {images} = props;
  return (
    <div>
      <Carousel>
          {
               images && images.map((items)=>               
               <Carousel.Item interval={1000000}>
                    <img
                    className="d-block w-100"
                    src={items.imgSrc}
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
               </Carousel.Item>
               )
          }
      </Carousel>
    </div>
  );
};

export default CommonCarousel;
