import { useEffect, useRef, useState } from 'react';

export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px',
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return [ref, isVisible];
}

export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // If at the very top, default to home
      if (scrollY < 100) {
        setActiveSection('home');
        return;
      }

      // Find the section that is most visible in the viewport
      let bestMatch = 'home';
      let bestScore = -Infinity;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionBottom = rect.bottom;

        // Calculate how much of the section is in the viewport
        const visibleTop = Math.max(0, sectionTop);
        const visibleBottom = Math.min(windowHeight, sectionBottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);

        // Score based on visibility and proximity to the top of viewport
        // Sections closer to the top of viewport get priority
        const score = visibleHeight - Math.abs(sectionTop - 80);

        if (visibleHeight > 0 && score > bestScore) {
          bestScore = score;
          bestMatch = id;
        }
      }

      setActiveSection(bestMatch);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  return activeSection;
}
