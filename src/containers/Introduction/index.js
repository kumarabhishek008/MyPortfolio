import React from 'react';
import Carousel from '../../components/Carousel/index';

const Introduction = () => {
     const images = [
          {
               text:'Hi I am Abhishek',
               imgSrc:'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
          },
          {
               text:'Full Stack Developer',
               imgSrc:'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80',
          },
          {
               text:'MERN STACK',
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
