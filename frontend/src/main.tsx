import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/home/Home';
import SignInPage from './pages/login/Login';
import NotificationsPage from './pages/notifications/Notifications';
import Gallery from './components/gallery/Gallery';
import ProtectedRoute from "./components/authentication/ProtectedRoute";
import { getSessionInfo, SessionInfo } from './utils/session';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './theme';
import NavBar from './components/Navbar';

const renderApp = (sessionInfo: SessionInfo) => {
  createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <BrowserRouter>
          <Routes>
            <Route element={<NavBar />} >
              <Route path='/' element={<Home user_email={sessionInfo.user_email} />} />
              <Route path='/login' element={<SignInPage />} />
              <Route element={<ProtectedRoute isAuthenticated={sessionInfo.authenticated}/>}>
                <Route path='/test' element={<Gallery />} />
                <Route path='/notifications' element={<NotificationsPage />} />
              </Route>
            </Route>
          </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
)};

(async () => renderApp(await getSessionInfo()))();