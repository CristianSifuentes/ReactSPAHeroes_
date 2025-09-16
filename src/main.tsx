import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// Update the import path to match the actual file name and extension, e.g.:
import { HeroesApp } from './HeroesApp.tsx'

// import { Button } from './components/ui/button'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeroesApp />
  </StrictMode>,
)
