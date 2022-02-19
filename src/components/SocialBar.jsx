import React from "react";
import Styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledSocialBar = Styled.div`

`;

const SocialBar = () => {

  return (
    <StyledSocialBar>
        {/* <p>Como jueeeeeee</p> */}
        <FontAwesomeIcon icon="fa-brands fa-linkedin-in" border />
      {/* <FontAwesomeIcon icon={solid("user-secret")} />
      <FontAwesomeIcon icon={regular("coffee")} />
      <FontAwesomeIcon icon={brands("twitter")} /> */}
    </StyledSocialBar>
  );
};

export default SocialBar;
