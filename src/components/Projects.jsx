import React from "react";
import Styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import Project from "./Project";
import cover1 from "./icons/project1.png";
import cover2 from "./icons/project2.png";
import cover3 from "./icons/project3.png";
import cover4 from "./icons/project4.png";

const StyledProjects = Styled.div`

.projects-container {

}

`;

const Projects = () => {
  const { t } = useTranslation();

  return (
    <StyledProjects>
      <h2>{t("title-projects")}</h2>
      <div className="row justify-content-around">
        <div className="col-12 col-md-4 col-lg-6">
          <Fade bottom duration='2000'>
            <Project
              title={t("projects.project1.title")}
              description={t("projects.project1.description")}
              cover={cover1}
            />
          </Fade>
        </div>
        <div className="col-12 col-md-4 col-lg-6">
          <Fade bottom duration='2000'>
            <Project
              title={t("projects.project2.title")}
              description={t("projects.project2.description")}
              cover={cover2}
            />
          </Fade>
        </div>
        <div className="col-12 col-md-4 col-lg-6">
          <Fade bottom duration='2000'>
            <Project
              title={t("projects.project3.title")}
              description={t("projects.project3.description")}
              cover={cover3}
            />
          </Fade>
        </div>
        <div className="col-12 col-md-4 col-lg-6">
          <Fade bottom duration='2000'>
            <Project
              title={t("projects.project4.title")}
              description={t("projects.project4.description")}
              cover={cover4}
            />
          </Fade>
        </div>
      </div>
    </StyledProjects>
  );
};

export default Projects;
