import React from "react";
import Styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";

const StyledExperience = Styled.div`

padding: 48px 0;
background: var(--black);

.title {
  color: var(--main-blue);
}

.experience-board {
  margin-top: 24px;
}

.list-group {
  border-radius: 0px;
}

.list-group-item {
  background: rgba(0,0,0,0);
  border: none;
  padding: 8px 0;
  text-align: center;
  display: inline;
}

.list-group-item.active {
  background: var(--dark-blue);
  border-left: 2px solid var(--green-blue);
}

.job-title {
  color: var(--green-blue);
}


@media (max-width: 767px) {
  .list-group {
    flex-direction: row;
  }
  .list-group-item.active {
    border-top: 2px solid var(--green-blue);
    border-left: none;
  }
  .tab-content {
    margin-top: 24px;
  }
  .job-title {
    text-align: center;
  }
}

`;

const Experience = () => {
  const { t } = useTranslation();

  return (
    <StyledExperience>
      <div className="container">
        <div className="row align-items-center justify-content-around">
          <div className="col-10">
            <h2 className="title">{t("title-experience")}</h2>
            <div className="experience-board row justify-content-center">
              <div className="col-12 col-md-2">
                <div className="list-group" id="list-tab" role="tablist">
                  <a className="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Home</a>
                  <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Jenial Software</a>
                  <a className="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Sotavento</a>
                  <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Lavenir</a>
                </div>
              </div>
              <div className="col-12 col-md-8">
                <div className="tab-content" id="nav-tabContent">
                  <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
                    <h3 className="job-title">{t("experiencies.experience1.position")}</h3>
                    <p>{t("experiencies.experience1.date")}</p>
                    <ul>
                      <Fade bottom><li>{t("experiencies.experience1.responsability1")}</li></Fade>
                      <Fade bottom><li>{t("experiencies.experience1.responsability2")}</li></Fade>
                      <Fade bottom><li>{t("experiencies.experience1.responsability3")}</li></Fade>
                    </ul>
                  </div>
                  <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
                    <h3 className="job-title">{t("experiencies.experience2.position")}</h3>
                    <p>{t("experiencies.experience2.date")}</p>
                    <ul>
                      <Fade bottom><li>{t("experiencies.experience2.responsability1")}</li></Fade>
                      <Fade bottom><li>{t("experiencies.experience2.responsability2")}</li></Fade>
                      <Fade bottom><li>{t("experiencies.experience2.responsability3")}</li></Fade>
                    </ul>
                  </div>
                  <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
                    <h3 className="job-title">{t("experiencies.experience3.position")}</h3>
                    <p>{t("experiencies.experience3.date")}</p>
                    <ul>
                      <Fade bottom><li>{t("experiencies.experience3.responsability1")}</li></Fade>
                      <Fade bottom><li>{t("experiencies.experience3.responsability2")}</li></Fade>
                      <Fade bottom><li>{t("experiencies.experience3.responsability3")}</li></Fade>
                    </ul>
                  </div>
                  <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">
                    <h3 className="job-title">{t("experiencies.experience4.position")}</h3>
                    <p>{t("experiencies.experience4.date")}</p>
                    <ul>
                      <Fade bottom><li>{t("experiencies.experience4.responsability1")}</li></Fade>
                      <Fade bottom><li>{t("experiencies.experience4.responsability2")}</li></Fade>
                      <Fade bottom><li>{t("experiencies.experience4.responsability3")}</li></Fade>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledExperience>
  );
};

export default Experience;
