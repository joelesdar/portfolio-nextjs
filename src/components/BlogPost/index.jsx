import 'bootstrap/dist/css/bootstrap.min.css'
import { useParams } from 'react-router-dom'
import blogdata from '../../posts.json'
import { StyledPost } from './styles'
// import { EDPPost } from '../../BlogPost/EDPPost'
/* eslint-disable import/no-webpack-loader-syntax */
import Content from '!@mdx-js/loader!../../BlogPost/Ethereum-Developer-Program.mdx'

export const BlogPost = ({ post }) => {
  const { slug } = useParams()
  const blogpost = blogdata.find(post => post.slug === slug)
  // const blocks = blogpost.blocks
  return (
    <StyledPost imgUrl={blogpost.cover}>
      <div className='post-cover'>
        <div className='cover' />
        <h1>{blogpost.title}</h1>
        {/* <img src={blogpost.cover} alt='...' /> */}
      </div>
      <div className='container post-body'>
        <div className='row justify-content-around'>
          <div className='col-10 col-md-8'>
            <Content />
          </div>
          <div className='col-2'>Cuadrito tuturutu</div>
        </div>
      </div>
    </StyledPost>
  )
}
