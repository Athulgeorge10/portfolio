import { cta, personalInfo } from '../data/portfolioData';
import { Linkedin, Mail, Phone } from './icons';
import Reveal from './Reveal';
import './CareerCTA.css';

const directContacts = [
  { icon: Mail, label: 'Email', href: `mailto:${personalInfo.email}`, value: personalInfo.email },
  { icon: Phone, label: 'Phone', href: personalInfo.phoneHref, value: personalInfo.phoneDisplay },
  { icon: Linkedin, label: 'LinkedIn', href: personalInfo.linkedinUrl, value: 'in/athul-george-483b38357' },
];

export default function CareerCTA() {
  return (
    <section id="career" className="section cta-section" aria-labelledby="cta-heading">
      <div className="container">
        <Reveal className="cta-panel">
          <div className="cta-glow" aria-hidden="true" />
          <span className="section-label">Open to internships</span>

          <h2 className="cta-heading" id="cta-heading">
            Looking for my <span className="text-gradient">next opportunity</span>.
          </h2>

          <p className="cta-text">{cta.text}</p>

          <p className="cta-label">
            <a href={`mailto:${personalInfo.email}`}>Feel free to connect</a>
            <span aria-hidden="true"> — I'd love to hear from you.</span>
          </p>

          <ul className="cta-contacts">
            {directContacts.map(({ icon: Icon, label, href, value }) => (
              <li key={label}>
                <a className="cta-contact" href={href} aria-label={`${label}: ${value}`}>
                  <Icon width={15} height={15} />
                  <span>{value}</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
