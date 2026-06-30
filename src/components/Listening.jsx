import { useState } from 'react'
import { LISTENING } from '../data/listeningExercises.js'
import { LEVELS } from '../data/levels.js'
import { Card, Button, SectionLabel } from './ui.jsx'

export default function Listening({ levelIndex, onCorrectAnswer }) {
  const level = LEVELS[levelIndex]
  const exercises = LISTENING[level] ?? LISTENING['B1']
  const [exIdx, setExIdx] = useState(0)
  const [showTranscript, setShowTranscript] = useState(false)
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const ex = exercises[exIdx]
  const score = submitted
    ? ex.questions.filter((q, i) => answers[i] === q.correct).length
    : null

  function handleSelect(qIdx, optIdx) {
    if (submitted) return
    setAnswers((prev) => ({ ...prev, [qIdx]: optIdx }))
  }

  function handleSubmit() {
    if (Object.keys(answers).length < ex.questions.length) return
    setSubmitted(true)
    const correct = ex.questions.filter((q, i) => answers[i] === q.correct).length
    for (let i = 0; i < correct; i++) onCorrectAnswer?.()
  }

  function handleNext() {
    setExIdx((exIdx + 1) % exercises.length)
    setShowTranscript(false)
    setAnswers({})
    setSubmitted(false)
  }

  return (
    <div style={{ padding: '1.25rem 1rem 1rem' }}>
      <SectionLabel>Listening practice &middot; {level}</SectionLabel>

      <Card style={{ marginBottom: '0.75rem', background: 'var(--gold-tint)', border: '1px solid #c47a2a' }}>
        <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--gold)', marginBottom: '0.3rem' }}>
          📖 Read the conversation — imagine you are listening to it
        </p>
        <p style={{ fontSize: '0.95rem', fontWeight: 500, color: 'var(--ink)', marginBottom: '0.75rem' }}>
          {ex.title}
        </p>
        {!showTranscript ? (
          <Button variant="secondary" onClick={() => setShowTranscript(true)}>
            Show the text
          </Button>
        ) : (
          <div
            style={{
              background: 'var(--paper-raised)',
              borderRadius: 'var(--radius-sm)',
              padding: '0.85rem',
              fontSize: '0.88rem',
              lineHeight: 1.75,
              color: 'var(--ink)',
              whiteSpace: 'pre-wrap',
              border: '1px solid var(--line)',
            }}
          >
            {ex.transcript}
          </div>
        )}
      </Card>

      <p style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--ink-soft)', marginBottom: '0.75rem' }}>
        Now answer the questions:
      </p>

      {ex.questions.map((q, qIdx) => {
        const selected = answers[qIdx]
        return (
          <Card key={qIdx} style={{ marginBottom: '0.75rem' }}>
            <p style={{ fontSize: '0.9rem', fontWeight: 500, marginBottom: '0.75rem', lineHeight: 1.5 }}>
              {qIdx + 1}. {q.q}
            </p>
            <div style={{ display: 'grid', gap: '0.45rem' }}>
              {q.options.map((opt, oIdx) => {
                let bg = 'var(--paper)'
                let border = 'var(--line)'
                let color = 'var(--ink)'
                if (submitted) {
                  if (oIdx === q.correct) { bg = 'var(--sage-tint)'; border = '#639922'; color = 'var(--sage)' }
                  else if (oIdx === selected && oIdx !== q.correct) { bg = 'var(--terracotta-tint)'; border = '#D85A30'; color = 'var(--terracotta-deep)' }
                } else if (oIdx === selected) {
                  border = 'var(--plum)'; bg = 'var(--plum-tint)'; color = 'var(--plum-deep)'
                }
                return (
                  <button
                    key={oIdx}
                    onClick={() => handleSelect(qIdx, oIdx)}
                    disabled={submitted}
                    style={{
                      textAlign: 'left',
                      padding: '0.65rem 0.9rem',
                      borderRadius: 'var(--radius-sm)',
                      border: `1px solid ${border}`,
                      background: bg, color,
                      fontSize: '0.88rem',
                      cursor: submitted ? 'default' : 'pointer',
                    }}
                  >
                    {opt}
                  </button>
                )
              })}
            </div>
          </Card>
        )
      })}

      {!submitted ? (
        <Button
          onClick={handleSubmit}
          style={{ opacity: Object.keys(answers).length < ex.questions.length ? 0.5 : 1 }}
        >
          Check answers
        </Button>
      ) : (
        <>
          <Card style={{
            textAlign: 'center',
            background: score === ex.questions.length ? 'var(--sage-tint)' : 'var(--paper-raised)',
            border: `1px solid ${score === ex.questions.length ? '#639922' : 'var(--line)'}`,
            marginBottom: '0.75rem',
          }}>
            <p style={{ fontWeight: 600, fontSize: '1rem', color: score === ex.questions.length ? 'var(--sage)' : 'var(--ink)' }}>
              {score} / {ex.questions.length} correct
            </p>
            <p style={{ fontSize: '0.82rem', color: 'var(--ink-faint)', marginTop: '0.3rem' }}>
              {score === ex.questions.length
                ? 'Perfect! Well done.'
                : score >= ex.questions.length / 2
                ? 'Good effort — review the ones you missed above.'
                : 'Re-read the text and try again next time.'}
            </p>
          </Card>
          <Button onClick={handleNext}>Next exercise →</Button>
        </>
      )}
    </div>
  )
}
