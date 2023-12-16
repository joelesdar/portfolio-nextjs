import { StyledBanner } from './styles'
import { useTranslation } from 'next-i18next'
import posts from '../../posts.json'
import { Carousel } from '../Carousel'

export const EventsBanner = () => {
  const { t } = useTranslation()

  return (
    <StyledBanner>
      <div className='container'>
        <div className='row align-items-center justify-content-around'>
          <div className='col-10'>
              <h3 className='title'>{t('title-events')}</h3>
            <div className='row justify-content-around cards-container'>
              <div className="col-12 carrousel-container">
                <Carousel posts={posts[1].EventsPost} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledBanner>
  )
}
