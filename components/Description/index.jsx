import { useTranslation } from 'next-i18next'
import photo1 from '../../assets/profile.jpg'
import photo2 from '../../assets/profile2.jpg'
import { DescriptionContainer } from './styles'
import Image from 'next/image'
import { motion } from 'framer-motion'

export const Description = ({ firstBlock, secondBlock}) => {
  const { t } = useTranslation()

  return (
    <DescriptionContainer topBorder={firstBlock}>
      <div className='container'>
        <div className='row align-items-center justify-content-around'>
          <div className="col-10">
            {firstBlock && (
              <div className="row justify-content-around align-items-center">
                <motion.div 
                  className='image col-10 col-lg-5 col-xl-6'
                  initial={{x: "-100%", opacity: 0}}
                  whileInView={{x: 0, opacity: 100}}
                  viewport={{ once: true }}
                  transition={{duration: 1}}>
                  <Image src={photo1} alt='Foto Joel' />
                </motion.div>
                <motion.div 
                  className='full-description col-10 col-lg-6 mt-4 mt-lg-0'
                  initial={{x: "100%", opacity: 0}}
                  whileInView={{x: 0, opacity: 100}}
                  viewport={{ once: true }}
                  transition={{duration: 1}}>
                  <h3 className='title-description'>
                    <span className='title-hello'>{t('title-hello-1')}</span>
                    {t('title-name-1')} 👋🏽
                  </h3>
                  <p className='description'>{t('description-hello-1')}</p>
                </motion.div>
              </div>
            )}
            {secondBlock && (
              <div className="row justify-content-around align-items-center second-block">
                <motion.div 
                  className='full-description col-10 col-lg-5 col-xl-4'
                  initial={{x: "-100%", opacity: 0}}
                  whileInView={{x: 0, opacity: 100}}
                  viewport={{ once: true }}
                  transition={{duration: 1}}>
                  <h3 className='title-description'>{t('title-hello-2')}</h3>
                  <p className='description'>{t('description-hello-2')}</p>
                </motion.div>
                <motion.div 
                  className='image second-image col-10 col-lg-6 col-xl-8 mt-4 mt-lg-0'
                  initial={{x: "100%", opacity: 0}}
                  whileInView={{x: 0, opacity: 100}}
                  viewport={{ once: true }}
                  transition={{duration: 1}}>
                  <Image src={photo2} alt='Foto Joel y Angela Ocando' />
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </div>
    </DescriptionContainer>
  )
}