import { useState, useEffect } from 'react'
import { GRAMMAR } from '../data/grammar.js'
import { LEVELS } from '../data/levels.js'
import { Card, Button, SectionLabel } from './ui.jsx'

export default function Grammar({ levelIndex, onCorrectAnswer }) {
  const level = LEVELS[levelIndex]
  const { topic, rule, questions } = GRAMMAR[level]
  const [step, setStep] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    setStep(0)
    setSelected(null)
    setScore(0)
    setDone(false)
  }, [level])

  const question = questions[step]

  function answer(i) {
    if (selected !== null) return
    setSelected(i)
    const correct = i === question.correct
    if (correct) {
      setScore((s) => s + 1)
      onCorrectAnswer()
    }
    setTimeout(() => {
      if (step + 1 >= questions.length) {
        setDone(true)
      } else {
        setStep(step + 1)
        setSelected(null)
      }
    }, 1400)
  }

  function retry() {
    setStep(0)
    setSelected(null)
    setScore(0)
    setDone(false)
  }

  return (
    <div style={{ padding: '1.25rem 1rem 1rem' }}>
      <SectionLabel>Grammar &middot; {topic}</SectionLabel>

      <Card style={{ marginBottom: '0.9rem', borderLeft: '3px solid var(--plum)', borderRadius: '0 var(--radius-md) var(--radius-md) 0' }}>
        <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--plum)', marginBottom: '0.3rem' }}>
          Rule reminder
        </p>
        <p style={{ fontSize: '0.85rem', color: 'var(--ink-soft)', lineHeight: 1.6 }}>{rule}</p>
      </Card>

      {!done ? (
        <Card>
          <p style={{ fontSize: '0.75rem', color: 'var(--ink-faint)', marginBottom: '0.6rem' }}>
            Question {step + 1} of {questions.length}
          </p>
          <p style={{ fontSize: '1rem', fontWeight: 500, marginBottom: '1rem', lineHeight: 1.5 }}>{question.q}</p>
          <div style={{ display: 'grid', gap: '0.5rem' }}>
            {question.options.map((opt, i) => {
              let bg = 'var(--paper)'
              let border = 'var(--line)'
              let color = 'var(--ink)'
              if (selected !== null) {
                if (i === question.correct) {
                  bg = 'var(--sage-tint)'
                  border = '#639922'
                  color = 'var(--sage)'
                } else if (i === selected) {
                  bg = 'var(--terracotta-tint)'
                  border = '#D85A30'
                  color = 'var(--terracotta-deep)'
                }
              }
              return (
                <button
                  key={i}
                  onClick={() => answer(i)}
                  disabled={selected !== null}
                  style={{
                    textAlign: 'left',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    border: `1px solid ${border}`,
                    background: bg,
                    color,
                    fontSize: '0.9rem',
                  }}
                >
                  {opt}
                </button>
              )
            })}
          </div>
        </Card>
      ) : (
        <Card style={{ textAlign: 'center', padding: '2rem 1rem' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Quiz complete</h2>
          <p style={{ color: 'var(--ink-soft)', marginBottom: '1rem' }}>
            You scored {score} / {questions.length}
          </p>
          <Button variant="secondary" onClick={retry}>
            Try again
          </Button>
        </Card>
      )}

      <div style={{ marginTop: '0.9rem' }}>
        <Button onClick={() => onAskAI(topic)}>Ask AI to explain more</Button>
      </div>
    </div>
  )
}
