import { heroTechBadges, personalInfo } from '../data/portfolioData';
import profileImg from '../assets/profile.jpg';
import { ArrowDown, Linkedin, Mail, MapPin, Phone } from './icons';
import './Hero.css';

function scrollToProjects(e) {
  e.preventDefault();
  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
}

const contactChips = [
  { icon: Mail, label: 'Email', href: `mailto:${personalInfo.email}`, value: personalInfo.email },
  { icon: Phone, label: 'Phone', href: personalInfo.phoneHref, value: personalInfo.phoneDisplay },
  { icon: Linkedin, label: 'LinkedIn', href: personalInfo.linkedinUrl, value: 'in/athul-george-483b38357' },
];

export default function Hero() {
  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div className="hero-glow hero-glow-a" aria-hidden="true" />
      <div className="hero-glow hero-glow-b" aria-hidden="true" />

      <div className="container hero-grid">
        {/* ---- Copy ---- */}
        <div className="hero-copy">
          <span className="hero-status" role="status">
            <span className="hero-status-dot" aria-hidden="true" />
            Open to internship opportunities
          </span>

          <h1 className="hero-title">
            <span className="hero-hello">Hi, I'm</span>
            <span className="hero-name text-gradient">{personalInfo.name}</span>
          </h1>

          <p className="hero-role">
            <span className="hero-role-bar" aria-hidden="true" />
            {personalInfo.role}
          </p>

          <p className="hero-tagline">{personalInfo.tagline}</p>

          <p className="hero-description">{personalInfo.description}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary" onClick={scrollToProjects}>
              View Projects
              <ArrowDown width={17} height={17} className="btn-icon-slide" />
            </a>
          </div>

          <ul className="hero-contacts">
            {contactChips.map(({ icon: Icon, label, href, value }) => (
              <li key={label}>
                <a className="hero-contact" href={href} aria-label={`${label}: ${value}`}>
                  <Icon width={15} height={15} />
                  {value}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ---- Portrait ---- */}
        <div className="hero-visual">
          <div className="hero-portrait-wrap">
            <div className="hero-ring" />
            <figure className="hero-portrait">
              <img src={profileImg} alt={`${personalInfo.name} — portrait`} loading="eager" />
            </figure>

            {heroTechBadges.slice(0, 5).map((badge, i) => (
              <span
                key={badge.name}
                className={`hero-chip hero-chip-${i + 1}`}
                style={{ '--chip-color': badge.color }}
                aria-hidden="true"
              >
                <i className="hero-chip-dot" />
                {badge.name}
              </span>
            ))}

            <div className="hero-locale" aria-hidden="true">
              <MapPin width={15} height={15} />
              Pala, India
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="hero-scroll" aria-label="Scroll to About">
        <span className="hero-scroll-track" aria-hidden="true" />
      </a>
    </section>
  );
}
