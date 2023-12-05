import React from "react";
import ReactDOM from 'react-dom/client';
import store from './store';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom';
import App from './App';
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);