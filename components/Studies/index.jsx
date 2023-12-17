import React from 'react'
import { useTranslation } from 'next-i18next'
import unal from '../../assets/unal.png'
import platzi from '../../assets/platzi.png'
import { StyledStudies } from './styles'
import Image from 'next/image'

export const Studies = () => {
  const { t } = useTranslation()

  return (
    <StyledStudies>
      <div className='container' id='studies'>
        <div className='row align-items-center justify-content-around'>
          <div className='col-10'>
              <h2>{t('title-studies')}</h2>
            <div className='row'>
                <div className='study-block col-12 col-md-6'>
                  <h4 className='career-title'>{t('title-career')}</h4>
                  <p>{t('description-university')}</p>
                  <h5 className='institution'>{t('title-university')}</h5>
                  <div className='logo'>
                    <Image className='logo-university' src={unal} alt='Universidad Nacional de Colombia' title='Universidad Nacional de Colombia' />
                  </div>
                </div>
                <div className='study-block col-12 col-md-6'>
                  <h4 className='career-title'>{t('title-career-platzi')}</h4>
                  <p>{t('description-platzi')}</p>
                  <h5 className='institution'>Platzi</h5>
                  <div className='logo'>
                    <Image className='logo-university' src={platzi} alt='Platzi' title='Platzi' />
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </StyledStudies>
  )
}
