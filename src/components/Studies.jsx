import React from 'react'
import Styled from '@emotion/styled'
import { useTranslation } from 'react-i18next'
import Fade from 'react-reveal/Fade'
import 'bootstrap/dist/css/bootstrap.min.css'
import unal from './icons/unal.png'
import platzi from './icons/platzi.png'
import Certificate from './icons/certificate.jpg'

const StyledStudies = Styled.div`

padding: 48px 0;
background: var(--dark-blue);

.study-block {
  padding-top: 16px;
  padding-bottom: 16px;
}

.career-title {
  color: var(--main-blue);
}

.institution {
  /* color: var(--main-blue); */
}

.logo {
  padding-top: 16px;
  text-align: center;
}

.logo-university {
  max-height: 8rem;
}

.blockchain-section {
  padding: 4rem 0;
  text-align: center;
}

/* .certificate-section {
  /* padding: 2rem 0; */
} */

.image {
  margin: 0 auto;
  position: relative;
  max-width: 800px;
  background: var(--main-blue);
  overflow: hidden;
  padding: 0;
  border: 3px solid var(--main-blue);
  border-radius: 20px;
  img {
      width: 100%;
      object-fit: cover;
      opacity: 0.8;
  }

  img:hover {
      opacity: 1;
      transition: opacity 0.5s ease-in-out;
  }
}

`

const Studies = () => {
  const { t } = useTranslation()

  return (
    <StyledStudies>
      <div className='container' id='studies'>
        <div className='row align-items-center justify-content-around'>
          <div className='col-10'>
            <Fade duration='1500'>
              <h2>{t('title-studies')}</h2>
            </Fade>
            <div className='row'>
              <Fade left>
                <div className='study-block col-12 col-md-6'>
                  <h4 className='career-title'>{t('title-career')}</h4>
                  <p>{t('description-university')}</p>
                  <h5 className='institution'>{t('title-university')}</h5>
                  <div className='logo'>
                    <img className='logo-university' src={unal} alt='Universidad Nacional de Colombia' title='Universidad Nacional de Colombia' />
                  </div>
                </div>
              </Fade>
              <Fade right>
                <div className='study-block col-12 col-md-6'>
                  <h4 className='career-title'>{t('title-career-platzi')}</h4>
                  <p>{t('description-platzi')}</p>
                  <h5 className='institution'>Platzi</h5>
                  <div className='logo'>
                    <img className='logo-university' src={platzi} alt='Platzi' title='Platzi' />
                  </div>
                </div>
              </Fade>
            </div>
            <div className='row blockchain-section'>
              <Fade duration='1500'>
                <div className='col-12'>
                  <h2>Blockchain Development</h2>
                </div>
              </Fade>
              <div className='certificate-section'>
                <div className='col-10 col-md-8'>
                  <h5>Hice parte del Ethereum Developer program</h5>
                </div>
                <Fade>
                  <div className='col-10 col-md-8 image'>
                    <img src={Certificate} alt='Certificate' />
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledStudies>
  )
}

export default Studies
