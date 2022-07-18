import React from 'react'
import Styled from '@emotion/styled'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import social from './icons/constants'

const StyledSocialBar = Styled.div`

  position: fixed;
  float: right;
  top: 50%;
  right: 0;
  max-width: 80px;
  -webkit-transform: translate(0, -50%);
  -o-transform: translate(0, -50%);
  transform: translate(0, -50%);
  z-index: 1;
  padding: 4px 0px;
  background: var(--black);
  opacity: .75;
  backdrop-filter: blur(4px);
  overflow-x: hidden;
  border-radius: 8px 0px 0px 8px;
  
  .social-icon {
    display: inline-block;
    width: 100%;
    padding: 8px 0px;
  }
  
  .social-icon:hover {
    color: white;
  }
  
`

const SocialBar = () => {
  return (
    <StyledSocialBar className='d-none d-sm-block'>
      <a href={social.github} target='_blank' rel='noreferrer'>
        <FontAwesomeIcon
          icon={['fab', 'github']}
          className='social-icon'
          color='var(--green-blue)'
          size='lg'
          title='GitHub'
        />
      </a>
      <a href={social.linkedin} target='_blank' rel='noreferrer'>
        <FontAwesomeIcon
          icon={['fab', 'linkedin-in']}
          className='social-icon'
          color='var(--green-blue)'
          size='lg'
          title='LinkedIn'
        />
      </a>
      <a href={social.instagram} target='_blank' rel='noreferrer'>
        <FontAwesomeIcon
          icon={['fab', 'instagram']}
          className='social-icon'
          color='var(--green-blue)'
          size='lg'
          title='Instagram'
        />
      </a>
      <a href={social.behance} target='_blank' rel='noreferrer'>
        <FontAwesomeIcon
          icon={['fab', 'behance']}
          className='social-icon'
          color='var(--green-blue)'
          size='lg'
          title='Behance'
        />
      </a>
    </StyledSocialBar>
  )
}

export default SocialBar
