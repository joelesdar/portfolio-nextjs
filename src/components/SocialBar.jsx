import React from "react";
import Styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledSocialBar = Styled.div`
  position: fixed;
  /* float: right; */
  /* right: 20%; */
  padding: 5px;
  background: var(--dark-blue);
`;

const SocialBar = () => {
  return (
    <StyledSocialBar>
        <FontAwesomeIcon icon={['fab', 'github']} color='var(--green-blue)' />
        <FontAwesomeIcon icon={['fab', 'linkedin-in']} color='var(--green-blue)' />
        <FontAwesomeIcon icon={['fab', 'instagram']} color='var(--green-blue)' />
    </StyledSocialBar>
  );
};

export default SocialBar;
