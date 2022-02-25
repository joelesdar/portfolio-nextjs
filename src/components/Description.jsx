import React from "react";
import Styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import photo from "./icons/foto4.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";

const StyledDescription = Styled.div`

.description-container {
    padding: 48px 0;
    background-color: var(--dark-blue);
    font-family: 'Rubik', sans-serif;
}

.image {
    margin-top: 2em;
    margin-bottom: 2em;
    position: relative;
    max-width: 400px;
    background: var(--main-blue);
    overflow: hidden;
    padding: 0;
    border: 3px solid var(--main-blue);
    border-radius: 20px;
    img {
        width: 100%;
        object-fit: cover;
        opacity: 0.6;
    }

    img:hover {
        opacity: 1;
        transition: opacity 0.5s ease-in-out;
    }
}

.personal-description {
    border: 3px solid var(--main-blue);
    border-radius: 20px;
}

.title-description {
  padding: 8px 0px 0px 8px;
}

.description {
    padding: 8px;
}

`;

const Description = () => {
  const { t } = useTranslation();

  return (
    <StyledDescription>
      <div className="description-container">
        <div className="container">
          <div className="row align-items-center justify-content-around">
            <Fade left duration={1700}>
              <div className="image col-10 col-md-6">
                <img src={photo} alt="Foto Joel" />
              </div>
            </Fade>
            <Fade right duration={1700}>
              <div className="personal-description col-10 col-md-6">
                <h2 className="title-description">{t("title-description")} 👋🏽</h2>
                <p className="description">{t("description")}</p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </StyledDescription>
  );
};

export default Description;
