import React from 'react'
import { useTranslation } from 'react-i18next'
// import Fade from 'react-reveal/Fade'
import unal from '../../assets/unal.png'
import platzi from '../../assets/platzi.png'
import Certificate from '../../assets/certificate.jpg'
import { StyledStudies } from './styles'
import Image from 'next/image'

export const Studies = () => {
  const { t } = useTranslation()

  return (
    <StyledStudies>
      <div className='container' id='studies'>
        <div className='row align-items-center justify-content-around'>
          <div className='col-10'>
            {/* <Fade duration={1500}> */}
              <h2>{t('title-studies')}</h2>
            {/* </Fade> */}
            <div className='row'>
              {/* <Fade left> */}
                <div className='study-block col-12 col-md-6'>
                  <h4 className='career-title'>{t('title-career')}</h4>
                  <p>{t('description-university')}</p>
                  <h5 className='institution'>{t('title-university')}</h5>
                  <div className='logo'>
                    <Image className='logo-university' src={unal} alt='Universidad Nacional de Colombia' title='Universidad Nacional de Colombia' />
                  </div>
                </div>
              {/* </Fade> */}
              {/* <Fade right> */}
                <div className='study-block col-12 col-md-6'>
                  <h4 className='career-title'>{t('title-career-platzi')}</h4>
                  <p>{t('description-platzi')}</p>
                  <h5 className='institution'>Platzi</h5>
                  <div className='logo'>
                    <Image className='logo-university' src={platzi} alt='Platzi' title='Platzi' />
                  </div>
                </div>
              {/* </Fade> */}
            </div>
            {/* <Fade duration={1500}> */}
              <div className='col-12'>
                <h2>{t('title-blockchain')}</h2>
              </div>
            {/* </Fade> */}
            <div className='container'>
              <div className='row align-items-center justify-content-center study-block'>
                <div className='col-12 col-md-5'>
                  <h4 className='career-title'>Ethereum Developer Program</h4>
                  <p>{t('description-blockchain')}</p>
                </div>
                {/* <Fade> */}
                  <div className='col-10 col-md-7 image'>
                    <Image src={Certificate} alt='Certificate' />
                  </div>
                {/* </Fade> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledStudies>
  )
}
