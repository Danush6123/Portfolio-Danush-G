// src/components/AboutPage.js

import React, { useEffect, forwardRef } from 'react';
import { Link } from 'react-router-dom';
import TypewriterHeading from './TypewriterHeading';
import './AboutPage.css';

// Wrap component with forwardRef
const AboutPage = forwardRef((props, ref) => {
  useEffect(() => {
    document.body.classList.add('about-background-active');
    return () => {
      document.body.classList.remove('about-background-active');
    };
  }, []);

  return (
    // Attach the forwarded ref to the main div
    <div className="page-container page about-page" ref={ref}>
      <TypewriterHeading text="About Me" />
      
      <p className="summary-text">
        I am a passionate and dedicated third-year engineering student specializing in Artificial Intelligence and Machine Learning. With a strong foundation in deep learning, data science, and web technologies, my focus is on building innovative, real-world AI solutions through hands-on projects. I am always eager to grow and contribute to impactful initiatives through internships and collaborations.
      </p>

      <div className="about-section">
        <h2>My Technical Toolkit</h2>
        <ul className="skills-list">
          <li><strong>AI & Machine Learning:</strong> Deep Learning, Python, TensorFlow</li>
          <li><strong>Programming Languages:</strong> Python, Java, C</li>
          <li><strong>Web Development:</strong> HTML, CSS, JavaScript, React, PHP, MySQL</li>
          <li><strong>Data Visualization:</strong> Tableau</li>
          <li><strong>Soft Skills:</strong> Teamwork, Communication, Leadership, Critical Thinking</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>Beyond the Code</h2>
        <ul className="skills-list">
          <li><strong>Leadership:</strong> President of the AIML Student Club, where I foster a community of tech enthusiasts and lead various initiatives.</li>
          <li><strong>Event Management:</strong> Co-convened CBC 1.0, successfully organizing a 24-hour hackathon for over 500 participants.</li>
          <li><strong>Professional Membership:</strong> Active member of the IEEE Computer Society, staying connected with the broader tech community.</li>
          <li><strong>Awards & Recognition:</strong> Winner of the Group Discussion in the "Mock the Mock" event held by the AI&ML Department.</li>
          <li><strong>Hackathons & Tech Events:</strong> Actively participated in events like Hackathon ADVAYA 2025 and Webathon 2024 to consistently challenge my skills.</li>
          <li><strong>Entrepreneurship:</strong> Engaged in Proofile.in's Aspiring Program to explore the intersection of technology and business.</li>
        </ul>
      </div>

      <div className="about-section connect-section">
        <h2>Let's Connect</h2>
        <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out!</p>
        <ul className="contact-list">
          <li><strong>Email:</strong><a href="mailto:danush6123@gmail.com">danush6123@gmail.com</a></li>
          <li><strong>Phone:</strong><a href="tel:+916364016123">(+91) 6364016123</a></li>
          <li><strong>LinkedIn:</strong><a href="https://linkedin.com/in/danushgopal" target="_blank" rel="noopener noreferrer">danushgopal</a></li>
          <li><strong>GitHub:</strong><a href="https://github.com/Danush6123" target="_blank" rel="noopener noreferrer">Danush6123</a></li>
          <li><strong>HackerRank:</strong><a href="https://www.hackerrank.com/profile/danush6123" target="_blank" rel="noopener noreferrer">danush6123</a></li>
          <li><strong>LeetCode:</strong><a href="https://leetcode.com/u/Danush_123/" target="_blank" rel="noopener noreferrer">Danush_123</a></li>
          <li><strong>Instagram:</strong><a href="https://www.instagram.com/__danush__" target="_blank" rel="noopener noreferrer">__danush__</a></li>
          <li><strong>Facebook:</strong><a href="https://www.facebook.com/share/1An5C7xV75/" target="_blank" rel="noopener noreferrer">DanushGopal</a></li>
          <li><strong>X (Twitter):</strong><a href="https://x.com/danush6123" target="_blank" rel="noopener noreferrer">@danush6123</a></li>
        </ul>
      </div>

      <Link to="/" className="home-link">← Go Back Home</Link>
    </div>
  );
});

export default AboutPage;