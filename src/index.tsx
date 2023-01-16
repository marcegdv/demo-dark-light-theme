import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';

import ThemeModeProvider from './Context/Theme/ThemeProvider';
import { validateTheme } from './utils/utils';

import './index.css';

const root: ReactDOM.Root = ReactDOM.createRoot(
    document.getElementById('root') as Element
);

root.render(
    <React.StrictMode>
        <ThemeModeProvider theme={validateTheme()}>
            <App />
        </ThemeModeProvider>
    </React.StrictMode>
);