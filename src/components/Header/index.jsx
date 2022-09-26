import Headroom from 'react-headroom'
import HamburguerMenu from '../HamburguerMenu'
import { useTranslation } from 'react-i18next'
import img from '../../assets/logo.png'
import Es from '../../assets/Es'
import En from '../../assets/En'
import Fr from '../../assets/Fr'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Cookies from 'universal-cookie'
import { StyledHeader } from './styles'
import { NavLink } from 'react-router-dom'

export const Header = ({ language, setLanguage }) => {
  const cookies = new Cookies()

  const { t } = useTranslation()

  const ChangeLanguage = (lang) => {
    // setLanguage(lang);
    cookies.set('cookieLang', lang, { path: '/' })
    window.location.reload()
  }

  return (
    <Headroom>
      <StyledHeader>
        <nav className='navbar navbar-expand-md navbar-dark'>
          <div className='container-logo'>
            <img src={img} alt='Logo' />
          </div>
          <HamburguerMenu />
          <div className='container-fluid' />
          <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
            <div className='navbar-nav'>
              <a className='nav-link active' href=''>
                {t('home')}
                <span className='sr-only'>(current)</span>
              </a>
              <div className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#!'
                  id='navbarDropdown'
                  role='button'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  {t('about-me')}
                </a>
                <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <a
                    className='dropdown-item'
                    href='#technologies'
                  >
                    {t('technologies')}
                  </a>
                  <NavLink to='/blog'>Blog</NavLink>
                  <a
                    className='dropdown-item'
                    href='#skills'
                  >
                    {t('skills')}
                  </a>
                  <a
                    className='dropdown-item'
                    href='#languages'
                  >
                    {t('languages')}
                  </a>
                  <a
                    className='dropdown-item'
                    href='#studies'
                  >
                    {t('studies')}
                  </a>
                  <a
                    className='dropdown-item'
                    href='#experience'
                  >
                    {t('experience')}
                  </a>
                </div>
              </div>
              <a className='nav-link' href='#projects'>
                {t('personal-projects')}
              </a>
              <a className='nav-link' href='#contact'>
                {t('contact')}
              </a>
              <div className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#!'
                  id='navbarDropdown'
                  role='button'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  {t('selectLanguage')}
                </a>
                <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <a
                    className='dropdown-item'
                    href=''
                    onClick={() => ChangeLanguage('es')}
                  >
                    <Es /> Español
                  </a>
                  <a
                    className='dropdown-item'
                    href=''
                    onClick={() => ChangeLanguage('en')}
                  >
                    <En /> English
                  </a>
                  <a
                    className='dropdown-item'
                    href=''
                    onClick={() => ChangeLanguage('fr')}
                  >
                    <Fr /> Français
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </StyledHeader>
    </Headroom>
  )
}
