import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from './context/AuthProvider';
import { ProductProvider } from './context/ProductProvider';  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router >
      <AuthProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </AuthProvider>
    </Router >
  </React.StrictMode>,
)
