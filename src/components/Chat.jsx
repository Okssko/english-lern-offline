import { useState } from 'react'
import { CONVERSATIONS } from '../data/conversations.js'
import { LEVELS } from '../data/levels.js'
import { Card, Button, SectionLabel } from './ui.jsx'

export default function Chat({ levelIndex, onAnswered }) {
  const level = LEVELS[levelIndex]
  const topics = CONVERSATIONS[level] ?? CONVERSATIONS['B1']
  const [topicIdx, setTopicIdx] = useState(0)
  const [turnIdx, setTurnIdx] = useState(0)
  const [answer, setAnswer] = useState('')
  const [revealed, setRevealed] = useState(false)
  const [done, setDone] = useState(false)

  const topic = topics[topicIdx]
  const turn = topic.turns[turnIdx]
  const totalTopics = topics.length

  function handleReveal() {
    setRevealed(true)
    onAnswered?.()
  }

  function handleNext() {
    if (turnIdx + 1 < topic.turns.length) {
      setTurnIdx(turnIdx + 1)
      setAnswer('')
      setRevealed(false)
    } else {
      setDone(true)
    }
  }

  function handleNextTopic() {
    setTopicIdx((topicIdx + 1) % totalTopics)
    setTurnIdx(0)
    setAnswer('')
    setRevealed(false)
    setDone(false)
  }

  return (
    <div style={{ padding: '1.25rem 1rem 1rem' }}>
      <SectionLabel>Speaking practice &middot; {level}</SectionLabel>

      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.9rem', flexWrap: 'wrap' }}>
        {topics.map((t, i) => (
          <button
            key={i}
            onClick={() => { setTopicIdx(i); setTurnIdx(0); setAnswer(''); setRevealed(false); setDone(false) }}
            style={{
              fontSize: '0.78rem',
              padding: '0.3rem 0.75rem',
              borderRadius: 999,
              border: '1px solid var(--line-strong)',
              background: i === topicIdx ? 'var(--plum)' : 'var(--paper-raised)',
              color: i === topicIdx ? '#fff' : 'var(--ink-soft)',
              cursor: 'pointer',
            }}
          >
            {t.topic}
          </button>
        ))}
      </div>

      {!done ? (
        <>
          <Card style={{ marginBottom: '0.75rem', background: 'var(--plum-tint)', border: '1px solid var(--plum)' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--plum)', fontWeight: 600, marginBottom: '0.3rem' }}>
              Your tutor says:
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--plum-deep)', lineHeight: 1.6 }}>
              {turn.prompt}
            </p>
            <p style={{ fontSize: '0.72rem', color: 'var(--ink-faint)', marginTop: '0.5rem' }}>
              Step {turnIdx + 1} of {topic.turns.length}
            </p>
          </Card>

          <Card style={{ marginBottom: '0.75rem' }}>
            <p style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--ink-soft)', marginBottom: '0.5rem' }}>
              Your answer (write or speak out loud, then check)
            </p>
            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Type your answer here..."
              rows={4}
              style={{
                width: '100%',
                padding: '0.7rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--line-strong)',
                fontSize: '0.9rem',
                fontFamily: 'var(--font-body)',
                background: 'var(--paper)',
                color: 'var(--ink)',
                resize: 'vertical',
              }}
            />
          </Card>

          {!revealed ? (
            <Button onClick={handleReveal} variant="secondary">
              Show a good answer
            </Button>
          ) : (
            <>
              <Card style={{ marginBottom: '0.75rem', background: 'var(--sage-tint)', border: '1px solid #639922' }}>
                <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--sage)', marginBottom: '0.3rem' }}>
                  Example answer
                </p>
                <p style={{ fontSize: '0.95rem', color: 'var(--ink)', lineHeight: 1.6 }}>
                  {turn.example}
                </p>
                <p style={{ fontSize: '0.75rem', color: 'var(--ink-faint)', marginTop: '0.6rem' }}>
                  Compare your answer. Did you use similar vocabulary and grammar? That&rsquo;s great progress!
                </p>
              </Card>
              <Button onClick={handleNext}>
                {turnIdx + 1 < topic.turns.length ? 'Next prompt →' : 'Finish topic ✓'}
              </Button>
            </>
          )}
        </>
      ) : (
        <Card style={{ textAlign: 'center', padding: '2rem 1rem' }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🌸</div>
          <h2 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Topic complete!</h2>
          <p style={{ color: 'var(--ink-soft)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
            You practised all {topic.turns.length} prompts in &ldquo;{topic.topic}&rdquo;.
          </p>
          <Button onClick={handleNextTopic}>
            Try next topic →
          </Button>
        </Card>
      )}
    </div>
  )
}
