import React from "react";
import "./style.scss";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { SOCIAL_PROFILES } from "../../utils/constant";

const Footer = (props) => {
  return (
    <div id="footer-section">
      <div className="container">
        <div className="header-section">
          <h3>Contact</h3>
          <p>Noida, Uttar Pradesh, India</p>
        </div>
        <hr />
        <div className="row justify-content-center">
          <div
            className=" links"
            onClick={() => {
              window.open(SOCIAL_PROFILES.FACEBOOK, "_blank");
            }}
          >
            <FacebookIcon color=""></FacebookIcon>
          </div>
          <div
            className=" links"
            onClick={() => {
              window.open(SOCIAL_PROFILES.LINKEDIN, "_blank");
            }}
          >
            <LinkedInIcon color="" />
          </div>
          <div
            className=" links"
            onClick={() => {
              window.open(SOCIAL_PROFILES.INSTAGRAM, "_blank");
            }}
          >
            <InstagramIcon color="" />
          </div>
          <div className=" links" title={SOCIAL_PROFILES.GMAIL} onClick={()=>{window.location.href = `mailto:${SOCIAL_PROFILES.GMAIL}`}}>
            <EmailIcon color="" />
          </div>
          <div
            className=" links"
            onClick={() => {
              window.open(SOCIAL_PROFILES.YOUTUBE, "_blank");
            }}
          >
            <YouTubeIcon color="" />
          </div>
        </div>
        <div className="bottom-section">
          <p>@ copyright reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
