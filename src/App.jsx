import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { AnimatePresence } from 'framer-motion';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';
import ContactModal from './components/ContactModal';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const [showIntro, setShowIntro] = useState(true);
  const [activeScrollIndex, setActiveScrollIndex] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  // Debug log
  useEffect(() => {
    console.log("App rendered. Current path:", location.pathname);
  }, [location]);

  // Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    let animationId;
    function raf(time) {
      lenis.raf(time);
      animationId = requestAnimationFrame(raf);
    }
    animationId = requestAnimationFrame(raf);

    // Optimized observer with debouncing
    // Only run intersection observer on home page
    if (location.pathname === '/') {
      const observerOptions = {
        root: null,
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0
      };

      const observerCallback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id === 'hero') setActiveScrollIndex(1);
            else if (id === 'about') setActiveScrollIndex(2);
            else if (id === 'work') setActiveScrollIndex(3);
          }
        });
      };

      const observer = new IntersectionObserver(observerCallback, observerOptions);

      requestAnimationFrame(() => {
        const sections = document.querySelectorAll('#hero, #about, #work');
        sections.forEach((section) => {
          if (section) observer.observe(section);
        });
      });

      // Cleanup observer on effect re-run (or unmount)
      return () => {
        cancelAnimationFrame(animationId);
        lenis.destroy();
        observer.disconnect();
      };
    }

    return () => {
      cancelAnimationFrame(animationId);
      lenis.destroy();
    };
  }, [location.pathname]);

  return (
    <main className="relative flex flex-col w-full min-h-screen content-wrapper">
      <ScrollToTop />

      {/* Intro only on Home and first load */}
      <AnimatePresence mode="wait">
        {showIntro && location.pathname === '/' && <Intro onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>

      <AnimatePresence>
        {isModalOpen && <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
      </AnimatePresence>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={() => setIsModalOpen(true)}
          className="group relative flex items-center gap-3 pl-6 pr-3 py-3 rounded-full transition-all duration-500 ease-out hover:scale-105"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: `
              0 8px 32px rgba(0,0,0,0.3),
              0 0 0 1px rgba(255,255,255,0.1),
              inset 0 1px 0 rgba(255,255,255,0.2),
              inset 0 -1px 0 rgba(0,0,0,0.1)
            `,
          }}
        >
          {/* Gradient border overlay */}
          <div
            className="absolute inset-0 rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-500"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 50%, rgba(255,255,255,0.1) 100%)',
              padding: '1px',
              mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              maskComposite: 'exclude',
              WebkitMaskComposite: 'xor',
            }}
          />

          {/* Glow effect on hover */}
          <div
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: 'radial-gradient(circle at center, rgba(162,255,0,0.15) 0%, transparent 70%)',
              filter: 'blur(10px)',
            }}
          />

          <span className="relative font-bold text-sm tracking-wide text-white group-hover:text-accent transition-colors duration-300">HIRE ME</span>
          <div
            className="relative rounded-full p-2.5 flex items-center justify-center transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 100%)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2), 0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            <span className="material-symbols-outlined text-xl text-white group-hover:text-accent transition-colors duration-300">person_add</span>
          </div>
        </button>
      </div>

      {/* Scroll Indicator - Only on Home */}
      {location.pathname === '/' && (
        <div className="fixed bottom-8 left-8 z-50 mix-blend-difference text-white hidden md:block pointer-events-none">
          <span className="font-mono text-xs tracking-widest opacity-60">
            SCROLL 00{activeScrollIndex}/003
          </span>
        </div>
      )}
    </main>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
