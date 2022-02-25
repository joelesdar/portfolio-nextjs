import React from "react";
import Styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import Bounce from "react-reveal";
import "bootstrap/dist/css/bootstrap.min.css";
import Es from "./icons/Es";
import En from "./icons/En";
import Fr from "./icons/Fr";

const StyledLanguages = Styled.div`

.title {
  color: #3694FF;
  text-align: center;
}

.level {
  color: #0FF3F5;
}

.languages {
  padding-top: 24px;
}

.language {
  text-align: center;
}

`;

const Languages = () => {
  const { t } = useTranslation();

  return (
    <StyledLanguages>
      <div className="row">
        <div className="col-12">
          <h2 className="title">{t("title-language")}</h2>
        </div>
      </div>
      <div className="languages row align-items-center justify-content-around">
        <Bounce bottom duration='1000'>
        <div className="col-4 language">
          <En className="language-logo" />
          <h4>{t("language-en")}</h4>
          <h3 className="level">B2+</h3>
        </div>
        </Bounce>
        <Bounce top duration='1000'>
        <div className="language col-4">
          <Es className="language-logo" />
          <h4>{t("language-es")}</h4>
          <h3 className="level">C2</h3>
        </div>
        </Bounce>
        <Bounce bottom duration='1000'>
          <div className="language col-4">
            <Fr className="language-logo" />
            <h4>{t("language-fr")}</h4>
            <h3 className="level">A2</h3>
          </div>
        </Bounce>
      </div>
    </StyledLanguages>
  );
};

export default Languages;
