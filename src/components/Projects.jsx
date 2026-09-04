import { useState } from 'react';
import { projects } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import './Projects.css';

import ucg1 from '../assets/projects/ucg1.jpg';
import ucg2 from '../assets/projects/ucg2.jpg';
import jaagratha from '../assets/projects/jaagratha.jpg';
import notely from '../assets/projects/notely.jpg';

/* project.images entries map to real screenshot files */
const screenshots = {
  ucg1,
  ucg2,
  jaagratha,
  notely,
};

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading
          label="Projects"
          title="Things I've built"
          subtitle="Full-stack and frontend projects — from AI-powered platforms to real-time mapping tools — built end to end."
          id="projects-title"
        />

        <div className="projects-grid">
          {projects.map((project) => (
            <Reveal
              key={project.id}
              delay={project.featured ? 1 : 2}
              className={project.featured ? 'projects-featured' : ''}
            >
              <ProjectCard
                project={project}
                srcs={project.images.map((name) => screenshots[name])}
                onOpen={setActive}
              />
            </Reveal>
          ))}
        </div>
      </div>

      {active ? (
        <ProjectModal
          project={active}
          srcs={active.images.map((name) => screenshots[name])}
          onClose={() => setActive(null)}
        />
      ) : null}
    </section>
  );
}
