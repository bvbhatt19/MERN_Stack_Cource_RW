import React, { useState, useEffect } from 'react'

function ThemeToggle({ theme, setTheme }) {
  const next = theme === 'light' ? 'dark' : 'light'
  return (
    <button
      onClick={() => setTheme(next)}
      className="toggle-btn"
      aria-label="Toggle theme"
      title={`Switch to ${next} mode`}
    >
      <span className="toggle-thumb" data-mode={theme} />
      {theme === 'light' ? '🌞 Light' : '🌙 Dark'}
    </button>
  )
}

export default function App({ initialTheme = 'light' }) {
  const [theme, setTheme] = useState(initialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className="app">
      <header className="header">
        <h1>React Theme Toggle</h1>
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </header>

      <main className="content">
        <p>
          This is a minimal example of a light/dark mode using CSS variables.
          The preference is saved to <code>localStorage</code> and respects
          your system setting on first load.
        </p>
        <div className="card">
          <h2>Card Title</h2>
          <p>Cards and text adapt to the chosen theme.</p>
          <button className="primary">Primary Action</button>
        </div>
      </main>

      <footer className="footer">
        <small>Made with React + Vite</small>
      </footer>
    </div>
  )
}
