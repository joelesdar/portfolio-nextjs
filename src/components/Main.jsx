import React from 'react';
import Styled from '@emotion/styled';
// import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './Welcome';
import Description from './Description';
import Skills from './Skills';
import Contact from './Contact';
import SocialBar from './SocialBar';

const StyledMain = Styled.div`
    
`;

const Main = () => {

    return ( 
        <StyledMain>
            <Welcome />
            <Description />
            <Skills />
            <Contact />
            <SocialBar />
        </StyledMain>
     );
}
 
export default Main;