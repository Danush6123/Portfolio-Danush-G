// src/components/TypewriterHeading.js

import React from 'react';
import './TypewriterHeading.css'; // We will create this new CSS file

function TypewriterHeading({ text }) {
  // Split the text prop into an array of characters
  const characters = text.split('');

  return (
    // The main h1 element has a class for its base styles
    <h1 className="typewriter-heading">
      {characters.map((char, index) => {
        // Each character is wrapped in a span for individual animation
        return (
          <span 
            key={`${char}-${index}`} 
            className="animated-char-heading" // A new class to avoid conflicts
            style={{ animationDelay: `${100 + index * 50}ms` }}
          >
            {char === ' ' ? '\u00A0' : char} {/* Render spaces correctly */}
          </span>
        );
      })}
    </h1>
  );
}

export default TypewriterHeading;