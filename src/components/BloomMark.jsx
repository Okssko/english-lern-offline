import { LEVELS } from '../data/levels.js'

// The signature visual: a flower that gains petals as the learner advances
// through CEFR levels (A1 -> C2 = 1 to 6 petals). This replaces a generic
// progress bar with something that feels alive and specific to "Bloom".
export default function BloomMark({ levelIndex, size = 64 }) {
  const petalCount = levelIndex + 1
  const colors = ['#D85A30', '#854F0B', '#3B6D11', '#0F6E56', '#185FA5', '#3C3489']
  const petals = []
  const cx = 50
  const cy = 50
  const radius = 22

  for (let i = 0; i < petalCount; i++) {
    const angle = (i / 6) * 2 * Math.PI - Math.PI / 2
    const px = cx + radius * Math.cos(angle)
    const py = cy + radius * Math.sin(angle)
    petals.push(
      <ellipse
        key={i}
        cx={px}
        cy={py}
        rx="14"
        ry="20"
        fill={colors[i]}
        opacity="0.92"
        transform={`rotate(${(angle * 180) / Math.PI + 90} ${px} ${py})`}
      />
    )
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role="img"
      aria-label={`Level ${LEVELS[levelIndex]}, ${petalCount} of 6 stages bloomed`}
    >
      <title>Level {LEVELS[levelIndex]}</title>
      {petals}
      <circle cx={cx} cy={cy} r="10" fill="#FAEEDA" stroke="#854F0B" strokeWidth="1.5" />
    </svg>
  )
}
