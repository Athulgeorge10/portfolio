import { footerTagline, navLinks, personalInfo } from '../data/portfolioData';
import { ArrowUpRight, Code, Linkedin, Mail, Phone } from './icons';
import './Footer.css';

const footerContacts = [
  { icon: Mail, label: 'Email', href: `mailto:${personalInfo.email}`, value: personalInfo.email },
  { icon: Phone, label: 'Phone', href: personalInfo.phoneHref, value: personalInfo.phoneDisplay },
  { icon: Linkedin, label: 'LinkedIn', href: personalInfo.linkedinUrl, value: 'in/athul-george-483b38357' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="footer-logo" href="#home" aria-label="Back to top">
              <span className="footer-logo-mark">
                <Code width={16} height={16} />
              </span>
              <span>
                <span className="footer-name">{personalInfo.name}</span>
                <span className="footer-tagline">{footerTagline}</span>
              </span>
            </a>
          </div>

          <nav className="footer-nav" aria-label="Footer">
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="footer-contact">
            {footerContacts.map(({ icon: Icon, label, href, value }) => (
              <li key={label}>
                <a href={href} aria-label={`${label}: ${value}`}>
                  <Icon width={15} height={15} />
                  {value}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-bottom">
          <p>© {year} {personalInfo.name}. All rights reserved.</p>
          <a className="footer-top" href="#home">
            Back to top
            <ArrowUpRight width={14} height={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
