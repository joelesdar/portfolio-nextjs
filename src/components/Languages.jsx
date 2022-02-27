import React from "react";
import Styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import { Fade, Bounce } from "react-reveal";
import "bootstrap/dist/css/bootstrap.min.css";
import Es from "./icons/Es";
import En from "./icons/En";
import Fr from "./icons/Fr";

const StyledLanguages = Styled.div`

padding: 48px 0;
background: var(--black);

.title {
  color: var(--main-blue);
  text-align: center;
}

.level {
  color: var(--green-blue);
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
      <div className="container">
        <div className="row align-items-center justify-content-around">
          <div className="col-10">
            <div className="row">
              <Fade duration='1500'>
                <div className="col-12">
                  <h2 className="title">{t("title-language")}</h2>
                </div>
              </Fade>
            </div>
            <div className="languages row align-items-center justify-content-around">
              <Bounce bottom duration="1000">
                <div className="col-4 language">
                  <En className="language-logo" />
                  <h4>{t("language-en")}</h4>
                  <h3 className="level">B2+</h3>
                </div>
              </Bounce>
              <Bounce top duration="1000">
                <div className="language col-4">
                  <Es className="language-logo" />
                  <h4>{t("language-es")}</h4>
                  <h3 className="level">C2</h3>
                </div>
              </Bounce>
              <Bounce bottom duration="1000">
                <div className="language col-4">
                  <Fr className="language-logo" />
                  <h4>{t("language-fr")}</h4>
                  <h3 className="level">A2</h3>
                </div>
              </Bounce>
            </div>
          </div>
        </div>
      </div>
    </StyledLanguages>
  );
};

export default Languages;
