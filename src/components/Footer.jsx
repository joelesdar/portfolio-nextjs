import React from 'react';
import Styled from '@emotion/styled';
// import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';

const StyledFooter = Styled.div`

    background: var(--black);
    
`;

const Footer = () => {

    return ( 
        <StyledFooter>
            <h2>Footer</h2>
        </StyledFooter>
     );
}
 
export default Footer;