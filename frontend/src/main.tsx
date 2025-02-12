import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css';
import Home from './pages/home/Home';
import Gallery from './components/gallery/Gallery';
import ProtectedRoute from "./components/authentication/ProtectedRoute";
import { getSessionInfo, SessionInfo } from './utils/session';

const renderApp = (sessionInfo: SessionInfo) => {
  createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home user_email={sessionInfo.user_email} />} />
          <Route element={<ProtectedRoute isAuthenticated={sessionInfo.authenticated}/>}>
            <Route path='/test' element={<Gallery />} />
          </Route>
        </Routes>
    </BrowserRouter>
  </StrictMode>
)};

(async () => renderApp(await getSessionInfo()))();