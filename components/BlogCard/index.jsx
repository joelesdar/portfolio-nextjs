import Image from 'next/image'
import { StyledCard } from './styles'
import Link from 'next/link'
import { motion } from 'framer-motion'

export const BlogCard = ({ post }) => {

  const ImageSrc = require(`../../public/assets/blog/${post.cover}`).default

  return (
    <StyledCard>
      <Link key={post.link} href={post.link} target='_blank'>
        <div className='card'>
          <Image src={ImageSrc} className='card-img-top' alt='...'/>
          <div className='card-body'>
            <h6 className='card-title'>{post.title}</h6>
            <p className='card-text'>{post.description.substring(0, 190)}...</p>
          </div>
        </div>
      </Link>
    </StyledCard>
  )
}
