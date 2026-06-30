export function Card({ children, style, ...rest }) {
  return (
    <div
      style={{
        background: 'var(--paper-raised)',
        border: '1px solid var(--line)',
        borderRadius: 'var(--radius-md)',
        padding: '1.25rem',
        boxShadow: 'var(--shadow-card)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  )
}

export function Button({ children, variant = 'primary', style, ...rest }) {
  const variants = {
    primary: {
      background: 'var(--plum)',
      color: '#fff',
      border: '1px solid var(--plum)',
    },
    secondary: {
      background: 'transparent',
      color: 'var(--ink)',
      border: '1px solid var(--line-strong)',
    },
    warm: {
      background: 'var(--terracotta)',
      color: '#fff',
      border: '1px solid var(--terracotta)',
    },
  }
  return (
    <button
      style={{
        width: '100%',
        padding: '0.85rem 1.25rem',
        borderRadius: 'var(--radius-sm)',
        fontSize: '0.95rem',
        fontWeight: 500,
        fontFamily: 'var(--font-body)',
        transition: 'transform 0.1s ease, opacity 0.15s ease',
        ...variants[variant],
        ...style,
      }}
      onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.98)')}
      onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      {...rest}
    >
      {children}
    </button>
  )
}

export function ProgressBar({ percent, color = 'var(--plum)' }) {
  return (
    <div
      style={{
        height: 6,
        background: 'var(--line)',
        borderRadius: 999,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${Math.min(100, Math.max(0, percent))}%`,
          background: color,
          borderRadius: 999,
          transition: 'width 0.4s ease',
        }}
      />
    </div>
  )
}

export function SectionLabel({ children }) {
  return (
    <p
      style={{
        fontSize: '0.75rem',
        fontWeight: 600,
        color: 'var(--ink-faint)',
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
        marginBottom: '0.6rem',
      }}
    >
      {children}
    </p>
  )
}
