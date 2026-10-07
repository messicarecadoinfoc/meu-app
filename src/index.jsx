import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/app/App';
import Contador from './pages/contador';
import Descricao from './pages/Descricao'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calculadora from './pages/calculadora';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contador" element={<Contador />} />
        <Route path="/Descricao" element={<Descricao />} />
        <Route path='/Calculadora' element={<Calculadora/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);