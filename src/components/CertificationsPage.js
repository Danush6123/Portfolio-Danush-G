// src/components/CertificationsPage.js

import React, { useState, useEffect, forwardRef } from 'react';
import { Link } from 'react-router-dom';
import ModalViewer from './ModalViewer';
import CertificateCard from './CertificateCard';
import TypewriterHeading from './TypewriterHeading';
import './CertificationsPage.css';

const certificationsData = [
    {
    title: 'Architecting Cloud Computing Solutions on Microsoft Azure',
    file: '/certificates/architecting-cloud-azure.pdf',
    image: '/certificates/previews/architecting-cloud-azure.jpg'
  },
  {
    title: 'Cloud Computing',
    file: '/certificates/cloud-computing.pdf',
    image: '/certificates/previews/cloud-computing.jpg'
  },
  {
    title: 'DevOps',
    file: '/certificates/devops.pdf',
    image: '/certificates/previews/devops.jpg'
  },
  {
    title: 'EXCELR',
    file: '/certificates/excelr.pdf',
    image: '/certificates/previews/excelr.jpg'
  },
  {
    title: 'Git by Example',
    file: '/certificates/git-by-example.pdf',
    image: '/certificates/previews/git-by-example.jpg'
  },
  {
    title: 'Git Complete',
    file: '/certificates/git-complete.pdf',
    image: '/certificates/previews/git-complete.jpg'
  },
  {
    title: 'Java Programming',
    file: '/certificates/java-programming.pdf',
    image: '/certificates/previews/java-programming.jpg'
  },
  {
    title: 'React-Full Stack Workshop',
    file: '/certificates/react-full-stack-workshop.pdf',
    image: '/certificates/previews/react-full-stack-workshop.jpg'
  },
  {
    title: 'TechA Cloud Computing using Microsoft Azure',
    file: '/certificates/techa-cloud-azure.pdf',
    image: '/certificates/previews/techa-cloud-azure.jpg'
  },
  {
    title: 'TechA Git Foundation Certification',
    file: '/certificates/techa-git-foundation.pdf',
    image: '/certificates/previews/techa-git-foundation.jpg'
  },
];

// Wrap component with forwardRef
const CertificationsPage = forwardRef((props, ref) => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    document.body.classList.add('certs-background-active');
    return () => {
      document.body.classList.remove('certs-background-active');
    };
  }, []);

  const openModal = (cert) => {
    setSelectedCert(cert);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCert(null);
    document.body.style.overflow = 'auto';
  };

  return (
    // Attach the forwarded ref to the main div
    <div className="page-container page" ref={ref}>
      <TypewriterHeading text="My Certifications" />
      <div 
        className="certs-grid"
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {certificationsData.map((cert, index) => (
          <CertificateCard
            key={index}
            certificate={cert}
            index={index}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
            onCardClick={openModal}
          />
        ))}
      </div>

      {selectedCert && (
        <ModalViewer
          imageSrc={selectedCert.image}
          pdfSrc={selectedCert.file}
          onClose={closeModal}
        />
      )}

      <Link to="/" className="home-link">← Go Back Home</Link>
    </div>
  );
});

export default CertificationsPage;