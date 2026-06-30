import { useState } from 'react'
import { PLACEMENT_QUESTIONS, levelFromScore, LEVELS, LEVEL_INFO } from '../data/levels.js'
import { Card, Button, ProgressBar } from './ui.jsx'
import BloomMark from './BloomMark.jsx'

export default function PlacementTest({ onComplete }) {
  const [step, setStep] = useState(0)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [resultIndex, setResultIndex] = useState(null)
  const [selected, setSelected] = useState(null)

  const total = PLACEMENT_QUESTIONS.length
  const question = PLACEMENT_QUESTIONS[step]

  function handleAnswer(optionIndex) {
    if (selected !== null) return
    setSelected(optionIndex)
    const correct = optionIndex === question.correct
    const newScore = correct ? score + question.weight : score

    setTimeout(() => {
      if (step + 1 >= total) {
        const idx = levelFromScore(newScore)
        setScore(newScore)
        setResultIndex(idx)
        setFinished(true)
      } else {
        setScore(newScore)
        setStep(step + 1)
        setSelected(null)
      }
    }, 500)
  }

  function handleRetake() {
    setStep(0)
    setScore(0)
    setFinished(false)
    setResultIndex(null)
    setSelected(null)
  }

  if (finished) {
    const level = LEVELS[resultIndex]
    const levelMeta = LEVEL_INFO[level]
    const maxPossibleScore = PLACEMENT_QUESTIONS.reduce((sum, question) => sum + question.weight, 0)

    return (
      <div style={{ maxWidth: 480, margin: '0 auto', padding: '1.5rem 1rem' }}>
        <Card style={{ textAlign: 'center', padding: '2.5rem 1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
            <BloomMark levelIndex={resultIndex} size={84} />
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--ink-faint)', marginBottom: '0.4rem' }}>
            Your recommended level
          </p>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.6rem' }}>{level}</h1>
          <p style={{ fontSize: '0.9rem', color: 'var(--ink-faint)', marginBottom: '0.7rem' }}>
            Score: {score} / {maxPossibleScore}
          </p>
          <div style={{ marginBottom: '0.9rem', lineHeight: 1.6 }}>
            <p style={{ fontSize: '0.95rem', color: 'var(--ink-soft)', marginBottom: '0.45rem' }}>
              <strong>English:</strong> {levelMeta.name} &mdash; {levelMeta.desc}
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--ink-soft)' }}>
              <strong>Русский:</strong> {levelMeta.ruName} &mdash; {levelMeta.ruDesc}
            </p>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--ink-faint)', lineHeight: 1.5 }}>
            This is a quick self-assessment based on your answers.
            <br />
            Это быстрый самооценочный результат по вашим ответам.
          </p>
        </Card>
        <div style={{ marginTop: '1rem', display: 'grid', gap: '0.6rem' }}>
          <Button onClick={() => onComplete(resultIndex)}>Start learning</Button>
          <Button variant="secondary" onClick={handleRetake}>
            Retake the test
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: 480, margin: '0 auto', padding: '1.5rem 1rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '1.6rem', marginBottom: '0.4rem' }}>Find your level</h1>
        <p style={{ fontSize: '0.9rem', color: 'var(--ink-soft)' }}>
          A quick {total}-question check, from simple to more advanced.
        </p>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <ProgressBar percent={(step / total) * 100} color="var(--terracotta)" />
        <p style={{ fontSize: '0.75rem', color: 'var(--ink-faint)', marginTop: '0.4rem' }}>
          Question {step + 1} of {total}
        </p>
      </div>

      <Card>
        <p style={{ fontSize: '1.05rem', fontWeight: 500, marginBottom: '1.1rem', lineHeight: 1.5 }}>
          {question.q}
        </p>
        <div style={{ display: 'grid', gap: '0.6rem' }}>
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
                onClick={() => handleAnswer(i)}
                disabled={selected !== null}
                style={{
                  textAlign: 'left',
                  padding: '0.85rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  border: `1px solid ${border}`,
                  background: bg,
                  color,
                  fontSize: '0.95rem',
                  fontFamily: 'var(--font-body)',
                  cursor: selected !== null ? 'default' : 'pointer',
                }}
              >
                {opt}
              </button>
            )
          })}
        </div>
      </Card>
    </div>
  )
}
