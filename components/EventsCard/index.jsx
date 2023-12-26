import { CardContainer, ImageContainer, TextContainer } from './styles'
import Link from 'next/link'
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

export const EventsCard = ({ post }) => {

  const { titleEn, titleEs, titleFr, descriptionEn, descriptionEs, descriptionFr, cover, link1, link2 } = post
  const imageSrc = require(`../../public/assets/events/${cover}`).default
  const { t, i18n } = useTranslation()
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
    <CardContainer>
        <ImageContainer image={imageSrc.src}>
          <div className="image-overlay">
            <Image className="image" src={imageSrc} alt={title} />
          </div>
        </ImageContainer>
        <TextContainer>
          <div className="description-container">
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>{description}</p>
            <div className='card-buttons'>
                <Link className={`${link2 ? 'two-buttons' : ''}`} key={link1} href={`${link1}`} target='_blank'>
                <div className="card-link">
                  <span>{t('button-event-card-1')}</span>
                </div>
                </Link>
                {link2 !== '' && (
                <Link className={`${link2 ? 'two-buttons' : ''}`} key={link2} href={`${link2}`} target='_blank'>
                <div className="card-link">
                  <span>{t('button-event-card-2')}</span>
                </div>
                </Link>
                )}
            </div>
          </div>
        </TextContainer>
    </CardContainer>
  )
}
