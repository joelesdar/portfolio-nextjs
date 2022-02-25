import React from "react";
import Styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";

const StyledContact = Styled.div`

padding: 48px 0;
background: var(--black);

`;

const Contact = () => {
  const { t } = useTranslation();

  return (
    <StyledContact>
      <div className="container">
        <div className="row align-items-center justify-content-around">
          <div className="col-10">
            <h2>{t("title-contact")}</h2>
            <div className="row ">
              <div className="col-12"></div>
            </div>
          </div>
        </div>
      </div>
    </StyledContact>
  );
};

export default Contact;
