import { Banner } from './styles'
import Fade from 'react-reveal/Fade'
import { useTranslation } from 'react-i18next'
// import { BlogCard } from '../BlogCard'
// import preview1 from '../../assets/ethdevprogPreview.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'

export const BlogBanner = () => {
  const { t } = useTranslation()

  return (
    <Banner>
      <div className='container'>
        <div className='row align-items-center justify-content-around'>
          <div className='col-10'>
            <Fade duration='1500'>
              <h2 className='title'>{t('title-blog')}</h2>
            </Fade>
            <div className='row justify-content-around'>
              {/* <div className='col-12 col-md-4'>
                <Fade>
                  <BlogCard title='Empieza el Ethereum Developer Program' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' cover={preview1} />
                </Fade>
              </div>
              <div className='col-12 col-md-4'>
                <Fade>
                  <BlogCard title='Empieza el Ethereum Developer Program' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' cover={preview1} />
                </Fade>
              </div>
              <div className='col-12 col-md-4'>
                <Fade>
                  <BlogCard title='Empieza el Ethereum Developer Program' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' cover={preview1} />
                </Fade>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </Banner>
  )
}
