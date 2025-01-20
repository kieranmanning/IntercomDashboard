import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import Home from './components/home'
import LoginCallback from './components/authentication/LoginCallback'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth/github/callback' element={<LoginCallback />} />
        <Route path='/test' element={<Home />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
