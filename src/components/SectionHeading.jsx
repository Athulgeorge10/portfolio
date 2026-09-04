import Reveal from './Reveal';

export default function SectionHeading({ label, title, subtitle, id }) {
  return (
    <Reveal className="section-header">
      <span className="section-label">{label}</span>
      <h2 className="section-title" id={id}>
        {title}
      </h2>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </Reveal>
  );
}
