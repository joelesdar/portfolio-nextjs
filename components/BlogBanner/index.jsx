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
            {/* <Fade duration={1500}> */}
              <h2 className='title'>{t('title-blog')}</h2>
            {/* </Fade> */}
            <div className='row justify-content-around'>
              {posts[0].BlogPost.map(post => (
                <div key={post.id} className='col-12 col-md-4'>
                  {/* <Fade> */}
                    <BlogCard key={post.id} post={post} />
                  {/* </Fade> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Banner>
  )
}
