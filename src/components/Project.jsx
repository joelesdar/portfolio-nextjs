import React from 'react';
import Styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import Fade from 'react-reveal/Fade';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';

const StyledProject = Styled.div`

.project-container {

}

`;

const Project = () => {

    const { t } = useTranslation();

    return (
        <StyledProject>
            <h2>{t('title-project')}</h2>
            <div className="row">
                <div className="col-12">
                    
                </div>
            </div>

        </StyledProject>
    );
}
 
export default Project;