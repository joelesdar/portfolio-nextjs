import React from 'react'
import { useTranslation } from 'react-i18next'
import { Fade, Bounce } from 'react-reveal'
import 'bootstrap/dist/css/bootstrap.min.css'
import Es from '../../assets/Es'
import En from '../../assets/En'
import Fr from '../../assets/Fr'
import { StyledLanguages } from './styles'

export const Languages = () => {
  const { t } = useTranslation()

  return (
    <StyledLanguages>
      <div className='container' id='languages'>
        <div className='row align-items-center justify-content-around'>
          <div className='col-10'>
            <div className='row'>
              <Fade duration='1500'>
                <div className='col-12'>
                  <h2 className='title'>{t('title-language')}</h2>
                </div>
              </Fade>
            </div>
            <div className='languages row align-items-center justify-content-around'>
              <Bounce bottom duration='1000'>
                <div className='col-4 language'>
                  <En className='language-logo' />
                  <h4>{t('language-en')}</h4>
                  <h3 className='level'>B2+</h3>
                </div>
              </Bounce>
              <Bounce top duration='1000'>
                <div className='language col-4'>
                  <Es className='language-logo' />
                  <h4>{t('language-es')}</h4>
                  <h3 className='level'>C2</h3>
                </div>
              </Bounce>
              <Bounce bottom duration='1000'>
                <div className='language col-4'>
                  <Fr className='language-logo' />
                  <h4>{t('language-fr')}</h4>
                  <h3 className='level'>A2</h3>
                </div>
              </Bounce>
            </div>
          </div>
        </div>
      </div>
    </StyledLanguages>
  )
}
