import { useTranslation } from 'next-i18next'
import photo1 from '../../assets/profile.jpg'
import { DescriptionContainer } from './styles'
import Image from 'next/image'

export const Description = () => {
  const { t } = useTranslation()

  return (
    <DescriptionContainer>
      <div className='container'>
        <div className='row align-items-center justify-content-around'>
            <div className='image col-10 col-md-6'>
              <Image src={photo1} alt='Foto Joel' />
            </div>
            <div className='full-description col-10 col-md-6'>
              <h3 className='title-description'>
                <span className='title-hello'>{t('title-hello')}</span>
                {t('title-name')} 👋🏽
              </h3>
              <p className='description'>{t('description')}</p>
            </div>
        </div>
      </div>
    </DescriptionContainer>
  )
}