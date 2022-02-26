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
import cover5 from "./icons/project5.png";
import cover6 from "./icons/project6.png";
import cover7 from "./icons/project7.png";
import cover8 from "./icons/project8.png";

const StyledProjects = Styled.div`

padding: 48px 0;
background: var(--dark-blue);

.title {
    text-align: center;
}

`;

const Projects = () => {
  const { t } = useTranslation();

  return (
    <StyledProjects>
      <div className="container">
        <div className="row align-items-center justify-content-around">
          <div className="col-10">
            <Fade duration='1500'>
              <h2 className="title">{t("title-projects")}</h2>
            </Fade>
            <h3>Proyectos destacados</h3>
            <div className="row justify-content-around">
              <div className="col-12 col-md-6">
                <Fade bottom duration="2000">
                  <Project
                    title={t("projects.project1.title")}
                    description={t("projects.project1.description")}
                    cover={cover1}
                    libraries={"React Bootstrap API"}
                    github={''}
                    link={''}
                  />
                </Fade>
              </div>
              <div className="col-12 col-md-6">
                <Fade bottom duration="2000">
                  <Project
                    title={t("projects.project2.title")}
                    description={t("projects.project2.description")}
                    cover={cover2}
                    libraries={"React Bootstrap"}
                    github={''}
                    link={''}
                  />
                </Fade>
              </div>
              <div className="col-12 col-md-6">
                <Fade bottom duration="2000">
                  <Project
                    title={t("projects.project3.title")}
                    description={t("projects.project3.description")}
                    cover={cover3}
                    libraries={"React Bootstrap"}
                    github={''}
                    link={''}
                  />
                </Fade>
              </div>
              <div className="col-12 col-md-6">
                <Fade bottom duration="2000">
                  <Project
                    title={t("projects.project4.title")}
                    description={t("projects.project4.description")}
                    cover={cover4}
                    libraries={"React Bootstrap"}
                    github={''}
                    link={''}
                  />
                </Fade>
              </div>
            </div>
            <a className="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Otros proyectos</a>
            <div className="collapse row justify-content-around" id="collapseExample">
              <div className="col-12 col-md-6">
                <Fade bottom duration="2000">
                  <Project
                    title={t("projects.project5.title")}
                    description={t("projects.project5.description")}
                    cover={cover5}
                    libraries={"JavaScript"}
                    github={'https://github.com/joelesdar/Tarjeta-Portafolio'}
                    link={'https://joelesdar.github.io/Tarjeta-Portafolio/'}
                  />
                </Fade>
              </div>
              <div className="col-12 col-md-6">
                <Fade bottom duration="2000">
                  <Project
                    title={t("projects.project6.title")}
                    description={t("projects.project6.description")}
                    cover={cover6}
                    libraries={"HTML5 CSS3"}
                    github={'https://github.com/joelesdar/HackersPros.com'}
                    link={'https://joelesdar.github.io/HackersPros.com/'}
                  />
                </Fade>
              </div>
              <div className="col-12 col-md-6">
                <Fade bottom duration="2000">
                  <Project
                    title={t("projects.project7.title")}
                    description={t("projects.project7.description")}
                    cover={cover7}
                    libraries={"JavaScript"}
                    github={'https://github.com/joelesdar/Parallax-iPhone-6S'}
                    link={'https://joelesdar.github.io/Parallax-iPhone-6S/'}
                  />
                </Fade>
              </div>
              <div className="col-12 col-md-6">
                <Fade bottom duration="2000">
                  <Project
                    title={t("projects.project8.title")}
                    description={t("projects.project8.description")}
                    cover={cover8}
                    libraries={"JavaScript"}
                    github={'https://github.com/joelesdar/Xilofono-JavaScript'}
                    link={'https://joelesdar.github.io/Xilofono-JavaScript/'}
                  />
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledProjects>
  );
};

export default Projects;
