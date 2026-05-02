import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import CashierApp from './cashier/CashierApp.tsx'
import './index.css'

const isCashier = window.location.pathname === '/cashier';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {isCashier ? <CashierApp /> : <App />}
  </React.StrictMode>,
)
