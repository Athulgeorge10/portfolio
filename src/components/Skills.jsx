import { primarySkills, skillGroups } from '../data/portfolioData';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import './Skills.css';

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          label="Skills"
          title="What I build with"
          subtitle="A focused core stack, plus the tools and technologies I've picked up building full projects end to end."
          id="skills-title"
        />

        {/* Core stack */}
        <ul className="skills-core">
          {primarySkills.map((skill, i) => (
            <Reveal as="li" key={skill.name} delay={(i % 4) + 1} className="skill-card">
              <span className="skill-card-index" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="skill-card-name">{skill.name}</h3>
              <p className="skill-card-caption">{skill.caption}</p>
            </Reveal>
          ))}
        </ul>

        {/* Additional technologies */}
        <Reveal delay={2} className="skills-more">
          <p className="skills-more-title">Also demonstrated through projects</p>

          <div className="skills-groups">
            {skillGroups.map((group) => (
              <div key={group.group} className="skill-group">
                <span className="skill-group-label">{group.group}</span>
                <div className="skill-group-pills">
                  {group.skills.map((skill) => (
                    <span key={skill} className="tech-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
