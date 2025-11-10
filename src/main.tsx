import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

// Easter egg: Developer console message
console.log(
  '%c👋 Hey there, curious developer! Welcome to Mark Daniel\'s portfolio codebase.',
  'color: #d4af37; font-size: 16px; font-weight: bold;'
);
console.log(
  '%cBuilt with React 18, TypeScript, Tailwind CSS, and Framer Motion ✨',
  'color: #60a5fa; font-size: 14px;'
);
console.log('%cCheck out the source at: https://github.com', 'color: #10b981; font-size: 12px;');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
