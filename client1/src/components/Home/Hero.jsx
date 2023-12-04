import React from 'react';
import {herobg} from '../../assets/home'
const Hero = () => {
  return (
    <div className="hero-container">
      <video
        className="hero-video"
        width="100%"
        height="100%"
        style={{ objectFit: 'cover' }}
        loop
        muted
        autoPlay
      >
        <source src={herobg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Hero;