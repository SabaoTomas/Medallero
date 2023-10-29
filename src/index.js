import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './CommonComponents/NavigationBar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Nav } from 'react-bootstrap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavigationBar/>
      
      <Routes>
        <Route index element={<App />} />
        <Route path = '/' element={<NavigationBar/>}></Route>
      </Routes>

    </BrowserRouter>
  </React.StrictMode>
);

