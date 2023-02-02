import { StyledCard } from './styles'
import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link'

export const BlogCard = ({ post }) => {
  return (
    <StyledCard>
      <Link key={post.slug} href={`/${post.slug}`}>
        <div className='card'>
          <img src={post.cover} className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>{post.title}</h5>
            <p className='card-text'>{post.date}</p>
          </div>
        </div>
      </Link>
    </StyledCard>
  )
}
