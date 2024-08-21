import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ContextProviders } from './contexts/ContextProviders';
import { AuthProvider } from './contexts/authContext';
import { AppProvider } from './contexts/AppContext';
import { Toaster } from "react-hot-toast";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ContextProviders> */}
    <AppProvider>
      <AuthProvider>
        <App />
        <Toaster/>
      </AuthProvider>
    </AppProvider>
    {/* </ContextProviders> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
