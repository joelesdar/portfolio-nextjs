import { useTranslation } from 'next-i18next'
import photo1 from '../../assets/profile.jpg'
import photo2 from '../../assets/profile2.jpg'
import { DescriptionContainer } from './styles'
import Image from 'next/image'

export const Description = ({ firstBlock, secondBlock}) => {
  const { t } = useTranslation()

  return (
    <DescriptionContainer topBorder={firstBlock}>
      <div className='container'>
        <div className='row align-items-center justify-content-around'>
          <div className="col-10">
            {firstBlock && (
              <div className="row justify-content-around align-items-center">
                <div className='image col-10 col-lg-5 col-xl-6'>
                  <Image src={photo1} alt='Foto Joel' />
                </div>
                <div className='full-description col-10 col-lg-6 mt-4 mt-lg-0'>
                  <h3 className='title-description'>
                    <span className='title-hello'>{t('title-hello')}</span>
                    {t('title-name')} 👋🏽
                  </h3>
                  <p className='description'>{t('description')}</p>
                </div>
              </div>
            )}
            {secondBlock && (
              <div className="row justify-content-around align-items-center second-block">
                <div className='full-description col-10 col-lg-5 col-xl-4'>
                  <h3 className='title-description'>Buenas👀</h3>
                  <p className='description'>{t('description')}</p>
                </div>
                <div className='image second-image col-10 col-lg-6 col-xl-8 mt-4 mt-lg-0'>
                  <Image src={photo2} alt='Foto Joel' />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </DescriptionContainer>
  )
}