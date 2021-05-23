import React from "react";
import { Carousel } from "react-bootstrap";
import './style.scss';
const CommonCarousel = (props) => {
     const {images} = props;
  return (
    <div>
      <Carousel className='carousel slide carousel-fade'>
          {
               images && images.map((items,i)=>               
               <Carousel.Item interval={1000000} key={i}>
                    <img
                    className="d-block w-100 "
                    src={items.imgSrc}
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
               </Carousel.Item>
               )
          }
      </Carousel>
    </div>
  );
};

export default CommonCarousel;
