import React from 'react';
import Styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import Technologies from './Technologies';
import Languages from './Languages';
import Studies from './Studies';
import Experience from './Experience';
import Projects from './Projects';

const StyledSkills = Styled.div`

.skills-container {
    background-color : #061C36;
    /* position: relative; */
    color: #fff;
}

.block-container {
    padding: 50px 0;
}

`;

const Skills = () => {

    const { t } = useTranslation();

    return ( 
        <StyledSkills>
            <div className="skills-container">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-10 col-md-6 block-container">
                            <h2>Buena</h2>
                        </div>
                        <div className="col-10 col-md-6 block-container">
                            <Technologies />
                        </div>
                        <div className="col-10 block-container">
                            <Languages />
                        </div>
                        <div className="col-10 block-container">
                            <Studies />
                        </div>
                        <div className="col-10 block-container">
                            <Experience />
                        </div>
                        <div className="col-10 block-container">
                            <Projects />
                        </div>
                    </div>
                </div>
            </div>
        </StyledSkills>
     );
}
 
export default Skills;