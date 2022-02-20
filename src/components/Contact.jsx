import React from 'react';
import Styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import Fade from 'react-reveal/Fade';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';

const StyledContact = Styled.div`

background: #0C0936;
/* background: #090442; */
/* background: #061A33; */

.contact-container {

}

`;

const Contact = () => {

    const { t } = useTranslation();

    return (
        <StyledContact>
            <h2>{t('title-contact')}</h2>
            <div className="row ">
                <div className="col-12">
                    
                </div>
            </div>

        </StyledContact>
    );
}
 
export default Contact;