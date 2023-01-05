import { StyledCard } from './styles'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from 'react-router-dom'

export const BlogCard = ({ post }) => {
  return (
    <StyledCard>
      <NavLink to={`/blog/${post.slug}`}>
        <div className='card'>
          <img src={post.cover} className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>{post.title}</h5>
            <p className='card-text'>{post.description}</p>
          </div>
        </div>
      </NavLink>
    </StyledCard>
  )
}
