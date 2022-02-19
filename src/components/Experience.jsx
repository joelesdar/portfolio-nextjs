import React from 'react';
import Styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import Fade from 'react-reveal/Fade';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';

const StyledExperience = Styled.div`

`;

const Experience = () => {

    const { t } = useTranslation();

    return (
        <StyledExperience>
            <h2>{t('title-experience')}</h2>
        </StyledExperience>
    );
}
 
export default Experience;