import { Button, IconButton } from "@mui/material";
import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Subscribe from "../Subscribe/Subscribe";
const Footer = () => {
  return (
    <div className="footer" style={{ paddingBottom: "20px" }}>
      <div className="footer-two">
        <div className=" first sp">
          <p>Explore disney</p>
          <ul>
            <li>Movies</li>
            <li>Shop</li>
          </ul>
        </div>
        <div className="second sp">
          <p>Online services</p>
          <ul>
            <li>Payment Methods</li>
            <li>Shipping Options</li>
          </ul>
        </div>
        <div className="third sp">
          <p>Disney services</p>
          <ul>
            <li>Store Locator</li>
            <li>Book an Appointment</li>
          </ul>
        </div>
        <div className="fourth sp">
          <p>The house of Disney</p>
          <ul>
            <li>Careers</li>
            <li>Legal</li>
          </ul>
        </div>
      </div>
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
      <div className="subscribe">
        <h3>Subscribe</h3>
        <Subscribe />
      </div>
      <div className="footer-one">
        <a href="https://www.disney.com/">
          © Disney, All Rights Reserved, Disney Entertainment
        </a>
      </div>
    </div>
  );
};
export default Footer;
