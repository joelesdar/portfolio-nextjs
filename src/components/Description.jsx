import React from 'react';
import Styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import img from './icons/img.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const StyledDescription = Styled.div`

.description-container {
    background-color : black;
}

.image {
    img {
        width: 80%;
    }
}

`;

const Description = () => {

    const { t } = useTranslation();

    return ( 
        <StyledDescription>
            <div className="description-container">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="image col-10 col-md-6">
                            <img src={img} alt=""/>
                        </div>
                        <div className="personal-description col-10 col-md-6">
                            <h3>{t('description')}</h3>
                        </div>
                    </div>
                </div>
            </div>

        </StyledDescription>
     );
}
 
export default Description;