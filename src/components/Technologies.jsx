import React from 'react';
import Styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import Fade from 'react-reveal/Fade';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';

const StyledTechnologies = Styled.div`

`;

const Technologies = () => {

    const { t } = useTranslation();

    return (
        <StyledTechnologies>
            <p>{t('technologies')}</p>
        </StyledTechnologies>
    );
}
 
export default Technologies;