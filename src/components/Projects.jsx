import React from 'react';
import Styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import Fade from 'react-reveal/Fade';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import Project from './Project';

const StyledProjects = Styled.div`

.projects-container {

}

`;

const Projects = () => {

    const { t } = useTranslation();

    return (
        <StyledProjects>
            <h2>{t('title-projects')}</h2>
            <div className="row">
                <div className="col-4">
                    <Project />
                </div>
                <div className="col-4">
                    <Project />
                </div>
                <div className="col-4">
                    <Project />
                </div>
            </div>

        </StyledProjects>
    );
}
 
export default Projects;