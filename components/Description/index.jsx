import { useTranslation } from 'next-i18next'
import photo1 from '../../public/assets/profile/profile1.webp'
import photo2 from '../../public/assets/profile/profile2.webp'
import photo3 from '../../public/assets/profile/profile3.webp'
import { DescriptionContainer } from './styles'
import Image from 'next/image'
import { motion } from 'framer-motion'

export const Description = ({ firstBlock, secondBlock, thirdBlock, secondColor}) => {
  const { t } = useTranslation()

  return (
    <DescriptionContainer topBorder={firstBlock} backgroundColor={secondColor}>
      <div className={'container'}>
        <div className='row align-items-center justify-content-center'>
          <div className="col-10">
            {firstBlock && (
              <div className="row justify-content-around align-items-center">
                <motion.div 
                  className='image col-12 col-sm-10 col-lg-5 col-xl-6'
                  initial={{x: "-100%", opacity: 0}}
                  whileInView={{x: 0, opacity: 100}}
                  viewport={{ once: true }}
                  transition={{duration: 1}}>
                  <Image src={photo1} alt='Foto Joel' />
                </motion.div>
                <motion.div 
                  className='full-description col-12 col-sm-10 col-lg-6 mt-4 mt-lg-0'
                  initial={{x: "100%", opacity: 0}}
                  whileInView={{x: 0, opacity: 100}}
                  viewport={{ once: true }}
                  transition={{duration: 1}}>
                  <h3 className='title-description'>
                    <span className='title-hello'>{t('title-hello-1')}</span>
                    {t('title-name-1')} 👋🏽
                  </h3>
                  <p className='description'>{t('description-hello-1')}</p>
                  <div className="tags row">
                    <p className='col-auto'>{t('description-tag-1')}</p>
                    <p className='col-auto'>{t('description-tag-2')}</p>
                    <p className='col-auto'>{t('description-tag-3')}</p>
                    <p className='col-auto'>{t('description-tag-4')}</p>
                  </div>
                </motion.div>
              </div>
            )}
            {secondBlock && (
              <div className="row justify-content-around align-items-center second-block">
                <motion.div 
                  className='full-description col-12 col-sm-10 col-lg-5 col-xl-4'
                  initial={{x: "-100%", opacity: 0}}
                  whileInView={{x: 0, opacity: 100}}
                  viewport={{ once: true }}
                  transition={{duration: 1}}>
                  <h3 className='title-description'>
                    {t('title-hello-2')}
                    <span className='title-hello'>{t('title-name-2')}💪</span>
                  </h3>
                  <p className='description'>{t('description-hello-2')}</p>
                </motion.div>
                <motion.div 
                  className='image second-image col-12 col-sm-10 col-lg-6 col-xl-8 mt-4 mt-lg-0'
                  initial={{x: "100%", opacity: 0}}
                  whileInView={{x: 0, opacity: 100}}
                  viewport={{ once: true }}
                  transition={{duration: 1}}>
                  <Image src={photo2} alt='Foto Joel y Angela Ocando' />
                </motion.div>
              </div>
            )}
            {thirdBlock && (
              <div className="row justify-content-around align-items-center">
                <motion.div 
                  className='image third-image col-12 col-sm-10 col-lg-5 col-xl-6'
                  initial={{x: "-100%", opacity: 0}}
                  whileInView={{x: 0, opacity: 100}}
                  viewport={{ once: true }}
                  transition={{duration: 1}}>
                  <Image src={photo3} alt='Foto Joel' />
                </motion.div>
                <motion.div 
                  className='full-description col-12 col-sm-10 col-lg-6 mt-4 mt-lg-0'
                  initial={{x: "100%", opacity: 0}}
                  whileInView={{x: 0, opacity: 100}}
                  viewport={{ once: true }}
                  transition={{duration: 1}}>
                  <h3 className='title-description'>
                    <span className='title-hello'>{t('title-hello-3')}</span>
                    {t('title-name-3')} 👨‍💻
                  </h3>
                  <p className='description'>{t('description-hello-3')}</p>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </div>
    </DescriptionContainer>
  )
}