import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import Product from "./components/Products/Product/Product";
import Header from "./components/Header/Header";
import Container from "./components/Container/Container";
import Button from "./components/Button/Button";
import Products from "./components/Products/Products";

import "font-awesome/css/font-awesome.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
