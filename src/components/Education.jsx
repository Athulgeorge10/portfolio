import { education } from '../data/portfolioData';
import { GraduationCap, MapPin } from './icons';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import './Education.css';

export default function Education() {
  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <div className="container">
        <SectionHeading
          label="Education"
          title="Academic background"
          subtitle="Currently pursuing my undergraduate degree in computer science."
          id="education-title"
        />

        <Reveal className="edu-card-wrap">
          <article className="edu-card">
            <div className="edu-icon" aria-hidden="true">
              <GraduationCap width={26} height={26} />
            </div>

            <div className="edu-body">
              <span className="edu-status">
                <span className="edu-status-dot" aria-hidden="true" />
                {education.status}
              </span>
              <h3 className="edu-degree">{education.degree}</h3>
              <p className="edu-institution">{education.institution}</p>

              <ul className="edu-meta">
                <li>
                  <MapPin width={14} height={14} />
                  {education.location}
                </li>
                <li>
                  <GraduationCap width={14} height={14} />
                  {education.period}
                </li>
                <li className="edu-meta-note">{education.note}</li>
              </ul>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
