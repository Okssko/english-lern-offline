import { useState, useEffect } from 'react'
import { VOCABULARY } from '../data/vocabulary.js'
import { LEVELS } from '../data/levels.js'
import { Card, Button, SectionLabel } from './ui.jsx'

export default function Vocabulary({ levelIndex, onWordLearned }) {
  const level = LEVELS[levelIndex]
  const words = VOCABULARY[level]
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)

  useEffect(() => {
    setIndex(0)
    setFlipped(false)
  }, [level])

  const word = words[index]

  function flip() {
    const wasFlipped = flipped
    setFlipped(!flipped)
    if (!wasFlipped) onWordLearned()
  }

  function next() {
    setIndex((i) => (i + 1) % words.length)
    setFlipped(false)
  }
  function prev() {
    setIndex((i) => (i - 1 + words.length) % words.length)
    setFlipped(false)
  }

  return (
    <div style={{ padding: '1.25rem 1rem 1rem' }}>
      <SectionLabel>
        Flashcard {index + 1} / {words.length} &middot; {level}
      </SectionLabel>

      <Card
        onClick={flip}
        style={{
          textAlign: 'center',
          padding: '2.5rem 1.25rem',
          minHeight: 220,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
      >
        {!flipped ? (
          <>
            <h2 style={{ fontSize: '2rem', marginBottom: '0.4rem', wordBreak: 'break-word' }}>{word.word}</h2>
            {word.translation && (
              <p style={{ fontSize: '1rem', color: 'var(--ink-soft)', fontWeight: 600, marginBottom: '0.4rem' }}>
                {word.translation}
              </p>
            )}
            <p style={{ fontSize: '0.9rem', color: 'var(--ink-faint)', fontFamily: 'monospace', marginBottom: '1rem' }}>
              {word.phonetic}
            </p>
            <p style={{ fontSize: '0.75rem', color: 'var(--ink-faint)' }}>Tap to see definition</p>
          </>
        ) : (
          <>
            {word.translation && (
              <p style={{ fontSize: '0.95rem', color: 'var(--ink-soft)', fontWeight: 600, marginBottom: '0.45rem' }}>
                {word.translation}
              </p>
            )}
            <p style={{ fontSize: '1.05rem', color: 'var(--ink-soft)', lineHeight: 1.6, marginBottom: '0.6rem' }}>
              {word.def}
            </p>
            <p style={{ fontSize: '0.9rem', color: 'var(--ink-faint)', fontStyle: 'italic' }}>
              &ldquo;{word.example}&rdquo;
            </p>
          </>
        )}
      </Card>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem', marginTop: '0.75rem' }}>
        <Button variant="secondary" onClick={prev}>
          Previous
        </Button>
        <Button variant="secondary" onClick={next}>
          Next
        </Button>
      </div>

      <div style={{ marginTop: '0.9rem' }}>
        <Button onClick={() => onAskAI(word.word)}>Practice this word with AI</Button>
      </div>
    </div>
  )
}
