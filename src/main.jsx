import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PLAUSIBLE_DOMAIN } from './lib/config'

// The previous site used hash routes (/#/cases). Map them to the new paths.
const LEGACY_HASH_ROUTES = {
  '/methodology': '/approach',
  '/cases': '/sap',
  '/l2c': '/sap',
  '/services': '/sap',
  '/architecture/avc': '/sap',
  '/architecture/cpq': '/sap',
  '/architecture/btp': '/sap',
  '/architecture/sf': '/salesforce',
}
if (window.location.hash.startsWith('#/')) {
  const legacy = window.location.hash.slice(1).replace(/\/+$/, '') || '/'
  window.history.replaceState({}, '', LEGACY_HASH_ROUTES[legacy] || legacy)
}

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
