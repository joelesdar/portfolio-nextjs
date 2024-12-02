import Headroom from 'react-headroom'
import { useState } from 'react'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import img from '../../public/assets/logos/logo.webp'
import Es from '../../public/assets/logos/Es'
import En from '../../public/assets/logos/En'
import Fr from '../../public/assets/logos/Fr'
import { StyledHeader } from './styles'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import HamburguerIcon from '../../public/assets/logos/HamburguerIcon'


export const Header = () => {

  const { t, i18n } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Headroom>
      <StyledHeader>
        <Navbar className='navbar' expand="lg">
          <Container fluid>
            <Navbar.Brand className='container-logo'>
              <Link href='/' locale={i18n.language}>
                <Image src={img} alt='Logo' />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle className={`menu ${menuOpen ? 'opened' : ''}`} onClick={handleMenuClick} aria-controls="basic-navbar-nav" >
              <HamburguerIcon />
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
              <Nav className="navbar-nav">
                {/* <Nav.Link href={`/${i18n.language}`}>{t('home')}</Nav.Link> */}
                {/* <Nav.Link className='active' href={`/${i18n.language}/profile`} locale={i18n.language}>{t('link-profile')}</Nav.Link> */}
                {/* <Nav.Link href='profile.pdf' download="Profile.pdf">{t('download-cv')}</Nav.Link> */}
                <NavDropdown title={t('selectLanguage')} id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    <Link href={''} locale={'es'}>
                      <Es /> Español
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href={''} locale={'en'}>
                      <En /> English
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href={''} locale={'fr'}>
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