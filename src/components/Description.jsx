import React from 'react';
import Styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import Fade from 'react-reveal/Fade';
import img from './icons/img.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const StyledDescription = Styled.div`

.description-container {
    padding-top: 2em;
    padding-bottom: 2em;
    background-color: #061C36;
    font-family: 'Rubik', sans-serif;
}

.image {
    margin-top: 2em;
    margin-bottom: 2em;
    position: relative;
    max-width: 400px;
    background: #1c82f6;
    overflow: hidden;
    padding: 0;
    border: 3px solid #1c82f6;
    border-radius: 20px;
    img {
        width: 100%;
        object-fit: cover;
        opacity: 0.6;
        /* border-radius: 20px; */
    }

    img:hover {
        opacity: 1;
        transition: opacity 0.5s ease-in-out;
    }
}

/* .image::after {
    border: 2px solid white;
    top: 20px;
    left: 20px;
    display: block;
    position: absolute;
    z-index: -1;
} */



/* .image .hover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    color: #fff;
}

.image::before .hover {
    display: block;
    background: rgb(28,130,246, 0.5);
}

.image:hover .hover {
    display: block;
    background: rgb(28,130,246, 0.5);
} */

.personal-description {
    border: 3px solid #1c82f6;
    border-radius: 20px;
}

`;

const Description = () => {

    const { t } = useTranslation();

    return ( 
        <StyledDescription>
            <div className="description-container">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                                <Fade left duration={1700}>
                            <div className="image col-10 col-md-6">
                                    <img src={img} alt="Foto Joel" />
                                    {/* <div className="hover">Who's this?</div> */}
                            </div>
                                </Fade>
                            <div className="personal-description col-10 col-md-6">
                                <Fade right duration={1700}>
                                    <h3>{t('description')}</h3>
                                </Fade>
                            </div>
                    </div>
                </div>
            </div>

        </StyledDescription>
     );
}
 
export default Description;