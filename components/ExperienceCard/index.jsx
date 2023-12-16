import { useTranslation } from 'next-i18next'
import { StyledCard, ImageContainer } from './styles'

export const ExperienceCard = ({ post }) => {

  const { title, description, link, cover } = post
  const imageSrc = require(`../../assets/work/${cover}`).default

  return (
    <StyledCard className="row align-items-center justify-content-between">
      <div className="col-12 col-xl-9">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="col-12 col-xl-2 image-container">
        <ImageContainer image={imageSrc.src} />
      </div>
    </StyledCard>
  );
}
 