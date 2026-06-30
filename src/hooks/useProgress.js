import { useState, useEffect, useCallback } from 'react'
import { POINTS_PER_LEVEL } from '../data/levels.js'

const STORAGE_KEY = 'bloom-english-progress-v1'

const DEFAULT_STATE = {
  hasTakenTest: false,
  levelIndex: 2, // default to B1 if somehow skipped
  points: 0,
  wordsLearned: 0,
  streak: 0,
  lastActiveDate: null,
  dailyDone: 0,
  dailyGoal: 10,
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return DEFAULT_STATE
    const parsed = JSON.parse(raw)
    return { ...DEFAULT_STATE, ...parsed }
  } catch {
    return DEFAULT_STATE
  }
}

function isSameDay(a, b) {
  if (!a || !b) return false
  return a.slice(0, 10) === b.slice(0, 10)
}

function isYesterday(prevISO, todayISO) {
  if (!prevISO) return false
  const prev = new Date(prevISO)
  const today = new Date(todayISO)
  const diffMs = today.setHours(0, 0, 0, 0) - prev.setHours(0, 0, 0, 0)
  return diffMs === 86400000
}

export function useProgress() {
  const [state, setState] = useState(loadState)

  // Persist on every change.
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      // Storage may be unavailable (private browsing); fail silently.
    }
  }, [state])

  // Handle daily streak bookkeeping once, on mount.
  useEffect(() => {
    const todayISO = new Date().toISOString()
    setState((prev) => {
      if (isSameDay(prev.lastActiveDate, todayISO)) return prev
      const continuesStreak = isYesterday(prev.lastActiveDate, todayISO)
      return {
        ...prev,
        lastActiveDate: todayISO,
        streak: prev.lastActiveDate ? (continuesStreak ? prev.streak + 1 : 1) : 1,
        dailyDone: 0,
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const addPoints = useCallback((amount) => {
    let leveledUp = false
    setState((prev) => {
      const newPoints = prev.points + amount
      const levelsGained = Math.floor(newPoints / POINTS_PER_LEVEL) - Math.floor(prev.points / POINTS_PER_LEVEL)
      const newLevelIndex = Math.min(5, prev.levelIndex + Math.max(0, levelsGained))
      leveledUp = newLevelIndex > prev.levelIndex
      return {
        ...prev,
        points: newPoints,
        dailyDone: prev.dailyDone + 1,
        levelIndex: newLevelIndex,
      }
    })
    return leveledUp
  }, [])

  const incrementWordsLearned = useCallback(() => {
    setState((prev) => ({ ...prev, wordsLearned: prev.wordsLearned + 1 }))
  }, [])

  const setLevelFromTest = useCallback((levelIndex) => {
    setState((prev) => ({ ...prev, levelIndex, hasTakenTest: true, points: 0 }))
  }, [])

  const resetTest = useCallback(() => {
    setState((prev) => ({ ...prev, hasTakenTest: false }))
  }, [])

  const resetAllProgress = useCallback(() => {
    setState(DEFAULT_STATE)
  }, [])

  return {
    state,
    addPoints,
    incrementWordsLearned,
    setLevelFromTest,
    resetTest,
    resetAllProgress,
  }
}
