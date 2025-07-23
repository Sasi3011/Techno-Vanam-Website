import React from 'react';
import animation from '../assets/splash.mp4';

const SplashScreen = ({ fadeOut }) => {
  return (
    <div
      className={`fixed inset-0 z-[9999] bg-transparent flex items-center justify-center transition-opacity duration-700 ease-in-out ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <video
        autoPlay
        muted
        playsInline
        loop
        className="max-w-full max-h-full"
        style={{
          backgroundColor: 'transparent',
          border: 'none',
        }}
      >
        <source src={animation} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default SplashScreen;
