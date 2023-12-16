import Headroom from 'react-headroom'
import { HamburguerMenu } from '../HamburguerMenu'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import Image from 'next/image'
import img from '../../assets/logo.png'
import Es from '../../assets/Es'
import En from '../../assets/En'
import Fr from '../../assets/Fr'
import { StyledHeader } from './styles'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'


export const Header = () => {

  const { t } = useTranslation()
  const router = useRouter()

  return (
    <Headroom>
      <StyledHeader>
        <Navbar className='navbar' expand="lg">
          <Container fluid>
            <Navbar.Brand className='container-logo'>
              <Link href='/'>
                <Image src={img} alt='Logo' />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" children={<HamburguerMenu />}/>
            <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
              <Nav className="navbar-nav">
                <Nav.Link className='active' href='/'>{t('download-cv')}</Nav.Link>
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
      </StyledHeader>
    </Headroom>
  )
}