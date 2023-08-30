import { useTranslation } from 'react-i18next'
// import Fade from 'react-reveal/Fade'
import photo from '../../assets/profile.jpg'
import { DescriptionContainer } from './styles'
import 'bootstrap/dist/css/bootstrap.min.css'
import Image from 'next/image'

export const Description = () => {
  const { t } = useTranslation()

  return (
    <DescriptionContainer>
      <div className='container'>
        <div className='row align-items-center justify-content-around'>
          {/* <Fade left duration={1700}> */}
            <div className='image col-10 col-md-6'>
              <Image src={photo} alt='Foto Joel' />
            </div>
          {/* </Fade> */}
          {/* <Fade right duration={1700}> */}
            <div className='personal-description col-10 col-md-6'>
              <h2 className='title-description'>
                <span className='title-hello'>{t('title-hello')}</span>
                {t('title-name')} 👋🏽
              </h2>
              <p className='description'>{t('description')}</p>
            </div>
          {/* </Fade> */}
        </div>
      </div>
    </DescriptionContainer>
  )
}
