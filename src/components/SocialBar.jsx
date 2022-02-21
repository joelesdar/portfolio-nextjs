import React from "react";
import Styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import social from "./icons/constants";

const StyledSocialBar = Styled.div`
  /* width: 80px; */
  position: fixed;
  float: right;
  top: 45%;
  right: 0;
  z-index: 1;
  padding: 5px;
  background: var(--dark-blue);
  opacity: .75;
  backdrop-filter: blur(4px);
  overflow-x: hidden;
  border-radius: 5px;
  
  .social-icon {
    display: inline-block;
    width: 100%;
    padding: 5px 0;
  }
  
  .social-icon:hover {
    color: white;
  }
  `;

const SocialBar = () => {
  // const instagram = COLORS.instagram;
  return (
    <StyledSocialBar>
      <a href={social.github}>
        <FontAwesomeIcon
          icon={["fab", "github"]}
          className="social-icon"
          color="var(--green-blue)"
          size="lg"
          title="GitHub"
        />
      </a>
      <a href={social.linkedin}>
        <FontAwesomeIcon
          icon={["fab", "linkedin-in"]}
          className="social-icon"
          color="var(--green-blue)"
          size="lg"
          title="LinkedIn"
        />
      </a>
      <a href={social.instagram}>
        <FontAwesomeIcon
          icon={["fab", "instagram"]}
          className="social-icon"
          color="var(--green-blue)"
          size="lg"
          title="Instagram"
        />
      </a>
    </StyledSocialBar>
  );
};

export default SocialBar;
