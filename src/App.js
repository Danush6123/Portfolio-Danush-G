// src/App.js (FINAL - Using HashRouter for GitHub Pages)

import React, { createRef, useLayoutEffect } from 'react';
// --- FIX #1: Import HashRouter instead of BrowserRouter ---
import {
  HashRouter as Router, // Use HashRouter and name it Router
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// Your component imports remain the same
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import CertificationsPage from './components/CertificationsPage';
import GlobalBackground from './components/GlobalBackground';

import './App.css';

const routes = [
  { path: '/', name: 'Home', Component: HomePage, nodeRef: createRef(null) },
  { path: '/about', name: 'About', Component: AboutPage, nodeRef: createRef(null) },
  { path: '/projects', name: 'Projects', Component: ProjectsPage, nodeRef: createRef(null) },
  { path: '/certifications', name: 'Certs', Component: CertificationsPage, nodeRef: createRef(null) }
];

function AppContent() {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    if (location.pathname === '/') {
      document.body.classList.add('home-page-active');
    } else {
      document.body.classList.remove('home-page-active');
    }
  }, [location.pathname]);

  return (
    <>
      {location.pathname !== '/' && <GlobalBackground />}
      <TransitionGroup component={null}>
        <CSSTransition
          key={location.key}
          nodeRef={routes.find((route) => route.path === location.pathname)?.nodeRef}
          timeout={500}
          classNames="page"
          unmountOnExit
        >
          <div ref={routes.find((route) => route.path === location.pathname)?.nodeRef}>
            <Routes location={location}>
              {routes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
              ))}
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

function App() {
  return (
    // --- FIX #2: Use the HashRouter component. No basename is needed. ---
    <Router>
      <div className="App">
        <AppContent />
      </div>
    </Router>
  );
}

export default App;