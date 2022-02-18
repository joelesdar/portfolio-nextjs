import React from 'react';
import Headroom from 'react-headroom';
import Styled from '@emotion/styled';
import HamburguerMenu from './HamburguerMenu';
import { useTranslation } from 'react-i18next';
import Logo from './icons/Logo';
import Es from './icons/Es';
import En from './icons/En';
import Fr from './icons/Fr';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const StyledHeader = Styled.div`
    background-color: rgba(18, 18, 18, 0.75);
    backdrop-filter: blur(4px);
    font-size: 1.2rem;
    fill: none;
    min-height: 5rem;
    /* border-bottom: 1px solid #fff; */
    .navbar {
        padding: 1rem;
        margin: 0 3rem;
        a {
            color: white;
        }
        .navbar-nav {
            a {
                color: white;
                text-align: center;
                &:hover {
                color: #1c82f6;
                }
            }
            .active {
                color: #1c82f6;
            }
            .show{
                background-color: transparent;
            }
            .dropdown-menu {
                left: -25%;
            }
        }  
    }
    .container-logo {
        width: max-content;
        max-width: 2.6rem;
        color: white;
    }
    svg {
        width: 100%;
        height: 100%;
        margin: 0 auto;
        color: #1c82f6;
        /* display: inline; */
        /* fill: black; */
    }
`;


const Header = ({language, setLanguage}) => {

    const { t, i18n } = useTranslation();

    const ChangeLanguage = lang => {
        setLanguage(lang);
        window.location.reload();
        console.log("Cambio");
    }

    return (
        <Headroom>
            <StyledHeader>
                <nav className="navbar navbar-expand-md navbar-dark">
                    <div className="container-logo">
                        <Logo />
                    </div>
                    <HamburguerMenu></HamburguerMenu>
                    <div className="container-fluid"></div>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <div className="navbar-nav">
                            <a className="nav-link active" href="#!">{t('home')}<span className="sr-only">(current)</span></a>
                            <a className="nav-link" href="#!">{t('aboutMe')}</a>
                            <a className="nav-link" href="#!">{t('work')}</a>
                            <a className="nav-link" href="#!">{t('contact')}</a>
                            <div className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#!" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {t('selectLanguage')}
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="" onClick={() => ChangeLanguage('es')}>
                                        <Es /> {' '} Español
                                    </a>
                                    <a className="dropdown-item" href="" onClick={() => ChangeLanguage('en')}>
                                        <En /> {' '} English
                                    </a>
                                    <a className="dropdown-item" href="" onClick={() => ChangeLanguage('fr')}>
                                        <Fr /> {' '} Francais
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </StyledHeader>
        </Headroom>
     );
}
 
export default Header;