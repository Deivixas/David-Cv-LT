import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/CV.css';
import reportWebVitals from './reportWebVitals';
import CV from './components/CV';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CV/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
