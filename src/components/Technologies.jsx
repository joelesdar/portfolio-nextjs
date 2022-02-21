import React from "react";
import Styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";

const StyledTechnologies = Styled.div`
    background: #0E141B;
`;

const Technologies = () => {
  const { t } = useTranslation();

  return (
    <StyledTechnologies>
      <div className="row justify-content-between">
        <div className="col-6">logos</div>
        <div className="col-6">
          <p>{t("technologies")}</p>
        </div>
      </div>
    </StyledTechnologies>
  );
};

export default Technologies;
