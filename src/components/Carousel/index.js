import React from "react";
import { Carousel } from "react-bootstrap";
import './style.scss';
import Typewriter from 'typewriter-effect';

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
                    <Typewriter
                        options={{
                          strings: [items.text],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </Carousel.Caption>
               </Carousel.Item>
               )
          }
      </Carousel>
    </div>
  );
};

export default CommonCarousel;
