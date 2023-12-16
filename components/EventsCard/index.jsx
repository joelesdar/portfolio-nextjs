import { CardContainer, ImageContainer, TextContainer } from './styles'
import Link from 'next/link'

export const EventsCard = ({ post }) => {

  const { id, title, description, cover, link } = post;

  const imageSrc = require(`../../assets/events/${cover}`).default;

  return (
    <CardContainer>
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
        <ImageContainer image={imageSrc.src} />
    </CardContainer>
  )
}

{/* <div className='card'>
  <div className='card-body'>
    <h6 className='card-title'>{post.title}</h6>
    <p className='card-text'>{post.description.substring(0, 120)}...</p>
  </div>
  <div className="card-img">
    <img src={post.cover} className='card-img-top' alt='...' />
  </div>
</div> */}