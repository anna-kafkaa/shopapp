import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss'; // jeśli używasz SCSS

import Products from './components/Products/Products';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import Button from './components/Button/Button';
import Products from './components/Products/Products';

import 'font-awesome/css/font-awesome.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



