import { useTranslation } from 'next-i18next'
import { StyledCard, ImageContainer } from './styles'

export const ExperienceCard = ({ post }) => {

  const { titleEn, titleEs, titleFr, descriptionEn, descriptionEs, descriptionFr, cover } = post
  const imageSrc = require(`../../assets/work/${cover}`).default
  const { i18n } = useTranslation()
  const currentLanguage = i18n.language
  let title = ''
  let description = ''

  if(currentLanguage === 'en') {
    title = titleEn
    description = descriptionEn
  } else if (currentLanguage === 'es') {
    title = titleEs
    description = descriptionEs
  } else if (currentLanguage === 'fr') {
      title = titleFr
      description = descriptionFr
  }

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
 