import React from 'react';
import Headroom from 'react-headroom';
import Styled from '@emotion/styled';
import HamburguerMenu from './HamburguerMenu';
import { useTranslation } from 'react-i18next';
import Logo from './icons/logo';
import coLogo from './icons/colombia.svg';
import usLogo from './icons/estados-unidos.svg';
import frLogo from './icons/francia.svg';
import { Nav, NavDropdown, Navbar, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const StyledHeader = Styled.div`
    background-color: rgba(18, 18, 18, 0.75);
    backdrop-filter: blur(10px);
    font-size: 1.2rem;
    fill: none;
    /* border-bottom: 1px solid #fff; */
    .navbar {
        padding: 1rem;
        margin: 0 2rem;
        a {
            color: #8b3131;
        }
        .navbar-nav {
            a {
                color: #8b3131;
                &:hover {
                color: #f61c1c;
                }
            }
            .active {
                color: #f61c1c;
            }
            .show{
                background-color: #000;
            }
        }  
    }
    .container-logo {
        width: max-content;
        max-width: 45px;
        color: white;
    }
    svg {
        width: 100%;
        height: 100%;
        /* display: block; */
        margin: 0 auto;
        /* fill: black; */
        color: white;
    }
`;


const Header = () => {

    const { t, i18n } = useTranslation();

    const ChangeLanguage = lang => {
        i18n.changeLanguage(lang);
    }

    return (
        <Headroom>
            <StyledHeader>
                <Navbar className="justify-content-between" collapseOnSelect expand="lg" sticky="top" variant="dark">
                    <Navbar.Brand href="#home" className="container-logo align-items-center">
                        <Logo/>
                        {' '}
                        Joel
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" as={() => {return(<HamburguerMenu />)}}/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        
                        <Nav className="" activeKey="/home">
                            <NavDropdown title={t('selectLanguage')} id="collasible-nav-dropdown">
                                <NavDropdown.Item className="align-items-center" href="#" onClick={() => ChangeLanguage('es')}>
                                    <img
                                        alt=""
                                        src={coLogo}
                                        width="25"
                                        height="25"
                                        className="d-inline-block align-top"
                                    />{' '}
                                    Español
                                </NavDropdown.Item>
                                <NavDropdown.Item className="align-items-center" href="#" onClick={() => ChangeLanguage('en')}>
                                    <img
                                        alt=""
                                        src={usLogo}
                                        width="25"
                                        height="25"
                                        className="d-inline-block align-top"
                                    />{' '}
                                    English
                                </NavDropdown.Item>
                                <NavDropdown.Item className="align-items-center" href="#" onClick={() => ChangeLanguage('fr')}>
                                    <img
                                        alt=""
                                        src={frLogo}
                                        width="25"
                                        height="25"
                                        className="d-inline-block align-top"
                                    />{' '}
                                    Français
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Item>
                            <Nav.Link href="/home">{t('home')}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="link-1">{t('aboutMe')}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="link-2">{t('work')}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="link-3">{t('contact')}</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </StyledHeader>
        </Headroom>
     );
}
 
export default Header;