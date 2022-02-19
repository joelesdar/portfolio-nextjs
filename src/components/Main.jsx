import React from 'react';
import Styled from '@emotion/styled';
// import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './Welcome';
import Description from './Description';
import Skills from './Skills';
import Contact from './Contact';

const StyledMain = Styled.div`
    
`;

const Main = () => {

    return ( 
        <StyledMain>
            <Welcome />
            <Description />
            <Skills />
            <Contact />
        </StyledMain>
     );
}
 
export default Main;