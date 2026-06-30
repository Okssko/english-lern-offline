const TABS = [
  { id: 'home',     label: 'Home',     Icon: HomeIcon },
  { id: 'vocab',    label: 'Words',    Icon: CardsIcon },
  { id: 'grammar',  label: 'Grammar',  Icon: BookIcon },
  { id: 'reading',  label: 'Reading',  Icon: ReadIcon },
  { id: 'listening',label: 'Listen',   Icon: ListenIcon },
  { id: 'speaking', label: 'Speak',    Icon: SpeakIcon },
]

export default function NavBar({ active, onChange }) {
  return (
    <nav
      aria-label="Main navigation"
      style={{
        position: 'sticky',
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        background: 'var(--paper-raised)',
        borderTop: '1px solid var(--line)',
        padding: '0.35rem 0.2rem calc(0.35rem + env(safe-area-inset-bottom))',
        zIndex: 10,
      }}
    >
      {TABS.map(({ id, label, Icon }) => {
        const isActive = active === id
        return (
          <button
            key={id}
            onClick={() => onChange(id)}
            aria-label={label}
            aria-current={isActive ? 'page' : undefined}
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
              padding: '0.45rem 0.1rem',
              border: 'none',
              background: 'transparent',
              color: isActive ? 'var(--plum)' : 'var(--ink-faint)',
            }}
          >
            <Icon active={isActive} />
            <span style={{ fontSize: '0.6rem', fontWeight: isActive ? 600 : 400, lineHeight: 1 }}>{label}</span>
          </button>
        )
      })}
    </nav>
  )
}

const S = { strokeWidth: 1.8 }
const SA = { strokeWidth: 2.2 }

function HomeIcon({ active }) {
  const p = active ? SA : S
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" {...p}>
    <path d="M3 11.5 12 4l9 7.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
}
function CardsIcon({ active }) {
  const p = active ? SA : S
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" {...p}>
    <rect x="3" y="6" width="14" height="14" rx="2"/>
    <path d="M7 6V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2"/>
  </svg>
}
function BookIcon({ active }) {
  const p = active ? SA : S
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" {...p}>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
  </svg>
}
function ReadIcon({ active }) {
  const p = active ? SA : S
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" {...p}>
    <path d="M2 6s2-2 5-2 5 2 5 2 2-2 5-2 5 2 5 2v13s-2-2-5-2-5 2-5 2-2-2-5-2-5 2-5 2V6z" strokeLinejoin="round"/>
    <path d="M12 6v13"/>
  </svg>
}
function ListenIcon({ active }) {
  const p = active ? SA : S
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" {...p}>
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" strokeLinecap="round"/>
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3v5z"/>
    <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3v5z"/>
  </svg>
}
function SpeakIcon({ active }) {
  const p = active ? SA : S
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" {...p}>
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" strokeLinecap="round"/>
    <line x1="12" y1="19" x2="12" y2="23"/>
    <line x1="8" y1="23" x2="16" y2="23"/>
  </svg>
}
