import React from 'react';
import Styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';

const StyledSkills = Styled.div`

.skills-container {
    background-color : white;
    /* position: relative; */
    color: black;
}

`;

const Skills = () => {

    const { t } = useTranslation();

    return ( 
        <StyledSkills>
            <div className="skills-container">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-10 col-md-6">
                            <h2>Buena</h2>
                        </div>
                        <div className="col-10 col-md-6">
                            <h3>{t('contact')}</h3>
                            <h3>{t('contact')}</h3>
                            <h3>{t('contact')}</h3>
                            <h3>{t('contact')}</h3>
                            <h3>{t('contact')}</h3>
                            <h3>{t('contact')}</h3>
                            <h3>{t('contact')}</h3>
                            <h3>{t('contact')}</h3>
                            <h3>{t('contact')}</h3>
                            <h3>{t('contact')}</h3>
                            <h3>{t('contact')}</h3>
                            <h3>{t('contact')}</h3>
                            <h3>{t('contact')}</h3>
                            <h3>{t('contact')}</h3>
                            <h3>{t('contact')}</h3>
                            <h3>{t('contact')}</h3>
                            <h3>{t('contact')}</h3>
                            <h3>{t('contact')}</h3>
                            <h3>{t('contact')}</h3>
                            <h3>{t('contact')}</h3>
                            <h3>{t('contact')}</h3>
                            <h3>{t('contact')}</h3>
                            <h3>{t('contact')}</h3>
                            <h3>{t('contact')}</h3>
                            <h3>{t('contact')}</h3>
                            <h3>{t('contact')}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </StyledSkills>
     );
}
 
export default Skills;