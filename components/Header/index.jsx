import Headroom from 'react-headroom'
// import HamburguerMenu from '../HamburguerMenu'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import img from '../../assets/logo.png'
import Es from '../../assets/Es'
import En from '../../assets/En'
import Fr from '../../assets/Fr'
import Cookies from 'universal-cookie'
import { StyledHeader } from './styles'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useRouter } from 'next/router'


export const Header = ({ language, setLanguage }) => {

  const { locale, locales, push } = useRouter();
  const cookies = new Cookies()

  const { t } = useTranslation('common')

  const ChangeLanguage = (lang) => {
    // setLanguage(lang);
    cookies.set('cookieLang', lang, { path: '/' })
    window.location.reload()
  }

  const handleClick = () => l => {
    push('/', undefined, { locale: l });
  }

  return (
    <Headroom>
      <StyledHeader>
        <Navbar className='navbar' expand="md">
          <div className='container-logo'>
            <Image src={img} alt='Logo' />
          </div>
          <Container fluid>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
              <Nav className="me-auto navbar-nav">
                <Nav.Link className='active' href='/'>{t('home')}</Nav.Link>
                <NavDropdown title={t('about-me')} id="basic-nav-dropdown">
                  <NavDropdown.Item href='#technologies'>{t('technologies')}</NavDropdown.Item>
                  <NavDropdown.Item href='/Blog'>Blog</NavDropdown.Item>
                  <NavDropdown.Item href='#skills'>{t('skills')}</NavDropdown.Item>
                  <NavDropdown.Item href='#languages'>{t('languages')}</NavDropdown.Item>
                  <NavDropdown.Item href='#studies'>{t('studies')}</NavDropdown.Item>
                  <NavDropdown.Item href='#experience'>{t('experience')}</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href='#projects'>{t('personal-projects')}</Nav.Link>
                <Nav.Link href='#contact'>{t('contact')}</Nav.Link>
                <NavDropdown title={t('selectLanguage')} id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    <Link href={'/'} locale={'es'}>
                      <Es /> Español
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href={'/'} locale={'en'}>
                      <En /> English
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href={'/'} locale={'fr'}>
                      <Fr /> Français
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {/* <nav className='navbar navbar-expand-md navbar-dark'>
          <HamburguerMenu /> 
          <div className='container-fluid' />
          <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
            <div className='navbar-nav'>
              <a className='nav-link active' href=''>
                {t('home')}
                <span className='sr-only'>(current)</span>
              </a>
              <div className='nav-item dropdown'>
                <Link
                  className='nav-link dropdown-toggle'
                  href='#!'
                  id='navbarDropdown'
                  role='button'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  {t('about-me')}
                </Link>
                <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <Link
                    className='dropdown-item'
                    href='#technologies'
                  >
                    {t('technologies')}
                  </Link>
                  <Link href='/blog'>Blog</Link>
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
        </nav> */}
      </StyledHeader>
    </Headroom>
  )
}
