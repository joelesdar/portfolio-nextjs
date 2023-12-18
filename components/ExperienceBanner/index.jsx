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
            <h2 className='title'>🔭What I do</h2>
            <h6 className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h6>
            {posts[2].ExperiencePosts.map(post => (
              <ExperienceCard post={post} key={post.id} />
            ))}
          </div>
        </div>
      </div>
    </StyledBanner>
  );
}