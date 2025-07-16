import React from 'react';
import animation from '../assets/splash.mp4';

const SplashScreen = ({ fadeOut }) => {
  return (
    <div
      className={`fixed inset-0 z-[9999] bg-white flex items-center justify-center transition-opacity duration-700 ease-in-out ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <video
        autoPlay
        muted
        playsInline
        loop
        className="w-[900px] h-[1000px]  bg-white"
      >
        <source src={animation} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default SplashScreen;
