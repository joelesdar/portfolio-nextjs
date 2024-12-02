import React from 'react'
import { useTranslation } from 'next-i18next'
import { StyledStudies } from './styles'
import { motion } from 'framer-motion'
import unal from '../../public/assets/logos/unal.webp'
import platzi from '../../public/assets/logos/platzi.webp'
import Image from 'next/image'

export const Studies = () => {
  const { t } = useTranslation()

  return (
    <StyledStudies>
      <div className='container' id='studies'>
        <div className='row justify-content-around'>
          <div className='col-10'>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 100 }}
              viewport={{ once: true }}
              transition={{duration: 1}}>
              {t('title-studies')}
            </motion.h2>
            <div className='row'>
              <motion.div 
                className='study-block col-12 col-md-6'
                initial={{ opacity: 0, x: '-100%'}}
                whileInView={{ opacity: 100, x: 0 }}
                viewport={{ once: true }}
                transition={{duration: 1}}>
                <h4 className='career-title'>{t('title-career')}</h4>
                <p>{t('description-university')}</p>
              </motion.div>
              <motion.div
                className="col-12 d-md-none"
                initial={{ opacity: 0, x: '-100%'}}
                whileInView={{ opacity: 100, x: 0}}
                viewport={{ once: true }}
                transition={{duration: 1}}>
                <h5 className='institution'>{t('title-university')}</h5>
                <div className='logo'>
                  <Image className='logo-university' src={unal} alt='Universidad Nacional de Colombia' title='Universidad Nacional de Colombia' />
                </div>
              </motion.div>
              <motion.div 
                className='study-block col-12 col-md-6'
                initial={{ opacity: 0, x: '100%'}}
                whileInView={{ opacity: 100, x: 0}}
                viewport={{ once: true }}
                transition={{duration: 1}}>
                <h4 className='career-title'>{t('title-career-platzi')}</h4>
                <p>{t('description-platzi')}<a href="https://platzi.com/p/joelesdar/" target='_blank'>Platzi</a>.</p>
                
              </motion.div>
              <motion.div
                className="col-12 d-md-none"
                initial={{ opacity: 0, x: '100%'}}
                whileInView={{ opacity: 100, x: 0}}
                viewport={{ once: true }}
                transition={{duration: 1}}>
                <h5 className='institution'>Platzi</h5>
                <div className='logo'>
                  <Image className='logo-university' src={platzi} alt='Platzi' title='Platzi' />
                </div>
              </motion.div>
            </div>
            <div className="row d-none d-md-flex">
              <motion.div
                className="col-6"
                initial={{ opacity: 0, x: '-100%'}}
                whileInView={{ opacity: 100, x: 0}}
                viewport={{ once: true }}
                transition={{duration: 1}}>
                <h5 className='institution'>{t('title-university')}</h5>
                <div className='logo'>
                  <Image className='logo-university' src={unal} alt='Universidad Nacional de Colombia' title='Universidad Nacional de Colombia' />
                </div>
              </motion.div>
              <motion.div
                className="col-6"
                initial={{ opacity: 0, x: '100%'}}
                whileInView={{ opacity: 100, x: 0}}
                viewport={{ once: true }}
                transition={{duration: 1}}>
                <h5 className='institution'>Platzi</h5>
                <div className='logo'>
                  <Image className='logo-university' src={platzi} alt='Platzi' title='Platzi' />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </StyledStudies>
  )
}
