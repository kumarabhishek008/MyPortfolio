import React from 'react';
import Carousel from '../../components/Carousel/index';
import Image1 from '../../utils/images/1.JPG';
import Image2 from '../../utils/images/2.JPG';
import Image3 from '../../utils/images/3.JPG';

const Introduction = () => {
     const images = [
          {
               imgSrc:Image1,
          },
          {
               imgSrc:Image2,
          },
          {
               imgSrc:Image3,
          }
     ]
     return (
          <div id='intoduction'>
               <Carousel images={images}/>
          </div>
     )
}

export default Introduction
