import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css';
import Home from './components/home/Home';
import LoginCallback from './components/authentication/LoginCallback';
import Gallery from './components/gallery/Gallery';
// import { useAuth } from "./providers/GitHubAuthProvider";
import ProtectedRoute from "./components/authentication/ProtectedRoute";

const PrivateRoutes = () => {
  const { authenticated } = useContext(AuthContext)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth/github/callback' element={<LoginCallback />} />
          <Route path='/test' element={<Gallery />} />
        </Routes>
    </BrowserRouter>
  </StrictMode>
)