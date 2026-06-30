import { useState, useCallback } from 'react'
import { useProgress } from './hooks/useProgress.js'
import PlacementTest from './components/PlacementTest.jsx'
import NavBar from './components/NavBar.jsx'
import Home from './components/Home.jsx'
import Vocabulary from './components/Vocabulary.jsx'
import Grammar from './components/Grammar.jsx'
import Reading from './components/Reading.jsx'
import Listening from './components/Listening.jsx'
import Chat from './components/Chat.jsx'

export default function App() {
  const { state, addPoints, incrementWordsLearned, setLevelFromTest, resetAllProgress, resetTest } = useProgress()
  const [tab, setTab] = useState('home')
  const [justLeveledUp, setJustLeveledUp] = useState(false)

  const handleTestComplete = useCallback(
    (levelIndex) => setLevelFromTest(levelIndex),
    [setLevelFromTest]
  )

  const handlePoints = useCallback(
    (amount) => {
      const leveledUp = addPoints(amount)
      if (leveledUp) {
        setJustLeveledUp(true)
        setTimeout(() => setJustLeveledUp(false), 4000)
      }
    },
    [addPoints]
  )

  if (!state.hasTakenTest) {
    return <PlacementTest onComplete={handleTestComplete} />
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      maxWidth: 560,
      margin: '0 auto',
      background: 'var(--paper)',
    }}>
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {tab === 'home' && (
          <Home
            progress={state}
            onNavigate={setTab}
            justLeveledUp={justLeveledUp}
            onResetProgress={resetAllProgress}
            onRetakeTest={resetTest}
          />
        )}
        {tab === 'vocab' && (
          <Vocabulary
            levelIndex={state.levelIndex}
            onWordLearned={() => { incrementWordsLearned(); handlePoints(5) }}
          />
        )}
        {tab === 'grammar' && (
          <Grammar
            levelIndex={state.levelIndex}
            onCorrectAnswer={() => handlePoints(10)}
          />
        )}
        {tab === 'reading' && (
          <Reading levelIndex={state.levelIndex} />
        )}
        {tab === 'listening' && (
          <Listening
            levelIndex={state.levelIndex}
            onCorrectAnswer={() => handlePoints(8)}
          />
        )}
        {tab === 'speaking' && (
          <Chat
            levelIndex={state.levelIndex}
            onAnswered={() => handlePoints(5)}
          />
        )}
      </div>
      <NavBar active={tab} onChange={setTab} />
    </div>
  )
}
