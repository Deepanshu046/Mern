import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Hello from './Hello.jsx'
import App from './App.jsx'
import Random from './Random.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Hello/>
    <Random/> <Random/>
  </StrictMode>,
)
