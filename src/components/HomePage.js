// src/components/HomePage.js

import React, { useState, useEffect, forwardRef } from 'react';
import { Link } from 'react-router-dom';
import ModalViewer from './ModalViewer';

const LINE1_TEXT = "Hi, I'm Danush —";
const LINE2_TEXT = "welcome, curious traveler!";
const fullText = LINE1_TEXT + '\n' + LINE2_TEXT;

const HomePage = forwardRef((props, ref) => {
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [isAnimationDone, setIsAnimationDone] = useState(false);
  
  const characters = fullText.split('');

 useEffect(() => {
    // This function runs every time the `showResumeModal` state changes.
    if (showResumeModal) {
      // When the modal is open, lock the scroll.
      document.body.classList.add('body-scroll-lock');
    }

    // --- The crucial cleanup function ---
    // This function runs when the modal closes OR when the component unmounts.
    return () => {
      document.body.classList.remove('body-scroll-lock');
    };
  }, [showResumeModal]); // The effect only re-runs when this state value changes.


  // These functions now ONLY manage the component's internal state.
  const openResumeModal = (e) => {
    e.preventDefault();
    setShowResumeModal(true);
  };

  const closeResumeModal = () => {
    setShowResumeModal(false);
  };

  return (
    <div className="home-container page" ref={ref}>
      <div className="welcome-message">
        <h1 className="main-heading">
          
          {characters.map((char, index) => {
            if (char === '\n') {
              return <br key={`br-${index}`} />;
            }
            return (
              <span 
                key={`${char}-${index}`} 
                className="animated-char"
                style={{ animationDelay: `${500 + index * 50}ms` }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            );
          })}
        </h1>
        
        {isAnimationDone && (
          <div className="sub-message">
            <p>You've just landed on my little corner of the internet. Feel free to explore my work and check out my resume along the way.</p>
          </div>
        )}
      </div>

      <nav className="nav-links">
        <Link to="/about" className="nav-link">about me</Link>
        <Link to="/projects" className="nav-link">projects</Link>
        <Link to="/certifications" className="nav-link">certifications</Link>
        <a href="#resume" className="nav-link" onClick={openResumeModal}>resume</a>
      </nav>

      {showResumeModal && (
        <ModalViewer
          imageSrc="/previews/Danush-Resume.jpg"
          pdfSrc="/Danush-Resume.pdf"
          onClose={closeResumeModal}
        />
      )}
    </div>
  );
});

export default HomePage;