import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App/App'
import './index.css';

import "@fontsource/outfit";
import "@fontsource/roboto";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
