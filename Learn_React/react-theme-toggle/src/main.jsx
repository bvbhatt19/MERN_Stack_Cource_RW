import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles.css'

const saved = localStorage.getItem('theme')
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
const initial = saved || (prefersDark ? 'dark' : 'light')
document.documentElement.setAttribute('data-theme', initial)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App initialTheme={initial} />
  </React.StrictMode>
)
