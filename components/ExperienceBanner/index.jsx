import { useTranslation } from 'next-i18next'
import { StyledBanner } from "./styles"
import Image from 'next/image'
import posts from '../../posts.json'
import photo1 from '../../assets/profile2.jpg'
import { ExperienceCard } from '../ExperienceCard'
import { motion } from 'framer-motion'

export const ExperienceBanner = () => {

  const { t } = useTranslation()
  // const { id, title, description, link, cover } = posts
  // const imageSrc

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
              🔭{t('title-experiences')}
            </motion.h2>
            <motion.h6 
              className='description'
              initial={{ opacity: 0}}
              whileInView={{ opacity: 100}}
              viewport={{ once: true }}
              transition={{duration: 1}}>
              {t('description-experiences')}
            </motion.h6>
            {posts[2].ExperiencePosts.map(post => (
              <ExperienceCard post={post} key={post.id} />
            ))}
          </div>
        </div>
      </div>
    </StyledBanner>
  );
}