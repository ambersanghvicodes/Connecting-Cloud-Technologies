import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PLAUSIBLE_DOMAIN } from './lib/config'

if (PLAUSIBLE_DOMAIN) {
  const script = document.createElement('script')
  script.defer = true
  script.dataset.domain = PLAUSIBLE_DOMAIN
  script.src = 'https://plausible.io/js/script.js'
  document.head.appendChild(script)
  window.plausible = window.plausible || function (...args) { (window.plausible.q = window.plausible.q || []).push(args) }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
