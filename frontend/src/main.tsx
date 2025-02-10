import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css';
import Home from './components/home/Home';
import Gallery from './components/gallery/Gallery';
import ProtectedRoutes from "./components/authentication/ProtectedRoute";
import checkAuthenticated from './utils/session';

const renderApp = (isAuthenticated: boolean) => {
  createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route element={<ProtectedRoutes isAuthenticated={isAuthenticated}/>}>
            <Route path='/test' element={<Gallery />} />
          </Route>
        </Routes>
    </BrowserRouter>
  </StrictMode>
)};

(async () => renderApp(await checkAuthenticated()))();