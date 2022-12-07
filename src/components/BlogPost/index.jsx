import 'bootstrap/dist/css/bootstrap.min.css'
import { useParams } from 'react-router-dom'
import blogdata from '../../posts.json'

export const BlogPost = ({ post }) => {
  const { slug } = useParams()
  const blogpost = blogdata.find(post => post.slug === slug)
  return (
    <>
      <h1>{blogpost.title}</h1>
      <p>{blogpost.description}</p>
    </>
  )
}
