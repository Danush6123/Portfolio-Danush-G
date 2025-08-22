// src/components/ProjectsPage.js

import React, { useState, useEffect, forwardRef } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import TypewriterHeading from './TypewriterHeading';
import './ProjectsPage.css';

const projectsData = [
  {
    title: 'Handwriting Generation using Deep Learning',
    description: 'Developed a deep learning model using Python and OpenCV to generate realistic digital handwriting from limited user samples.',
    link: 'https://github.com/Danush6123/Hand-Writing-Generation-using-GAN'
  },
  {
    title: 'Real-Time Face Recognition for Android',
    description: 'Built an offline Android app for real-time face recognition using MobileFaceNet and TensorFlow Lite. Utilized CameraX, ML Kit, and Jetpack libraries for fast, accurate facial embedding comparison in a sleek, responsive UI.',
    link: 'https://github.com/Danush6123/Face_Recognition_TFlite_Android_Application'
  },
  {
    title: 'Financier (AI-Powered Personal Finance Manager)',
    description: 'Created a full-stack finance platform with React and FastAPI, offering budget tracking, EMI monitoring, real-time stock updates, and FinBot — an AI chatbot powered by a fine-tuned Phi-2 LLM. Included Excel analysis and voice commands for personalized insights.',
    link: 'https://github.com/Danush6123/financer'
  },
  {
    title: 'QR Generator Pro',
    description: 'Built a responsive web app using React, TypeScript, Vite, Tailwind CSS, and Supabase to generate and manage QR codes. Features include cloud storage, user auth, live search, and exporting as PNG or PDF with full CRUD support.',
    link: 'https://github.com/Danush6123/QR-code-generator-'
  },
  {
    title: 'Bistro Restaurant Website',
    description: 'Developed a restaurant website using HTML, CSS, and JavaScript with XAMPP backend. Includes menu display, table reservations, and feedback collection in a user-friendly interface.',
    link: 'https://github.com/Danush6123/Bistro-Restaurant'
  },
  {
    title: 'Shelfly (Online Bookstore Platform)',
    description: 'Built a PHP-MySQL powered online bookstore with features like search, cart, checkout, user login, order history, and admin dashboard. Fully responsive and ready for deployment with XAMPP/WAMP.',
    link: 'https://github.com/Danush6123/Shelfly-Online-Bookstore-Platform'
  }
];

// Wrap component with forwardRef
const ProjectsPage = forwardRef((props, ref) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    document.body.classList.add('projects-background-active');
    return () => {
      document.body.classList.remove('projects-background-active');
    };
  }, []);

  return (
    // Attach the forwarded ref to the main div
    <div className="page-container page projects-page-container" ref={ref}>
      <TypewriterHeading text="My Projects" />
      <div 
        className="projects-list"
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {projectsData.map((project, index) => (
          <ProjectCard 
            key={index}
            project={project} 
            index={index} 
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex} 
          />
        ))}
      </div>
      <Link to="/" className="home-link">← Go Back Home</Link>
    </div>
  );
});

export default ProjectsPage;