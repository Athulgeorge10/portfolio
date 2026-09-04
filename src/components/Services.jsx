import { services } from '../data/portfolioData';
import { iconMap } from './icons';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import './Services.css';

export default function Services() {
  return (
    <section id="what-i-do" className="section" aria-labelledby="services-title">
      <div className="container">
        <SectionHeading
          label="What I Do"
          title="How I like to work"
          subtitle="The kinds of work I enjoy most — from polished interfaces to full applications."
          id="services-title"
        />

        <ul className="services-grid">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || iconMap.code;
            return (
              <Reveal as="li" key={service.title} delay={(i % 3) + 1} className="service-card">
                <span className="service-icon" aria-hidden="true">
                  <Icon width={24} height={24} />
                </span>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
