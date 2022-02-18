import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';

function App() {

  const [language, setLanguage] = useState('');
  const { t, i18n } = useTranslation();
  if(language === '') {
    i18n.changeLanguage('es');
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
