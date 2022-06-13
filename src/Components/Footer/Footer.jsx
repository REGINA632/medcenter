import { Button, IconButton } from "@mui/material";
import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
  return (
    <div className="footer">
      <div className="icons">
        <IconButton
          href="https://www.instagram.com/chanelofficial/"
          style={{ color: "white" }}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          href="https://twitter.com/chanel?lang=en"
          style={{ color: "white" }}
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          href="https://www.facebook.com/chanel/"
          style={{ color: "white" }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          href="https://www.youtube.com/user/CHANEL"
          style={{ color: "white" }}
        >
          <YouTubeIcon />
        </IconButton>
      </div>
      <div className="footer-one">
        <h2>Regina</h2>
      </div>
    </div>
  );
};
export default Footer;
