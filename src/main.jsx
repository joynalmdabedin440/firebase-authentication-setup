import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route,  Routes } from "react-router";
import Root from './components/Root.jsx'
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} >
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          

        </Route>

      </Routes>
    
    </BrowserRouter>
    
  </StrictMode>,
)
