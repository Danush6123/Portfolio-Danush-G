// src/components/ModalViewer.js

import React from 'react';
// Make absolutely sure this import line exists and the path is correct
import './ModalViewer.css'; 

function ModalViewer({ imageSrc, pdfSrc, onClose }) {
  // We use event.stopPropagation() to prevent a click inside the modal from closing it.
  const handleModalContentClick = (e) => e.stopPropagation();

  return (
    // The overlay closes the modal when clicked
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={handleModalContentClick}>
        <button className="modal-close-button" onClick={onClose}>×</button>
        <img src={imageSrc} alt="Document Preview" className="modal-image" />
        
        {/* Make absolutely sure the className on this <a> tag is correct */}
        <a href={pdfSrc} className="modal-download-button" download>
          Download PDF
        </a>
      </div>
    </div>
  );
}

export default ModalViewer;