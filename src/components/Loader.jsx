import { useEffect, useState } from 'react'

export default function Loader() {
  const [pct, setPct] = useState(0)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let current = 0
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 9) + 4
      if (current >= 100) {
        current = 100
        clearInterval(interval)
        setTimeout(() => setHidden(true), 400)
      }
      setPct(current)
    }, 140)

    // safety fallback in case the interval gets throttled
    const fallback = setTimeout(() => setHidden(true), 3500)

    return () => {
      clearInterval(interval)
      clearTimeout(fallback)
    }
  }, [])

  return (
    <div id="loader" className={hidden ? 'hide' : ''}>
      <div className="loader-inner">
        <div className="loader-name">
          Oussama <span className="accent">Lachhab</span> <span className="dot">•</span>
        </div>
        <div className="loader-tag mono">Développeur Full Stack • PFE 2027</div>
        <div className="loader-pct">
          <span>{pct}</span>
          <span className="sign">%</span>
        </div>
        <div className="loader-bar">
          <div className="loader-bar-fill" style={{ width: `${pct}%` }} />
        </div>
        <div className="loader-status mono">
          <span className="dot-pulse" /> Initialisation de l&apos;expérience
        </div>
      </div>
    </div>
  )
}
