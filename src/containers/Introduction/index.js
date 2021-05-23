import React from 'react';
import Carousel from '../../components/Carousel/index';

const Introduction = () => {
     const images = [
          {
               imgSrc:'https://firebasestorage.googleapis.com/v0/b/my-portfolio-fd52a.appspot.com/o/MyImages%2F1.JPG?alt=media&token=bc6b8a07-5696-49c7-88f3-c24c68783150',
          },
          {
               imgSrc:'https://firebasestorage.googleapis.com/v0/b/my-portfolio-fd52a.appspot.com/o/MyImages%2F3.JPG?alt=media&token=09b1277b-c0b0-4e25-882f-72572ba65261',
          },
          {
               imgSrc:'https://firebasestorage.googleapis.com/v0/b/my-portfolio-fd52a.appspot.com/o/MyImages%2F2.JPG?alt=media&token=f4d5e54e-a8e5-46e5-969c-c559e4554475',
          }
     ]
     return (
          <div id='intoduction'>
               <Carousel images={images}/>
          </div>
     )
}

export default Introduction
