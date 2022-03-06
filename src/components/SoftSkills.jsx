import React from "react";
import Styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import "bootstrap/dist/css/bootstrap.min.css";

const StyledSoftSkills = Styled.div`

background: var(--dark-blue);
padding: 48px 0;

.contact-container {

}

`;

const SoftSkills = () => {
  const { t } = useTranslation();

  return (
    <StyledSoftSkills>
      <div className="container" id="skills">
        <div className="row justify-content-around">
          <div className="col-10">
            <Fade duration="1500">
              <h2>{t("title-softskills")}</h2>
            </Fade>
            <p>{t("description-softskills")}</p>
          </div>
        </div>
      </div>
    </StyledSoftSkills>
  );
};

export default SoftSkills;
