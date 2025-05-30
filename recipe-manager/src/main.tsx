import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const el = document.getElementById('root');

if (!el) {
    throw new Error('App cannot run');
}

createRoot(el).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
