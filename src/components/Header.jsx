import React from "react";
import Headroom from "react-headroom";
import Styled from "@emotion/styled";
import HamburguerMenu from "./HamburguerMenu";
import { useTranslation } from "react-i18next";
import img from "./icons/logo.png";
import Es from "./icons/Es";
import En from "./icons/En";
import Fr from "./icons/Fr";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Cookies from "universal-cookie";

const StyledHeader = Styled.div`
    background-color: rgba(18, 18, 18, 0.75);
    backdrop-filter: blur(4px);
    font-size: 1.2rem;
    fill: none;
    min-height: 5rem;
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
              color: var(--main-blue);
            }
          }
          .active {
            color: var(--main-blue);
          }
          .show{
            background-color: transparent;
          }
          .dropdown-menu {
              left: -25%;
              background: rgba(18, 18, 18, 0.75);
            }
        }  
    }
    .container-logo {
        max-width: 50px;
        img {
            margin: 0 auto;
            width: 100%;
        }
    }
    svg {
        width: 25px;
        margin: 0 auto;
    }
`;

const Header = ({ language, setLanguage }) => {
  const cookies = new Cookies();

  const { t, i18n } = useTranslation();

  const ChangeLanguage = (lang) => {
    // setLanguage(lang);
    cookies.set("cookieLang", lang, { path: "/" });
    window.location.reload();
  };

  return (
    <Headroom>
      <StyledHeader>
        <nav className="navbar navbar-expand-md navbar-dark">
          <div className="container-logo">
            <img src={img} alt="Logo" />
          </div>
          <HamburguerMenu></HamburguerMenu>
          <div className="container-fluid"></div>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <div className="navbar-nav">
              <a className="nav-link active" href="">
                {t("home")}
                <span className="sr-only">(current)</span>
              </a>
              <div className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#!"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {t("about-me")}
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a
                    className="dropdown-item"
                    href="#technologies"
                  >
                    {t("technologies")}
                  </a>
                  <a
                    className="dropdown-item"
                    href="#skills"
                  >
                    {t("skills")}
                  </a>
                  <a
                    className="dropdown-item"
                    href="#languages"
                  >
                    {t("languages")}
                  </a>
                  <a
                    className="dropdown-item"
                    href="#studies"
                  >
                    {t("studies")}
                  </a>
                  <a
                    className="dropdown-item"
                    href="#experience"
                  >
                    {t("experience")}
                  </a>
                </div>
              </div>
              <a className="nav-link" href="#projects">
                {t("personal-projects")}
              </a>
              <a className="nav-link" href="#contact">
                {t("contact")}
              </a>
              <div className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#!"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {t("selectLanguage")}
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a
                    className="dropdown-item"
                    href=""
                    onClick={() => ChangeLanguage("es")}
                  >
                    <Es /> Español
                  </a>
                  <a
                    className="dropdown-item"
                    href=""
                    onClick={() => ChangeLanguage("en")}
                  >
                    <En /> English
                  </a>
                  <a
                    className="dropdown-item"
                    href=""
                    onClick={() => ChangeLanguage("fr")}
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
  );
};

export default Header;
