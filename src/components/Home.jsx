import { LEVELS, LEVEL_INFO, POINTS_PER_LEVEL } from '../data/levels.js'
import { Card, ProgressBar, SectionLabel } from './ui.jsx'
import BloomMark from './BloomMark.jsx'

export default function Home({ progress, onNavigate, justLeveledUp, onResetProgress, onRetakeTest }) {
  const { levelIndex, points, wordsLearned, streak, dailyDone, dailyGoal } = progress
  const level = LEVELS[levelIndex]
  const pointsIntoLevel = points % POINTS_PER_LEVEL
  const isMaxLevel = levelIndex >= LEVELS.length - 1
  const levelPercent = isMaxLevel ? 100 : (pointsIntoLevel / POINTS_PER_LEVEL) * 100

  const lessons = [
    { id: 'vocab',     title: 'Vocabulary flashcards', sub: `${level} words`,       color: 'var(--plum)',       bg: 'var(--plum-tint)',       icon: <CardsGlyph /> },
    { id: 'grammar',   title: 'Grammar quiz',           sub: 'Five questions',       color: 'var(--sage)',       bg: 'var(--sage-tint)',       icon: <BookGlyph /> },
    { id: 'reading',   title: 'Reading practice',       sub: 'Tap words to learn',  color: 'var(--gold)',       bg: 'var(--gold-tint)',       icon: <ReadGlyph /> },
    { id: 'listening', title: 'Listening comprehension',sub: 'Read & answer',        color: 'var(--terracotta)', bg: 'var(--terracotta-tint)', icon: <ListenGlyph /> },
    { id: 'speaking',  title: 'Speaking practice',      sub: 'Guided prompts',       color: 'var(--plum)',       bg: 'var(--plum-tint)',       icon: <MicGlyph /> },
  ]

  return (
    <div style={{ padding: '1.25rem 1rem 1rem' }}>
      <div style={{ marginBottom: '1.25rem' }}>
        <p style={{ fontSize: '0.85rem', color: 'var(--ink-soft)' }}>Welcome back</p>
        <h1 style={{ fontSize: '1.6rem' }}>Let&rsquo;s keep going</h1>
      </div>

      {justLeveledUp && (
        <Card
          style={{
            background: 'var(--sage-tint)',
            border: '1px solid #639922',
            marginBottom: '0.9rem',
            textAlign: 'center',
            padding: '1rem',
          }}
        >
          <p style={{ color: 'var(--sage)', fontWeight: 600, fontSize: '0.95rem' }}>
            You leveled up to {level}!
          </p>
        </Card>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0,1fr))', gap: '0.6rem', marginBottom: '1rem' }}>
        <Stat value={streak} label="Day streak" />
        <Stat value={wordsLearned} label="Words" />
        <Stat value={points} label="Points" />
      </div>

      <Card style={{ marginBottom: '0.9rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <BloomMark levelIndex={levelIndex} size={56} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.3rem' }}>
              <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>{level} &middot; {LEVEL_INFO[level].name}</span>
            </div>
            <ProgressBar percent={levelPercent} color="var(--plum)" />
            <p style={{ fontSize: '0.72rem', color: 'var(--ink-faint)', marginTop: '0.35rem' }}>
              {isMaxLevel
                ? 'Maximum level reached'
                : `${POINTS_PER_LEVEL - pointsIntoLevel} points to ${LEVELS[levelIndex + 1]}`}
            </p>
          </div>
        </div>
      </Card>

      <Card style={{ marginBottom: '1.25rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <span style={{ fontWeight: 500, fontSize: '0.9rem' }}>Today&rsquo;s progress</span>
          <span style={{ fontSize: '0.8rem', color: 'var(--ink-faint)' }}>
            {Math.min(dailyDone, dailyGoal)} / {dailyGoal}
          </span>
        </div>
        <ProgressBar percent={(dailyDone / dailyGoal) * 100} color="var(--terracotta)" />
      </Card>

      <SectionLabel>Today&rsquo;s lessons</SectionLabel>
      <Card style={{ padding: '0 1.1rem' }}>
        {lessons.map((lesson, i) => (
          <button
            key={lesson.id}
            onClick={() => onNavigate(lesson.id)}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              padding: '0.85rem 0',
              border: 'none',
              borderBottom: i < lessons.length - 1 ? '1px solid var(--line)' : 'none',
              background: 'transparent',
              textAlign: 'left',
            }}
          >
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                background: lesson.bg,
                color: lesson.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              {lesson.icon}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontSize: '0.9rem', fontWeight: 500 }}>{lesson.title}</p>
              <p style={{ fontSize: '0.78rem', color: 'var(--ink-faint)' }}>{lesson.sub}</p>
            </div>
            <span style={{ color: 'var(--ink-faint)' }}>&rsaquo;</span>
          </button>
        ))}
      </Card>

      <button
        onClick={() => {
          if (window.confirm('This will restart the placement test and update your suggested level. Continue?')) {
            onRetakeTest ? onRetakeTest() : onResetProgress()
          }
        }}
        style={{
          width: '100%',
          marginTop: '1.5rem',
          background: 'transparent',
          border: 'none',
          color: 'var(--ink-faint)',
          fontSize: '0.78rem',
          padding: '0.5rem',
        }}
      >
        Retake placement test
      </button>
    </div>
  )
}

function Stat({ value, label }) {
  return (
    <div
      style={{
        background: 'var(--paper-raised)',
        border: '1px solid var(--line)',
        borderRadius: 'var(--radius-sm)',
        padding: '0.7rem 0.4rem',
        textAlign: 'center',
      }}
    >
      <div style={{ fontSize: '1.3rem', fontFamily: 'var(--font-display)', fontWeight: 500 }}>{value}</div>
      <div style={{ fontSize: '0.68rem', color: 'var(--ink-faint)', marginTop: 2 }}>{label}</div>
    </div>
  )
}

function CardsGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="6" width="14" height="14" rx="2" />
      <path d="M7 6V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2" />
    </svg>
  )
}
function BookGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  )
}
function ReadGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M2 6s2-2 5-2 5 2 5 2 2-2 5-2 5 2 5 2v13s-2-2-5-2-5 2-5 2-2-2-5-2-5 2-5 2V6z" strokeLinejoin="round" />
      <path d="M12 6v13" />
    </svg>
  )
}
function ListenGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" strokeLinecap="round"/>
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3v5z"/>
      <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3v5z"/>
    </svg>
  )
}
function MicGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" strokeLinecap="round"/>
      <line x1="12" y1="19" x2="12" y2="23"/>
      <line x1="8" y1="23" x2="16" y2="23"/>
    </svg>
  )
}
