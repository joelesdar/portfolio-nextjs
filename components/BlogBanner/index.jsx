import { Banner } from './styles'
import { useTranslation } from 'next-i18next'
import posts from '../../posts.json'
import { BlogCard } from '../BlogCard'
import { motion } from 'framer-motion'

export const BlogBanner = () => {
  const { t } = useTranslation()

  return (
    <Banner>
      <div className='container'>
        <div className='row align-items-center justify-content-around'>
          <div className='col-10'>
              <motion.h2 
                className='title'
                initial={{ opacity: 0}}
                whileInView={{ opacity: 100}}
                viewport={{ once: true }}
                transition={{duration: 1}}>
                📝{t('title-blog')}
              </motion.h2>
              <motion.h6 
                className='description'
                initial={{ opacity: 0}}
                whileInView={{ opacity: 100}}
                viewport={{ once: true }}
                transition={{duration: 1}}>
                {t('description-blog')}
              </motion.h6>
              <motion.div 
                className='row justify-content-around'
                initial={{ opacity: 0}}
                whileInView={{ opacity: 100}}
                viewport={{ once: true }}
                transition={{duration: 1}}>
                {posts[0].BlogPost.map(post => (
                  <div key={post.id} className='col-12 col-md-6 col-lg-4'>
                      <BlogCard key={post.id} post={post} />
                  </div>
                ))}
              </motion.div>
          </div>
        </div>
      </div>
    </Banner>
  )
}
