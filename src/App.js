import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';
import Cookies from 'universal-cookie';

function App() {

  const cookies = new Cookies();
  const [language, setLanguage] = useState(cookies.get('cookieLang'));
  const { t, i18n } = useTranslation();

  if(language === '') {
    i18n.changeLanguage('en');
  } else {
    i18n.changeLanguage(language);
  }

  return (
    <div className="App">
      <Header
        language = {language}
        setLanguage = {setLanguage}
      />
      <Main />
    </div>
  );
}

export default App;
