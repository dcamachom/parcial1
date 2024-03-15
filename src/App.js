import './App.css';
import { IntlProvider } from 'react-intl';
import React, { useState, useEffect } from 'react';
import PageLogin from './components/PageLogin';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageCarTable from './components/PageCarTable';
import localeEnMessages from './locales/en.json';
import localeEsMessages from './locales/es.json'

function App() {

  const [locale, setLocale] = useState('en'); 
  useEffect(() => {
    const userLanguage = navigator.language || navigator.userLanguage;
    const defaultLocale = userLanguage.split('-')[0];
    setLocale(defaultLocale);
  }, []);

  const messages = locale === 'es' ? localeEsMessages : localeEnMessages;

  return (
    <IntlProvider locale={locale} messages={messages}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLogin />} />
        <Route path="/cars" element={<PageCarTable />} />
      </Routes>
      </BrowserRouter>
    </IntlProvider>
  );
}

export default App;
