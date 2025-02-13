import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route,  Routes } from "react-router";
import Root from './components/Root.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />

      </Routes>
    
    </BrowserRouter>
    
  </StrictMode>,
)
