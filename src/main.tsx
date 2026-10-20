import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';

const isAbout = window.location.pathname.replace(/\/+$/, '') === '/about';

createRoot(document.getElementById('root')!).render(
  <StrictMode>{isAbout ? <About /> : <Home />}</StrictMode>,
);
