import { useEffect, useRef, useState } from 'react';
import { navLinks, personalInfo, navSectionIds } from '../data/portfolioData';
import { useActiveSection } from '../hooks/useScrollReveal';
import { ArrowDown, Close, Code, Menu } from './icons';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(navSectionIds);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (y / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const closeMenu = () => {
    setOpen(false);
    menuButtonRef.current?.focus();
  };

  return (
    <header className={`navbar${scrolled ? ' is-scrolled' : ''}`}>
      <div className="nav-progress" style={{ width: `${progress}%` }} aria-hidden="true" />
      <nav className="container nav-inner" aria-label="Primary">
        <a className="nav-logo" href="#home" onClick={() => setOpen(false)} aria-label="Athul George — back to top">
          <span className="nav-logo-mark">
            <Code width={17} height={17} />
          </span>
          <span className="nav-logo-name">
            {personalInfo.name}
            <span className="nav-logo-dot">.</span>
          </span>
        </a>

        <ul id="nav-menu" className={`nav-links${open ? ' is-open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav-link${active === link.href.slice(1) ? ' is-active' : ''}`}
                aria-current={active === link.href.slice(1) ? 'true' : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="nav-cta-item">
            <a className="btn btn-primary nav-cta" href="#career" onClick={() => setOpen(false)}>
              Let's Connect
              <ArrowDown width={15} height={15} className="btn-icon-slide" />
            </a>
          </li>
        </ul>

        <button
          ref={menuButtonRef}
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="nav-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </nav>
    </header>
  );
}

