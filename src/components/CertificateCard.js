// src/components/CertificateCard.js

import React from 'react';

// This component receives all the necessary props to manage its state and behavior
function CertificateCard({ certificate, index, hoveredIndex, setHoveredIndex, onCardClick }) {
  
  // Determine the dynamic classes for the card, same logic as projects
  let cardClassName = 'cert-card';
  if (hoveredIndex !== null) {
    cardClassName += hoveredIndex === index ? ' is-active' : ' is-inactive';
  }

  return (
    // The onClick handler for the modal and onMouseEnter for the hover effect are both here
    <div 
      className={cardClassName}
      onMouseEnter={() => setHoveredIndex(index)}
      onClick={() => onCardClick(certificate)}
    >
      <img src={certificate.image} alt={certificate.title} className="cert-preview-image" />
      <h3 className="cert-title">{certificate.title}</h3>
    </div>
  );
}

export default CertificateCard;