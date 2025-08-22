// src/components/ProjectCard.js

import React from 'react';

// This component is now simpler. It only cares about setting the hover state
// and applying the right classes based on the `hoveredIndex` prop.
function ProjectCard({ project, index, hoveredIndex, setHoveredIndex }) {
  
  // Determine the dynamic classes for the card
  let cardClassName = 'project-card';
  // If ANY card is being hovered...
  if (hoveredIndex !== null) {
    // If THIS card is the one being hovered, it's 'active'. Otherwise, it's 'inactive'.
    cardClassName += hoveredIndex === index ? ' is-active' : ' is-inactive';
  }

  return (
    <div 
      className={cardClassName}
      // When the mouse enters THIS card, update the state in the parent component
      onMouseEnter={() => setHoveredIndex(index)}
    >
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>
  );
}

export default ProjectCard;