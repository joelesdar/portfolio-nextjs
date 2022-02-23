import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";
import Cookies from "universal-cookie";
import Footer from "./components/Footer";
import Helmet from "react-helmet";

function App() {
  const cookies = new Cookies();
  const [language, setLanguage] = useState(cookies.get("cookieLang"));
  const { t, i18n } = useTranslation();

  if (language === "") {
    i18n.changeLanguage("en");
  } else {
    i18n.changeLanguage(language);
  }

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Joel Esteban Diaz Arévalo</title>
        <link rel="canonical" href="https://joelesdar.com/" />
        <meta name="description" content="Portafolio Personal" />
      </Helmet>
      <Header language={language} setLanguage={setLanguage} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
