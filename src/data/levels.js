export const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']

export const LEVEL_INFO = {
  A1: { name: 'Beginner', ruName: 'Начальный уровень', desc: 'You know everyday words and the simplest phrases.', ruDesc: 'Вы знаете повседневные слова и самые простые фразы.' },
  A2: { name: 'Elementary', ruName: 'Элементарный уровень', desc: 'You can handle short, simple exchanges on familiar topics.', ruDesc: 'Вы можете поддерживать короткие простые разговоры на знакомые темы.' },
  B1: { name: 'Intermediate', ruName: 'Средний уровень', desc: 'You understand the main points of clear standard speech and can connect ideas in conversation.', ruDesc: 'Вы понимаете основные идеи понятной стандартной речи и можете связно выражать мысли в разговоре.' },
  B2: { name: 'Upper-intermediate', ruName: 'Выше среднего', desc: 'You can discuss most topics with good fluency and understand complex text.', ruDesc: 'Вы можете обсуждать большинство тем с хорошей беглостью и понимать сложные тексты.' },
  C1: { name: 'Advanced', ruName: 'Продвинутый уровень', desc: 'You express yourself fluently and spontaneously on a wide range of subjects.', ruDesc: 'Вы выражаете мысли свободно и спонтанно на широкий круг тем.' },
  C2: { name: 'Proficient', ruName: 'Профессиональный уровень', desc: 'You understand virtually everything you read or hear with ease.', ruDesc: 'Вы практически всё понимаете в чтении и аудировании с лёгкостью.' },
}

export const POINTS_PER_LEVEL = 500

// Placement test: questions increase in difficulty. `weight` contributes to
// a score used to recommend a starting level. This is a lightweight,
// self-assessed placement, not a certified CEFR exam.
export const PLACEMENT_QUESTIONS = [
  {
    q: 'Choose the correct sentence.',
    options: ['I am a teacher.', 'I is a teacher.', 'I are a teacher.', 'I be a teacher.'],
    correct: 0,
    weight: 0,
  },
  {
    q: 'She ___ to the market yesterday.',
    options: ['go', 'goes', 'went', 'gone'],
    correct: 2,
    weight: 1,
  },
  {
    q: 'I ___ never been to Japan.',
    options: ['have', 'has', 'had', 'am'],
    correct: 0,
    weight: 2,
  },
  {
    q: 'Choose the word closest in meaning to "reluctant".',
    options: ['eager', 'unwilling', 'happy', 'fast'],
    correct: 1,
    weight: 2,
  },
  {
    q: 'If I ___ more time, I would travel more.',
    options: ['have', 'had', 'has', 'will have'],
    correct: 1,
    weight: 3,
  },
  {
    q: 'By next year, she ___ here for a decade.',
    options: ['will work', 'will have worked', 'works', 'worked'],
    correct: 1,
    weight: 4,
  },
  {
    q: 'He speaks English as if he ___ a native speaker.',
    options: ['is', 'was', 'were', 'be'],
    correct: 2,
    weight: 4,
  },
  {
    q: 'Choose the most natural sentence.',
    options: [
      'No sooner had I left than it started raining.',
      'I left no sooner than it start to rain.',
      'Hardly I had left it started to rain.',
      'I had no sooner leave than it rained.',
    ],
    correct: 0,
    weight: 5,
  },
]

export function levelFromScore(score) {
  if (score <= 2) return 0
  if (score <= 5) return 1
  if (score <= 9) return 2
  if (score <= 13) return 3
  if (score <= 17) return 4
  return 5
}
