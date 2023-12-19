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
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10">
            <h2 className='title'>🔭{t('title-experiences')}</h2>
            <h6 className='description'>{t('description-experiences')}</h6>
            {posts[2].ExperiencePosts.map(post => (
              <ExperienceCard post={post} key={post.id} />
            ))}
          </div>
        </div>
      </div>
    </StyledBanner>
  );
}