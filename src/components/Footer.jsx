import React from "react";
import Styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";

const StyledFooter = Styled.div`

    background: var(--black);
    text-align: center;
    padding: 8px 0;

    .message {
    }
    
`;

const Footer = () => {
  const { t } = useTranslation();

  return (
    <StyledFooter>
      <div className="message">
        <p>{t("message-footer")}</p>
      </div>
    </StyledFooter>
  );
};

export default Footer;
