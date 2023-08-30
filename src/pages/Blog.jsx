import { BlogCard } from '../components/BlogCard'
// import Fade from 'react-reveal/Fade'
import 'bootstrap/dist/css/bootstrap.min.css'
import blogdata from '../posts.json'

export const Blog = () => {
  return (
    <>
      <div className='container'>
        <div className='row align-items-center justify-content-around'>
          <div className='col-10'>
            {/* <Fade duration='1500'> */}
              <h1>Blog</h1>
            {/* </Fade> */}
            <div className='row justify-content-around'>
              {blogdata.map(post => (
                <div key={post.id} className='col-12 col-md-4'>
                  {/* <Fade> */}
                    <BlogCard key={post.id} post={post} />
                  {/* </Fade> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
