import { useEffect, useRef } from 'react';
import ProjectGallery from './ProjectGallery';
import { Check, Close, Users } from './icons';

export default function ProjectModal({ project, srcs, onClose }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    const previous = document.activeElement;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      if (previous instanceof HTMLElement) previous.focus();
    };
  }, [onClose]);

  const trapFocus = (e) => {
    if (e.key !== 'Tab') return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    const focusables = dialog.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    if (focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        className={`modal-dialog modal-dialog--${project.accent}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onKeyDown={trapFocus}
      >
        <div className="modal-visual">
          <ProjectGallery srcs={srcs} alt={`${project.title} interface preview`} />
          {project.team && (
            <span className="project-team-chip">
              <Users width={13} height={13} />
              {project.team}
            </span>
          )}
        </div>

        <button ref={closeRef} type="button" className="modal-close" onClick={onClose} aria-label="Close project details">
          <Close width={18} height={18} />
        </button>

        <div className="modal-content">
          <header className="modal-head">
            <span className="modal-subtitle">{project.subtitle}</span>
            <h3 className="modal-title" id="modal-title">
              {project.title}
            </h3>
            <p className="modal-description">{project.description}</p>
          </header>

          <div className="modal-tech" aria-label="Technologies">
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-pill">
                {tech}
              </span>
            ))}
          </div>

          <div className="modal-section">
            <h4 className="modal-section-title">Key features</h4>
            <ul className="modal-features">
              {project.features.map((feature) => (
                <li key={feature}>
                  <Check width={15} height={15} className="modal-feature-check" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
