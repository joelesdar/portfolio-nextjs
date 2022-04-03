import React, { useState } from "react";
import Styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import "bootstrap/dist/css/bootstrap.min.css";
import Project from "./Project";
import cover1 from "./icons/project1.png";
import cover2 from "./icons/project2.png";
import cover3 from "./icons/project3.png";
import cover4 from "./icons/project4.png";
import cover5 from "./icons/project5.png";
import cover6 from "./icons/project6.jpg";
import cover7 from "./icons/project7.png";
import cover8 from "./icons/project8.png";
import cover9 from "./icons/project91.jpg";
import cover10 from "./icons/project10.png";

const StyledProjects = Styled.div`

padding: 48px 0;
background: var(--dark-blue);

.title {
    text-align: center;
}

.btn-primary {
  background-color: var(--intense-blue);
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
  color: var(--intense-blue);
  margin: 24px 8px;
}

`;

const Projects = () => {
  const { t } = useTranslation();
  const [showMessage, changeMessage] = useState(t("show-more-projects"));

  const updateMessage = () => {
    showMessage === t("show-more-projects")
      ? changeMessage(t("show-less-projects"))
      : changeMessage(t("show-more-projects"));
  };

  return (
    <StyledProjects>
      <div className="container" id="projects">
        <div className="row align-items-center justify-content-around">
          <div className="col-10">
            <Fade duration="1500">
              <h2 className="title">{t("title-projects")}</h2>
            </Fade>
            <Fade duration="1500">
              <h3>{t("subtitle-projects")}</h3>
            </Fade>
            <div className="row justify-content-around">
              <div className="col-12 col-md-6">
                <Fade bottom duration="2000">
                  <Project
                    title={t("projects.project6.title")}
                    description={t("projects.project6.description")}
                    cover={cover6}
                    libraries={"WordPress"}
                    link={"https://redhus.org/"}
                  />
                </Fade>
              </div>
              <div className="col-12 col-md-6">
                <Fade bottom duration="2000">
                  <Project
                    title={t("projects.project1.title")}
                    description={t("projects.project1.description")}
                    cover={cover1}
                    libraries={"React Bootstrap API"}
                    github={"https://github.com/joelesdar/BreakingBadQuotes"}
                    link={"https://epic-austin-92bc71.netlify.app"}
                  />
                </Fade>
              </div>
              <div className="col-12 col-md-6">
                <Fade bottom duration="2000">
                  <Project
                    title={t("projects.project9.title")}
                    description={t("projects.project9.description")}
                    cover={cover9}
                    libraries={"C#"}
                    github={"https://github.com/joelesdar/Proyecto-Gokubos"}
                    link={"https://www.behance.net/gallery/138661033/Proyecto-Gokubos"}
                  />
                </Fade>
              </div>
              <div className="col-12 col-md-6">
                <Fade bottom duration="2000">
                  <Project
                    title={t("projects.project5.title")}
                    description={t("projects.project5.description")}
                    cover={cover5}
                    libraries={"JavaScript"}
                    github={"https://github.com/joelesdar/Tarjeta-Portafolio"}
                    link={"https://joelesdar.github.io/Tarjeta-Portafolio/"}
                  />
                </Fade>
              </div>
            </div>
            <a
              className="btn btn-primary"
              data-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
              onClick={() => updateMessage()}
            >
              {showMessage}
            </a>
            <div
              className="collapse row justify-content-around"
              id="collapseExample"
            >
              <div className="col-12">
                <Fade duration="1500">
                  <h3>{t("subtitle-more-projects")}</h3>
                </Fade>
              <div className="col-12 col-md-6">
                <Fade bottom duration="2000">
                  <Project
                    title={t("projects.project4.title")}
                    description={t("projects.project4.description")}
                    cover={cover4}
                    libraries={"React Bootstrap"}
                    github={"https://github.com/joelesdar/citas-veterinaria"}
                    link={"https://naughty-meitner-fb09b8.netlify.app/"}
                  />
                </Fade>
              </div>
              </div>
              <div className="col-12 col-md-6">
                <Fade bottom duration="2000">
                  <Project
                    title={t("projects.project2.title")}
                    description={t("projects.project2.description")}
                    cover={cover2}
                    libraries={"React Bootstrap"}
                    github={"https://github.com/joelesdar/Cotizador"}
                    link={"https://practical-turing-dd2d5e.netlify.app/"}
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
                    github={"https://github.com/joelesdar/Xilofono-JavaScript"}
                    link={"https://joelesdar.github.io/Xilofono-JavaScript/"}
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
                    github={"https://github.com/joelesdar/presupuesto"}
                    link={"https://epic-wright-64d8a7.netlify.app/"}
                  />
                </Fade>
              </div>
              <div className="col-12 col-md-6">
                <Fade bottom duration="2000">
                  <Project
                    title={t("projects.project7.title")}
                    description={t("projects.project7.description")}
                    cover={cover7}
                    libraries={"HTML5 CSS3"}
                    github={"https://github.com/joelesdar/Portafolio"}
                    link={"https://joelesdar.github.io/Portafolio/"}
                  />
                </Fade>
              </div>
              <div className="col-12 col-md-6">
                <Fade bottom duration="2000">
                  <Project
                    title={t("projects.project10.title")}
                    description={t("projects.project10.description")}
                    cover={cover10}
                    libraries={"HTML5 CSS3"}
                    github={"https://github.com/joelesdar/Invie"}
                    link={"https://joelesdar.github.io/Invie/"}
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
