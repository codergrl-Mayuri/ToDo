import React from 'react';

const Sun = () => {
  return (
    <div>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
      <div
        style={{
          position: 'absolute',
          bottom: '-50px', // Position from the bottom
          left: '-50px',   // Position from the left
          width: '250px', // Size of the sun
          height: '250px',// Size of the sun
          backgroundColor: '#FFD700', // Color of the sun
          borderRadius: '50%', // Make it round
          boxShadow: '0 0 80px rgba(255, 215, 0, 0.8)', // Glow effect
          animation: 'spin 20s linear infinite', // Spinning effect
          zIndex: 1, // Make sure it's above other elements
        }}
      />
    </div>
  );
};

export default Sun;
