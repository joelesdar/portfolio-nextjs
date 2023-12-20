import { StyledBanner } from './styles'
import { useTranslation } from 'next-i18next'
import posts from '../../posts.json'
import { Carousel } from '../Carousel'
import { motion } from 'framer-motion'

export const EventsBanner = () => {
  const { t } = useTranslation()

  return (
    <StyledBanner>
      <div className='container'>
        <div className='row align-items-center justify-content-around'>
          <div className='col-10'>
              <motion.h2 
                className='title'
                initial={{ opacity: 0}}
                whileInView={{ opacity: 100}}
                viewport={{ once: true }}
                transition={{duration: 1}}>
                {t('title-events')}🚀
              </motion.h2>
              <motion.h6 
                className='description'
                initial={{ opacity: 0}}
                whileInView={{ opacity: 100}}
                viewport={{ once: true }}
                transition={{duration: 1}}>
                {t('description-events')}
              </motion.h6>
              <div className='row justify-content-around cards-container'>
                <motion.div 
                  className="col-12 carrousel-container"
                  initial={{y: "100%", opacity: 0}}
                  whileInView={{y: 0, opacity: 100}}
                  viewport={{ once: true }}
                  transition={{duration: 1}}>
                  <Carousel posts={posts[1].EventsPost} />
                </motion.div>
              </div>
          </div>
        </div>
      </div>
    </StyledBanner>
  )
}
