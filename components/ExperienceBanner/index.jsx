import { useTranslation } from 'next-i18next'
import { StyledBanner } from "./styles"
import Image from 'next/image'
import posts from '../../posts.json'
import photo1 from '../../assets/profile2.jpg'
import { ExperienceCard } from '../ExperienceCard'

export const ExperienceBanner = () => {

  const { t } = useTranslation()
  // const { id, title, description, link, cover } = posts
  // const imageSrc

  return (
    <StyledBanner>
      <div className='container'>
        <div className='row align-items-center justify-content-around'>
            <h2 className='title'>What I do</h2>
            <div className='main-description col-10 col-md-6 col-lg-4'>
              <h2 className='title-description'>
                Buenas👀
              </h2>
              <p className='description'>{t('description')}</p>
            </div>
            <div className='image second-image col-10 col-md-6 col-lg-6'>
              <Image src={photo1} alt='Foto Joel' />
            </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-11">
            {posts[2].ExperiencePosts.map(post => (
              <ExperienceCard post={post} key={post.id} />
            ))}
          </div>
        </div>
      </div>
    </StyledBanner>
  );
}