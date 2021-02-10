import React from 'react';
import Styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import img from './icons/img.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import HamburguerMenu from './HamburguerMenu';
import HamburguerIcon from './icons/HamburguerIcon';

const StyledMain = Styled.div`
    h1 {
        /* font-size:6rem; */
    }
    .image {
        img {
            width:100%;
        }
    }
`;

const Main = () => {

    const { t } = useTranslation();

    return ( 
        <StyledMain>
            <Container>
                <Row className="align-items-center justify-content-center">
                    <Col className="image col-10 col-md-6">
                        <img src={img} alt=""/>
                    </Col>
                    <Col className="personal-description col-10 col-md-6">
                        <h1>Joel Esteban Diaz Arévalo</h1>
                        <h2>{t('information')}</h2>
                    </Col>
                </Row>
                <HamburguerMenu></HamburguerMenu>
            </Container>
        </StyledMain>
     );
}
 
export default Main;