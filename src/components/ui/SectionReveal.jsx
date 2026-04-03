import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export default function SectionReveal({ children, className = '', delay = 0 }) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}
