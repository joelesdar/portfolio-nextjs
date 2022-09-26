import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Welcome } from '../components/Welcome'
import { Description } from '../components/Description'
import { SoftSkills } from '../components/SoftSkills'
import { Technologies } from '../components/Technologies'
import { Languages } from '../components/Languages'
import { Studies } from '../components/Studies'
import { Experience } from '../components/Experience'
import { Projects } from '../components/Projects'
// import { BlogBanner } from './BlogBanner'

export const Home = () => {
  const [numProjects, setNumProjects] = useState(0)

  return (
    <>
      <Welcome />
      <Description />
      {/* <BlogBanner /> */}
      <Technologies />
      <SoftSkills />
      <Languages />
      <Studies />
      <Experience />
      <Projects numProjects={numProjects} setNumProjects={setNumProjects} />
    </>
  )
}
