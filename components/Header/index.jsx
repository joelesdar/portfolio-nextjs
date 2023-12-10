import Headroom from 'react-headroom'
// import HamburguerMenu from '../HamburguerMenu'
import { Suspense } from 'react'
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

  // const { locale, locales, push } = useRouter();
  // const cookies = new Cookies()

  const { t, i18n } = useTranslation()

  // const ChangeLanguage = (lang) => {
  //   // setLanguage(lang);
  //   cookies.set('cookieLang', lang, { path: '/' })
  //   window.location.reload()
  // }

  // const handleClick = () => l => {
  //   push('/', undefined, { locale: l });
  // }

  return (
    <Headroom>
      <StyledHeader>
        <Navbar className='' expand="md">
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
                    <Link href={'/'} onClick={() => i18n.changeLanguage('es')}>
                      <Es /> Español
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href={'/'} onClick={() => i18n.changeLanguage('en')}>
                      <En /> English
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href={'/'} onClick={() => i18n.changeLanguage('fr')}>
                      <Fr /> Français
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </StyledHeader>
    </Headroom>
  )
}
