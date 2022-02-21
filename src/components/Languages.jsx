import React from "react";
import Styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import Es from "./icons/Es";
import En from "./icons/En";
import Fr from "./icons/Fr";

const StyledLanguages = Styled.div`

.title {
  color: #3694FF;
}

.level {
  color: #0FF3F5;
}

.language-name {
  color: #1C82F6;
}

/* .language-logo {
  svg {

    width: 100%;
  }
} */

`;

const Languages = () => {
  const { t } = useTranslation();

  return (
    <StyledLanguages>
      <div className="row align-items-center justify-content-center">
        <div className="col-12">
          <h2 className="title">{t("title-language")}</h2>
        </div>
      </div>
      <div className="row align-items-center justify-content-around">
        <div className="col-4 language-name">
          <En className="language-logo"/>
          <h4>{t("language-en")}</h4>
          <h3 className="level">B2+</h3>
        </div>
        <div className="col-4">
          <Es className="language-logo"/>
          <h4>{t("language-es")}</h4>
          <h3 className="level">C2</h3>
        </div>
        <div className="col-4">
          <Fr className="language-logo"/>
          <h4>{t("language-fr")}</h4>
          <h3 className="level">A2</h3>
        </div>
      </div>
    </StyledLanguages>
  );
};

export default Languages;
