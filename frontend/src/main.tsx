import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css';
import Home from './components/home/Home';
import GitHubLoginButton from './components/authentication/GitHubLoginButton';
import Gallery from './components/gallery/Gallery';
import ProtectedRoutes from "./components/authentication/ProtectedRoute";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<GitHubLoginButton />} />
          <Route element={<ProtectedRoutes/>}>
            <Route path='/test' element={<Gallery />} />
          </Route>
        </Routes>
    </BrowserRouter>
  </StrictMode>
)