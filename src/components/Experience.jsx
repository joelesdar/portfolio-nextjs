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
  text-align: center;
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
/* .date-subtitle {
  color: var(--main-blue);
} */

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
  .date-subtitle {
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
            <Fade>
              <h2 className="title">{t("title-experience")}</h2>
            </Fade>
            <div className="experience-board row justify-content-center">
              <Fade>
                <div className="col-12 col-md-2">
                  <div className="list-group" id="list-tab" role="tablist">
                    <a className="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Home</a>
                    <a className="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Jenial Software</a>
                    <a className="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Sotavento</a>
                    <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Lavenir</a>
                  </div>
                </div>
              </Fade>
              <div className="col-12 col-md-10 col-lg-8">
                <div className="tab-content" id="nav-tabContent">
                  <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
                    <Fade>
                      <h4 className="job-title">{t("experiencies.experience1.position")}</h4>
                      <p className="date-subtitle">{t("experiencies.experience1.date")}</p>
                    </Fade>
                    <ul>
                      <Fade bottom><li>{t("experiencies.experience1.responsability1")}</li></Fade>
                      <Fade bottom><li>{t("experiencies.experience1.responsability2")}</li></Fade>
                      <Fade bottom><li>{t("experiencies.experience1.responsability3")}</li></Fade>
                    </ul>
                  </div>
                  <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
                    <h4 className="job-title">{t("experiencies.experience2.position")}</h4>
                    <p className="date-subtitle">{t("experiencies.experience2.date")}</p>
                    <ul>
                      <Fade bottom><li>{t("experiencies.experience2.responsability1")}</li></Fade>
                      <Fade bottom><li>{t("experiencies.experience2.responsability2")}</li></Fade>
                      <Fade bottom><li>{t("experiencies.experience2.responsability3")}</li></Fade>
                      <Fade bottom><li>{t("experiencies.experience2.responsability4")}</li></Fade>
                      <Fade bottom><li>{t("experiencies.experience2.responsability5")}</li></Fade>
                    </ul>
                  </div>
                  <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
                    <h4 className="job-title">{t("experiencies.experience3.position")}</h4>
                    <p className="date-subtitle">{t("experiencies.experience3.date")}</p>
                    <ul>
                      <Fade bottom><li>{t("experiencies.experience3.responsability1")}</li></Fade>
                      <Fade bottom><li>{t("experiencies.experience3.responsability2")}</li></Fade>
                      <Fade bottom><li>{t("experiencies.experience3.responsability3")}</li></Fade>
                    </ul>
                  </div>
                  <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">
                    <h4 className="job-title">{t("experiencies.experience4.position")}</h4>
                    <p className="date-subtitle">{t("experiencies.experience4.date")}</p>
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
