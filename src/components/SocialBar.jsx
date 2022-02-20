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
      {/* <FontAwesomeIcon icon="fa-brands fa-twitter" />
    <FontAwesomeIcon icon="fa-brands fa-font-awesome" /> */}
        {/* <p>Como jueeeeeee</p> */}
        <FontAwesomeIcon icon={['fab', 'github']} color='#94B43B' />
        <FontAwesomeIcon icon={['fab', 'linkedin-in']} color='#94B43B' />
        <FontAwesomeIcon icon={['fab', 'instagram']} color='#94B43B' />
      {/* <FontAwesomeIcon icon={solid("user-secret")} />
      <FontAwesomeIcon icon={regular("coffee")} />
      <FontAwesomeIcon icon={brands("twitter")} /> */}
    </StyledSocialBar>
  );
};

export default SocialBar;
