import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Header from './components/Header'
import Main from './components/Main'
import './App.css'
import Cookies from 'universal-cookie'
import Footer from './components/Footer'
import Helmet from 'react-helmet'

function App () {
  const cookies = new Cookies()
  const [language, setLanguage] = useState(cookies.get('cookieLang'))
  const { i18n } = useTranslation()

  if (language === '') {
    i18n.changeLanguage('en')
  } else {
    i18n.changeLanguage(language)
  }

  return (
    <div className='App'>
      <Helmet>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width-device-width, initial-scale=1' />
        <title>Joel Diaz Arévalo</title>
        <link rel='canonical' href='https://joelesdar.com/' />
        <meta name='description' content='Portafolio Personal' />
        <script src='https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1' />
      </Helmet>
      <Header language={language} setLanguage={setLanguage} />
      <Main />
      <Footer />

    </div>
  )
}

export default App
