import React from "react";
import "./HeroStyle.css";
import "../../App.css";
import video from "../../videos/video-1.mp4";
import { Button } from "../button/Button";

function Hero() {
  return (
    <>
      <div className="hero-container">
        <video src={video} autoPlay loop muted />
        <h1>ADVANTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--outline"
          >
            GET STARTED
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--outline"
          >
            WATCH TRAILE <i className="fas fa-play-circle"></i>
          </Button>
        </div>
      </div>
    </>
  );
}

export default Hero;
