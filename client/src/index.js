import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { getCLS, getFID, getLCP } from 'web-vitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// reportWebVitals()
function reportWebVitals() {
  getCLS(console.log);
  getFID(console.log);
  getLCP(console.log);
}

export default reportWebVitals;