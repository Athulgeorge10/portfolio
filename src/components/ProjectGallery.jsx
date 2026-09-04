import { useState } from 'react';

/**
 * Shows a project screenshot; when several screenshots exist for a
 * project, renders clickable thumbnails to switch between them.
 */
export default function ProjectGallery({ srcs, alt }) {
  const [index, setIndex] = useState(0);
  const multiple = srcs.length > 1;

  return (
    <div className="project-gallery">
      <img
        className="project-gallery-main"
        src={srcs[index]}
        alt={multiple ? `${alt} — view ${index + 1} of ${srcs.length}` : alt}
        loading={index === 0 ? 'eager' : 'lazy'}
      />
      {multiple ? (
        <div className="project-gallery-thumbs" role="group" aria-label={`${alt} — preview views`}>
          {srcs.map((src, i) => (
            <button
              key={src}
              type="button"
              className={`project-gallery-thumb${i === index ? ' is-active' : ''}`}
              aria-pressed={i === index}
              aria-label={`Show ${alt} view ${i + 1}`}
              onClick={() => setIndex(i)}
            >
              <img src={src} alt="" aria-hidden="true" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
