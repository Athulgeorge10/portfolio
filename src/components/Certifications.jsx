import { certifications } from '../data/portfolioData';
import { Shield } from './icons';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import './Certifications.css';

export default function Certifications() {
  return (
    <section id="certifications" className="section" aria-labelledby="certifications-title">
      <div className="container">
        <SectionHeading
          label="Certifications"
          title="Certifications & courses"
          subtitle="Online courses I've completed to strengthen my fundamentals."
          id="certifications-title"
        />

        <ul className="cert-grid">
          {certifications.map((cert, i) => (
            <Reveal as="li" key={`${cert.provider}-${cert.title}`} delay={(i % 3) + 1} className="cert-card">
              <span className="cert-icon" aria-hidden="true">
                <Shield width={22} height={22} />
              </span>
              <div>
                <span className="cert-provider">{cert.provider}</span>
                <h3 className="cert-title">{cert.title}</h3>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
