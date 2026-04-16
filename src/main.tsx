import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/cardo/400.css'
import '@fontsource/cardo/400-italic.css'
import '@fontsource/cormorant-garamond/400.css'
import '@fontsource/cormorant-garamond/400-italic.css'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
