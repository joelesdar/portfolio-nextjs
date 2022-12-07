import { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Header } from './components/Header'
import Home from './pages/Home'
import { SocialBar } from './components/SocialBar'
import { Contact } from './components/Contact'
import './App.css'
import Cookies from 'universal-cookie'
import { Footer } from './components/Footer'
import Helmet from 'react-helmet'
import { ProjectsPage } from './pages/ProjectsPage'
import { NotFound } from './pages/NotFound'
import { Blog } from './pages/Blog'
import { BlogPost } from './components/BlogPost'

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
      <HashRouter>
        <Helmet>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width-device-width, initial-scale=1' />
          <title>Joel Diaz Arévalo</title>
          <link rel='canonical' href='https://joelesdar.com/' />
          <meta name='description' content='Portafolio Personal' />
          <script src='https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1' />
        </Helmet>
        <Header language={language} setLanguage={setLanguage} />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/projects' element={<ProjectsPage />} />
          <Route exact path='/blog' element={<Blog />} />
          <Route exact path='/blog/:slug' element={<BlogPost />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <SocialBar />
        <Contact />
        <Footer />
      </HashRouter>

    </div>
  )
}

export default App
