import React, { useEffect, useState } from 'react';

// Cloud style with added 'top' and 'left' for positioning and 'size' for responsiveness
const cloudStyle = (left, size, top) => ({
  position: 'absolute',
  left: `${left}%`,
  top: `${top}%`, // Randomized vertical position
  width: `${size}vw`, // Relative to viewport width
  maxWidth: '20vw', // Limit maximum width
  animation: 'float 8s ease-in-out infinite', // Floating animation
  opacity: 0.8,
  zIndex: 1, // Default zIndex
});

// Floating animation for clouds
const style = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(10px); }
    100% { transform: translateY(0px); }
  }
`;

// Inline SVG for cloud shape
const CloudSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="white"
    width="100%"
    height="100%"
  >
    <path d="M50 26c-1.055 0-2.09.116-3.088.34C45.662 21.033 41.272 18 36 18c-5.273 0-9.662 3.033-10.912 8.34A13.917 13.917 0 0 0 22 26C14.268 26 8 32.268 8 40s6.268 14 14 14h28c7.732 0 14-6.268 14-14s-6.268-14-14-14z" />
  </svg>
);

const CloudsComponent = () => {
  const [clouds, setClouds] = useState([]);

  // Generate random clouds with relative sizes and positions
  useEffect(() => {
    const numOfClouds = window.innerWidth < 600 ? 4 : 6; // Adjust number of clouds based on screen width
    const randomClouds = Array.from({ length: numOfClouds }, () => ({
      left: Math.random() * 100, // Random horizontal position from 0% to 100%
      size: Math.random() * 10 + 5, // Random size between 5vw to 15vw
      top: Math.random() * 100, // Random vertical position from 0% to 100%
    }));
    setClouds(randomClouds);

    // Update cloud positions on resize
    const handleResize = () => {
      const numOfClouds = window.innerWidth < 600 ? 4 : 6;
      const updatedClouds = Array.from({ length: numOfClouds }, () => ({
        left: Math.random() * 100,
        size: Math.random() * 10 + 5,
        top: Math.random() * 100,
      }));
      setClouds(updatedClouds);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <style>{style}</style>
      {clouds.map((cloud, index) => (
        <div
          key={index}
          style={cloudStyle(cloud.left, cloud.size, cloud.top)}
        >
          <CloudSVG />
        </div>
      ))}
      {/* Cloud on top of the sun */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: '20vw',
          maxWidth: '150px',
          zIndex: 2, // Ensure it's on top
        }}
      >
        <CloudSVG />
      </div>
    </div>
  );
};

export default CloudsComponent;
