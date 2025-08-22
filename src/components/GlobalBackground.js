// src/components/GlobalBackground.js

import React from 'react';
import './GlobalBackground.css'; // We will create this CSS file next

// Import the GIF directly. This is the guaranteed way for React to handle the path.
// Make sure this path is correct based on your file structure.
import backgroundGif from '../assets/projects-background.gif';

function GlobalBackground() {
  return (
    <div 
      className="global-background" 
      style={{ backgroundImage: `url(${backgroundGif})` }} 
    />
  );
}

export default GlobalBackground;