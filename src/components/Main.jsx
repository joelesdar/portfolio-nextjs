import React from 'react'
import Styled from '@emotion/styled'
import 'bootstrap/dist/css/bootstrap.min.css'
import Welcome from './Welcome'
import { Description } from './Description'
import { Contact } from './Contact'
import SocialBar from './SocialBar'
import SoftSkills from './SoftSkills'
import Technologies from './Technologies'
import Languages from './Languages'
import Studies from './Studies'
import Experience from './Experience'
import Projects from './Projects'
import { BlogBanner } from './BlogBanner'

const StyledMain = Styled.div`
    overflow: hidden;
`

const Main = () => {
  return (
    <StyledMain>
      <Welcome />
      <Description />
      <BlogBanner />
      <Technologies />
      <SoftSkills />
      <Languages />
      <Studies />
      <Experience />
      <Projects />
      <Contact />
      <SocialBar />
    </StyledMain>
  )
}

export default Main
