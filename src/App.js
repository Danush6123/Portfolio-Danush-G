// src/App.js (Updated to use GlobalBackground)

import React, { createRef, useLayoutEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import CertificationsPage from './components/CertificationsPage';
import GlobalBackground from './components/GlobalBackground'; // Import the new component

import './App.css';

const routes = [
  { path: '/', name: 'Home', Component: HomePage, nodeRef: createRef(null) },
  { path: '/about', name: 'About', Component: AboutPage, nodeRef: createRef(null) },
  { path: '/projects', name: 'Projects', Component: ProjectsPage, nodeRef: createRef(null) },
  { path: '/certifications', name: 'Certs', Component: CertificationsPage, nodeRef: createRef(null) }
];

// This component now contains the router and the background logic
function AppContent() {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0); // Prevents content flash on navigation
    if (location.pathname === '/') {
      document.body.classList.add('home-page-active');
    } else {
      document.body.classList.remove('home-page-active');
    }
  }, [location.pathname]);

  return (
    <>
      {/* The Global Background is rendered here, outside the transitions. */}
      {/* It will ONLY render if the current page is NOT the homepage. */}
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
    <Router>
      <div className="App">
        <AppContent />
      </div>
    </Router>
  );
}

export default App;