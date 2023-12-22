import { useTranslation } from 'next-i18next'
import { StyledBanner } from "./styles"
import { ExperienceCard } from '../ExperienceCard'
import { motion } from 'framer-motion'

export const ExperienceBanner = ({ posts, titleText, descriptionText, folder }) => {

  const { t } = useTranslation()

  return (
    <StyledBanner>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10">
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
          </div>
        </div>
      </div>
    </StyledBanner>
  );
}