import { useTranslation } from 'next-i18next'
import { StyledBanner } from "./styles"
import { ExperienceCard } from '../ExperienceCard'
import { motion } from 'framer-motion'
import { Button } from '../Contact/styles'

export const ExperienceBanner = ({ posts, titleText, descriptionText, folder, disabledButton }) => {

  const { t, i18n } = useTranslation()

  return (
    <StyledBanner>
      <div className="container">
        <div className="row align-items-center justify-content-around">
          <div className="col-10">
            <div className="row justify-content-center">
              <motion.h2 
                className='title'
                initial={{ opacity: 0}}
                whileInView={{ opacity: 100}}
                viewport={{ once: true }}
                transition={{duration: 1}}>
                🔭{titleText}
              </motion.h2>
              <motion.h6 
                className='description'
                initial={{ opacity: 0}}
                whileInView={{ opacity: 100}}
                viewport={{ once: true }}
                transition={{duration: 1}}>
                {descriptionText}
              </motion.h6>
              {posts.map(post => (
                <ExperienceCard post={post} folder={folder} key={post.id} />
              ))}
              <motion.div 
                className="col-12 button"
                initial={{ opacity: 0}}
                whileInView={{ opacity: 100}}
                viewport={{ once: true }}
                transition={{duration: 1}}>
                {!disabledButton && <Button className='btn btn-primary' href={`/${i18n.language}/profile`}>{t('link-profile')}</Button>}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </StyledBanner>
  );
}