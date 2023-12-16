import { StyledCard } from './styles'
import Link from 'next/link'

export const BlogCard = ({ post }) => {
  return (
    <StyledCard>
      <Link key={post.link} href={`${post.link}`} target='_blank'>
        <div className='card'>
          <img src={post.cover} className='card-img-top' alt='...' />
          <div className='card-body'>
            <h6 className='card-title'>{post.title}</h6>
            <p className='card-text'>{post.description.substring(0, 120)}...</p>
          </div>
        </div>
      </Link>
    </StyledCard>
  )
}
