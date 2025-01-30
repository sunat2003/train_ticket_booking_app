import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RouterPage from './Router/Router'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterPage />
  </StrictMode>,
)
