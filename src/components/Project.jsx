import React from "react";
import Styled from "@emotion/styled";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledProject = Styled.div`

padding: 16px 0;

.card {
    background: #0C0936;
    color: white;
    padding: 0;
    border-radius: 20px;
    img {
        border-radius: 20px 20px 0 0;
        margin: 0 auto;
        object-fit: cover;
        opacity: 0.6;
    }

    img:hover {
        opacity: 1;
        transition: opacity 0.3s ease-in-out;
    }
}

.card-body {
  border-top: 3px solid var(--green-blue);
}

.card-title {
    color: var(--green-blue);
}

.libraries {
  color: var(--main-blue);
}

.icon {
  padding-left: 16px;
}

.icon:hover {
  color: white;
}

`;

const Project = ( {title, description, cover, libraries, github, link} ) => {

  return (
    <StyledProject>
      <div className="card">
        <img src={cover} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <div className="row justify-content-between">
            <div className="libraries col-auto">
              <p>{libraries}</p>
            </div>
            <div className="col-auto">
            <a href={github} target="_blank" rel="noreferrer">
              <FontAwesomeIcon className="icon" icon={["fab", "github"]} color="var(--green-blue)" size="xl" />
            </a>
            <a href={link} target="_blank" rel="noreferrer">
              <FontAwesomeIcon className="icon" icon={["fas", "arrow-up-right-from-square"]} color="var(--green-blue)" size="xl" />
            </a>
            </div>
          </div>
        </div>
      </div>
    </StyledProject>
  );
};

export default Project;
