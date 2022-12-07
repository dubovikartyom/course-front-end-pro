import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import reportWebVitals from './reportWebVitals';
import Orders from './components/Orders';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Orders />
    <Main />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
