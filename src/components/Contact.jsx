import React from "react";
import Styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import $ from "jquery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import social from "./icons/constants";
import "bootstrap/dist/css/bootstrap.min.css";

const StyledContact = Styled.div`

padding: 48px 0;
background: var(--black);

.title {
  color: var(--main-blue);
  text-align: center;
}
.social {
  text-align: center;
}
.social-icon:hover {
  color: white;
}
.find-me {
  font-size: 1.6rem;
  padding: 16px;
  p {
    padding: 0;
    margin: 0;
  }
}

.at {
  color: var(--yellow);
  font-size: 2rem;
}

`;

const Contact = () => {
  const { t } = useTranslation();

  return (
    <StyledContact>
      <div className="container" id="contact">
        <div className="row align-items-center justify-content-around">
          <div className="col-10">
            {/* <h2 className="title">{t("title-contact")}</h2> */}
            <div className="social row justify-content-center">
              <div className="find-me col-12">
                <p>{t("title-contact")}</p>
                <p className="at">✨@Joelesdar</p>
              </div>
                <div className="col-2">
                  <a href={social.github} target="_blank">
                    <FontAwesomeIcon
                      icon={["fab", "github"]}
                      className="social-icon"
                      color="var(--main-blue)"
                      size="2xl"
                      title="GitHub"
                    />
                  </a>
                </div>
                <div className="col-2">
                  <a href={social.linkedin} target="_blank">
                    <FontAwesomeIcon
                      icon={["fab", "linkedin-in"]}
                      className="social-icon"
                      color="var(--main-blue)"
                      size="2xl"
                      title="LinkedIn"
                    />
                  </a>
                </div>
                <div className="col-2">
                  <a href={social.instagram} target="_blank">
                    <FontAwesomeIcon
                      icon={["fab", "instagram"]}
                      className="social-icon"
                      color="var(--main-blue)"
                      size="2xl"
                      title="Instagram"
                    />
                  </a>
                </div>
                <div className="col-12">
                  <p>Joelesdar@gmail.com</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </StyledContact>
  );
};

export default Contact;
