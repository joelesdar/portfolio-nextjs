import { Banner } from './styles'
import { useTranslation } from 'next-i18next'
import posts from '../../posts.json'
import { BlogCard } from '../BlogCard'

export const BlogBanner = () => {
  const { t } = useTranslation()

  return (
    <Banner>
      <div className='container'>
        <div className='row align-items-center justify-content-around'>
          <div className='col-10'>
              <h2 className='title'>📝{t('title-blog')}</h2>
              <h6 className='description'>{t('description-blog')}</h6>
              <div className='row justify-content-around'>
                {posts[0].BlogPost.map(post => (
                  <div key={post.id} className='col-12 col-md-6 col-lg-4'>
                      <BlogCard key={post.id} post={post} />
                  </div>
                ))}
              </div>
          </div>
        </div>
      </div>
    </Banner>
  )
}
