import { CardContainer, ImageContainer, TextContainer } from './styles'
import Link from 'next/link'
import Image from 'next/image';

export const EventsCard = ({ post }) => {

  const { id, title, description, cover, link } = post
  const imageSrc = require(`../../assets/events/${cover}`).default

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
                <Link key={link} href={`${post.link}`} target='_blank'>
                <div className="card-link">
                  <span>Saber más</span>
                </div>
                </Link>
          </div>
        </TextContainer>
    </CardContainer>
  )
}
