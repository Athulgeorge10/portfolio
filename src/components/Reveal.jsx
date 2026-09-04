import { useScrollReveal } from '../hooks/useScrollReveal';

/**
 * Fades + slides children in when scrolled into view.
 * Respects prefers-reduced-motion (see hook + CSS).
 */
export default function Reveal({ as: Tag = 'div', children, className = '', delay = 0 }) {
  const [ref, visible] = useScrollReveal();
  const delayClass = delay > 0 ? ` reveal-delay-${Math.min(delay, 4)}` : '';

  return (
    <Tag ref={ref} className={`reveal${visible ? ' visible' : ''}${delayClass} ${className}`.trim()}>
      {children}
    </Tag>
  );
}
