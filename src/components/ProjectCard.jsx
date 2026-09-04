import ProjectGallery from './ProjectGallery';
import { ArrowRight, Check, Sparkle, Users } from './icons';

export default function ProjectCard({ project, srcs, onOpen }) {
  const featured = project.featured;

  return (
    <article className={`project-card project-card--${project.accent}${featured ? ' project-card--featured' : ''}`}>
      <div className="project-visual">
        <ProjectGallery srcs={srcs} alt={`${project.title} interface preview`} />
        <span className="project-visual-glow" aria-hidden="true" />
        {featured && (
          <span className="project-flag">
            <Sparkle width={13} height={13} />
            Featured project
          </span>
        )}
        {project.team && (
          <span className="project-team-chip">
            <Users width={13} height={13} />
            {project.team}
          </span>
        )}
      </div>

      <div className="project-body">
        <header className="project-head">
          <span className="project-subtitle">{project.subtitle}</span>
          <h3 className="project-title">
            {project.title}
            {featured ? <span className="project-badge">{project.badge}</span> : null}
          </h3>
        </header>

        <p className="project-description">{project.description}</p>

        <ul className={`project-features${featured ? ' project-features--compact' : ''}`}>
          {project.features.map((feature) => (
            <li key={feature}>
              <Check width={14} height={14} className="project-feature-check" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="project-tech" aria-label="Technologies">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-pill">
              {tech}
            </span>
          ))}
        </div>

        {project.details && (
          <div className="project-actions">
            <button type="button" className="btn btn-secondary project-details" onClick={() => onOpen(project)}>
              View Details
              <ArrowRight width={15} height={15} className="btn-icon-slide" />
            </button>
          </div>
        )}
      </div>
    </article>
  );
}
