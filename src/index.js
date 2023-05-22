import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import '../src/assets/css/fontawesome-free/css/all.min.css';
import '../src/assets/css/bootstrap.css';
import '../src/assets/css/animate.min.css';
import '../src/assets/css/main.css';
import '../src/assets/css/responsive.css';

import App from './routes/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
