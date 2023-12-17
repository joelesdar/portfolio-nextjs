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
              <h2 className='title'>{t('title-blog')}</h2>
              <h6 className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h6>
              <div className='row justify-content-around'>
                {posts[0].BlogPost.map(post => (
                  <div key={post.id} className='col-12 col-md-4'>
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
