import { aboutFacts, aboutText } from '../data/portfolioData';
import { iconMap } from './icons';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading
          label="About"
          title="Turning ideas into useful software"
          subtitle="A quick look at who I am, what I care about, and where I'm headed."
          id="about-title"
        />

        <div className="about-grid">
          <Reveal className="about-copy">
            {aboutText.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </Reveal>

          <Reveal delay={1} className="about-facts-card">
            <ul className="about-facts">
              {aboutFacts.map((fact) => {
                const Icon = iconMap[fact.icon] || iconMap.spark;
                return (
                  <li key={fact.label} className="about-fact">
                    <span className="about-fact-icon" aria-hidden="true">
                      <Icon width={18} height={18} />
                    </span>
                    <span className="about-fact-body">
                      <span className="about-fact-label">{fact.label}</span>
                      <span className="about-fact-value">
                        {fact.value}
                        {fact.note ? <em className="about-fact-note"> · {fact.note}</em> : null}
                      </span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
