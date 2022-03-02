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
  color: var(--green-blue);
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

.btn-primary {
  background-color: var(--black);
  /* padding: 8px; */
  border-radius: 8px;
  color: var(--green-blue);
  margin: 24px 8px;
  border: 1px solid var(--green-blue);
}

.btn-primary:hover {
  background-color: var(--green-blue);
  border-radius: 8px;
  border: 1px solid var(--main-blue);
  color: var(--black);
  margin: 24px 8px;
}

.mail {
  color: var(--green-blue);
}

`;

const Contact = () => {
  const { t } = useTranslation();

  return (
    <StyledContact>
      <div className="container" id="contact">
        <div className="row align-items-center justify-content-around">
          <div className="col-10">
            <div className="social row justify-content-center">
              <div className="find-me col-12">
                <p className="title">{t("title-contact")}</p>
                <p className="at">✨@Joelesdar</p>
              </div>
                <div className="col-2">
                  <a href={social.github} target="_blank">
                    <FontAwesomeIcon
                      icon={["fab", "github"]}
                      className="social-icon"
                      color="var(--green-blue)"
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
                      color="var(--green-blue)"
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
                      color="var(--green-blue)"
                      size="2xl"
                      title="Instagram"
                    />
                  </a>
                </div>
                <div className="col-12">
                  <a className="btn btn-primary" href="mailto:jodiazare@gmail.com">{t("link-contact")}</a>
                  
                  <p className="mail"><FontAwesomeIcon
                      icon={["fas", "envelope"]}
                      className="social-icon"
                      color="var(--green-blue)"
                      size="md"
                      title="mail"
                    /> Jodiazare@gmail.com</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </StyledContact>
  );
};

export default Contact;
