import React from "react";
import ReactDOM from 'react-dom/client';
import Header from "./Header";
import Footer from "./Footer";
// import ProductOne from "./ProductOne";
import { createRoot } from 'react-dom';
// import  store from "./store";
// import { Provider } from 'react-redux';
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById('app'));
const App = () => (
  <div className="container">
        <Header/>
        <Footer/>
        
  </div>
);
root.render(
    <App />
);