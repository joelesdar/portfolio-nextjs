import React from 'react';
import Styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import Technologies from './Technologies';
import Languages from './Languages';

const StyledSkills = Styled.div`

.skills-container {
    background-color : #061C36;
    /* position: relative; */
    color: #fff;
}

`;

const Skills = () => {

    const { t } = useTranslation();

    return ( 
        <StyledSkills>
            <div className="skills-container">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-10 col-md-6">
                            <h2>Buena</h2>
                        </div>
                        <div className="col-10 col-md-6">
                            <Technologies />
                        </div>
                        <div className="col-10">
                            <Languages />
                        </div>
                    </div>
                </div>
            </div>
        </StyledSkills>
     );
}
 
export default Skills;