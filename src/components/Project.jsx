import React from "react";
import Styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import img from "./icons/img.jpg";

const StyledProject = Styled.div`

.card {
    background: #0C0936;
    color: white;
    padding: 0;
    border-radius: 20px;
}

.card-img-top {
    /* border-radius: 20px; */
    width: 80%;
    padding-top: 20px;
    margin: 0 auto;
}

.card-title {
    color: #0FF3F5;
}

.btn {
   background:#061C36;
}

.btn:hover {
    background:#0FF3F5;
    color: #061C36;
}
`;

const Project = () => {
  const { t } = useTranslation();

  return (
    <StyledProject>
      <div className="card">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#!" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </StyledProject>
  );
};

export default Project;
