import { experiences } from '../data/portfolioData';
import { Calendar, Check } from './icons';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeading
          label="Experience & Learning"
          title="Training & hands-on experience"
          subtitle="Formal training, project work and campus involvement that shaped how I build software."
          id="experience-title"
        />

        <ol className="timeline">
          {experiences.map((item, i) => (
            <Reveal as="li" key={item.id} delay={(i % 2) + 1} className="timeline-item">
              <div className="timeline-marker" aria-hidden="true">
                <span className="timeline-dot" />
              </div>

              <article className={`exp-card exp-card--${item.kind.toLowerCase()}`}>
                <header className="exp-head">
                  <div className="exp-titles">
                    {item.period ? (
                      <span className="exp-period">
                        <Calendar width={14} height={14} />
                        {item.period}
                      </span>
                    ) : null}
                    <span className={`exp-kind exp-kind--${item.kind.toLowerCase()}`}>{item.kind}</span>
                  </div>
                  <h3 className="exp-title">{item.title}</h3>
                  {item.org ? <p className="exp-org">{item.org}</p> : null}
                </header>

                <p className="exp-summary">{item.summary}</p>

                {item.points.length > 0 ? (
                  <ul className="exp-points">
                    {item.points.map((point) => (
                      <li key={point}>
                        <Check width={14} height={14} className="exp-check" />
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
