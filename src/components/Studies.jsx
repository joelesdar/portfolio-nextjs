import React from "react";
import Styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";

const StyledStudies = Styled.div`

padding: 48px 0;
background: var(--dark-blue);

`;

const Studies = () => {
  const { t } = useTranslation();

  return (
    <StyledStudies>
      <div className="container">
        <div className="row align-items-center justify-content-around">
          <div className="col-10">
            <h2>{t("title-studies")}</h2>
            <div className="row">

              <div className="col-12 col-md-6">
                  <h3>{t("title-career")}</h3>
                  <p>{t("description-university")}</p>
                  <h5>{t("title-university")}</h5>
              </div>
              <div className="col-12 col-md-6">
                  <h3>{t("title-career")}</h3>
                  <p>{t("description-university")}</p>
                  <h5>{t("title-university")}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledStudies>
  );
};

export default Studies;
