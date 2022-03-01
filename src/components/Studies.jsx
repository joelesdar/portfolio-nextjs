import React from "react";
import Styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import unal from "./icons/unal.png";
import platzi from "./icons/platzi.png";

const StyledStudies = Styled.div`

padding: 48px 0;
background: var(--dark-blue);

.study-block {
  padding-top: 16px;
  padding-bottom: 16px;
}

.career-title {
  color: var(--main-blue);
}

.institution {
  /* color: var(--main-blue); */
}

.logo {
  padding-top: 16px;
  text-align: center;
}

.logo-university {
  max-height: 8rem;
}

`;

const Studies = () => {
  const { t } = useTranslation();

  return (
    <StyledStudies>
      <div className="container" id="studies">
        <div className="row align-items-center justify-content-around">
          <div className="col-10">
            <Fade duration="1500">
              <h2>{t("title-studies")}</h2>
            </Fade>
            <div className="row">
              <Fade left>
              <div className="study-block col-12 col-md-6">
                  <h4 className="career-title">{t("title-career")}</h4>
                  <p>{t("description-university")}</p>
                  <h5 className="institution">{t("title-university")}</h5>
                  <div className="logo">
                    <img className="logo-university" src={unal} alt="Universidad Nacional de Colombia" title="Universidad Nacional de Colombia"/>
                  </div>
                  {/* <a href="https://unal.edu.c4/" target="_blank">Sitio oficial</a> */}
              </div>
              </Fade>
              <Fade right>
                <div className="study-block col-12 col-md-6">
                    <h4 className="career-title">{t("title-career")}</h4>
                    <p>{t("description-university")}</p>
                    <h5 className="institution">Platzi</h5>
                    <div className="logo">
                      <img className="logo-university" src={platzi} alt="Platzi" title="Platzi"/>
                    </div>
                    {/* <a href="https://platzi.com/" target="_blank">Sitio oficial</a> */}
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </StyledStudies>
  );
};

export default Studies;
