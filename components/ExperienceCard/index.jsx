import { useTranslation } from 'next-i18next'
import { StyledCard, ImageContainer } from './styles'

export const ExperienceCard = ({ post }) => {

  const { title, description, link, cover } = post
  const imageSrc = require(`../../assets/work/${cover}`).default

  return (
    <StyledCard>
      <div className="row justify-content-center">
        <div className="col-12 col-lg-3 title-container">
          <h5>{title}</h5>
        </div>
        <div className="col-12 col-lg">
          <div className="text-container">
              <p>{description}</p>
          </div>
        </div>
        <div className="col-12 col-lg-auto image-container">
          <ImageContainer image={imageSrc.src} />
        </div>
      </div>
    </StyledCard>
  );
}
 