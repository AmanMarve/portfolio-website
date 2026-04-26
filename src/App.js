import React, { useRef, useEffect } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { initLocomotiveScroll } from './locomotive';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './App.css';
import './locomotive.css';
import { Toaster } from 'react-hot-toast';


function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    const scroll = initLocomotiveScroll(containerRef, { smooth: true });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <LocomotiveScrollProvider
      options={{ smooth: true }}
      containerRef={containerRef}
    >
      <div data-scroll-container ref={containerRef}>
        <Toaster position="top-center" />
        <Navbar className='sticky z-1000 top-0' />
        <Home data-scroll-section />
        <About data-scroll-section />
        <Project data-scroll-section />
        <Contact data-scroll-section />
        <Footer />
      </div>
    </LocomotiveScrollProvider>
  );
}

export default App;
