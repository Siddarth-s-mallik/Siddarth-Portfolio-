import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ErrorBoundary } from './components/UI/ErrorBoundary';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {console.log("Deployment Version: 2025-12-18 v4 (ErrorBoundary Added)")}
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </React.StrictMode>,
)
