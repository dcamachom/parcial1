import './App.css';
import { IntlProvider } from 'react-intl';
import React, { useState, useEffect } from 'react';
import PageLogin from './components/PageLogin';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageCarTable from './components/PageCarTable';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<PageLogin />} />
      <Route path="/cars" element={<PageCarTable />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
