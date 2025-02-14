import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router";
import Root from './components/Root.jsx'
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Orders from './components/Orders.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />} >
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />


            <Route path="/orders" element={<PrivateRoute><Orders /> </PrivateRoute>} />



          </Route>

        </Routes>

      </BrowserRouter>
    </AuthProvider>

  </StrictMode>,
)
