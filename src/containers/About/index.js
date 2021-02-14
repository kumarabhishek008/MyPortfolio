import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import './style.scss';
import Image2 from '../../utils/images/2.JPG';
import { Button } from '@material-ui/core';
import * as animationData from '../../animations/a.json';
import Lottie from 'react-lottie';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const About = (props) => {
     const classes = useStyles();
     const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
  return (
    <div id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            {/* <img src={Image2}/> */}
            <Lottie options={defaultOptions}
              height={400}
              width={400}
              />
          </div>
          <div  className='col-md-6 about-header-description'>
            <div className='header'>
              <h1>About</h1>
            </div>
            <div className='description'>
              <h5>
                I am a Frontend Developer in Reactjs .If you want stunning web application in React js then you are at the right place. I’m a professional front end web developer who has done multiple projects . 
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
