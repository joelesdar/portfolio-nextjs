import React from 'react';
import Styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import Fade from 'react-reveal/Fade';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';

const StyledStudies = Styled.div`

`;

const Studies = () => {

    const { t } = useTranslation();

    return (
        <StyledStudies>
            <h2>{t('title-studies')}</h2>
        </StyledStudies>
    );
}
 
export default Studies;