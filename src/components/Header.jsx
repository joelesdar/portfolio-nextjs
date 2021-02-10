import React from 'react';
import Headroom from 'react-headroom';
import Styled from '@emotion/styled';
import HamburguerMenu from './HamburguerMenu';
import { useTranslation } from 'react-i18next';
import Logo from './icons/logo';
import Es from './icons/Es';
import En from './icons/En';
import Fr from './icons/Fr';
import { Nav, NavDropdown, Navbar, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

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
                background-color: transparent;
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
        margin: 0 auto;
        color: white;
        /* display: inline; */
        /* fill: black; */
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
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container-logo">
                        <a className="navbar-brand" href="#">
                            <Logo/>
                        </a>
                    </div>
                    <button className="navbar-toggler col-2" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <HamburguerMenu></HamburguerMenu>
                    </button>
                    <div className="container-fluid"></div>
                    <div className="collapse navbar-collapse col-lg-5" id="navbarTogglerDemo02">
                        <div className="navbar-nav">
                            <div class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {t('selectLanguage')}
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#" onClick={() => ChangeLanguage('es')}>
                                        <Es /> {' '} Español
                                    </a>
                                    <a class="dropdown-item" href="#" onClick={() => ChangeLanguage('en')}>
                                        <En /> {' '} English
                                    </a>
                                    <a class="dropdown-item" href="#" onClick={() => ChangeLanguage('fr')}>
                                        <Fr /> {' '} Français
                                    </a>
                                </div>
                            </div>
                            <a className="nav-link active" href="#">{t('home')}<span className="sr-only">(current)</span></a>
                            <a className="nav-link" href="#">{t('aboutMe')}</a>
                            <a className="nav-link" href="#">{t('work')}</a>
                            <a className="nav-link" href="#">{t('contact')}</a>
                        </div>
                    </div>
                </nav>
            </StyledHeader>
        </Headroom>
     );
}
 
export default Header;