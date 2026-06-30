import { useState, useEffect } from 'react'
import { READING } from '../data/reading.js'
import { LEVELS } from '../data/levels.js'
import { Card, Button, SectionLabel } from './ui.jsx'

export default function Reading({ levelIndex }) {
  const level = LEVELS[levelIndex]
  const { title, text, glossary } = READING[level]
  const [lookup, setLookup] = useState(null)

  useEffect(() => setLookup(null), [level, glossary])

  const glossaryKeys = Object.keys(glossary).sort((a, b) => b.length - a.length)

  function renderText() {
    let remaining = text
    const parts = []
    let key = 0

    while (remaining.length > 0) {
      let matched = null
      let matchIndex = -1
      for (const term of glossaryKeys) {
        const idx = remaining.toLowerCase().indexOf(term.toLowerCase())
        if (idx !== -1 && (matchIndex === -1 || idx < matchIndex)) {
          matchIndex = idx
          matched = term
        }
      }
      if (matched === null) {
        parts.push(<span key={key++}>{remaining}</span>)
        break
      }
      if (matchIndex > 0) {
        parts.push(<span key={key++}>{remaining.slice(0, matchIndex)}</span>)
      }
      const original = remaining.slice(matchIndex, matchIndex + matched.length)
      parts.push(
        <span
          key={key++}
          onClick={() => setLookup({ term: matched, def: glossary[matched] })}
          style={{
            background: 'var(--gold-tint)',
            color: 'var(--gold)',
            borderRadius: 4,
            padding: '0 2px',
            cursor: 'pointer',
          }}
        >
          {original}
        </span>
      )
      remaining = remaining.slice(matchIndex + matched.length)
    }
    return parts
  }

  return (
    <div style={{ padding: '1.25rem 1rem 1rem' }}>
      <SectionLabel>Reading &middot; {level}</SectionLabel>
      <Card>
        <h2 style={{ fontSize: '1.1rem', marginBottom: '0.8rem' }}>{title}</h2>
        <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'var(--ink)' }}>{renderText()}</p>

        {lookup && (
          <div
            style={{
              marginTop: '0.9rem',
              background: 'var(--paper)',
              border: '1px solid var(--line)',
              borderRadius: 'var(--radius-sm)',
              padding: '0.75rem 0.9rem',
            }}
          >
            <p style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--gold)' }}>{lookup.term}</p>
            <p style={{ fontSize: '0.82rem', color: 'var(--ink-soft)', marginTop: '0.25rem' }}>{lookup.def}</p>
          </div>
        )}
      </Card>

    </div>
  )
}
