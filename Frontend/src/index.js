import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css';
import './Tablet.css';
import Routes from './Routes';
const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient  = new QueryClient();
root.render(
  <QueryClientProvider client={queryClient}>
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
