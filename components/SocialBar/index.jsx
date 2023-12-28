import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faMedium, faXTwitter, faLinkedinIn, faGithub, faBehance } from '@fortawesome/free-brands-svg-icons'
import social from '../../public/assets/logos/constants'
import { StyledSocialBar } from './styles'

export const SocialBar = () => {
  return (
    <StyledSocialBar className='d-none d-sm-block'>
      <a href={social.github} target='_blank'>
        <FontAwesomeIcon
          icon={faGithub}
          className='social-icon'
          color='var(--main-blue)'
          size='lg'
          title='GitHub'
        />
      </a>
      <a href={social.linkedin} target='_blank'>
        <FontAwesomeIcon
          icon={faLinkedinIn}
          className='social-icon'
          color='var(--main-blue)'
          size='lg'
          title='LinkedIn'
        />
      </a>
      <a href={social.x} target='_blank'>
        <FontAwesomeIcon
          icon={faXTwitter}
          className='social-icon'
          color='var(--main-blue)'
          size='lg'
          title='X'
        />
      </a>
      <a href={social.medium} target='_blank'>
        <FontAwesomeIcon
          icon={faMedium}
          className='social-icon'
          color='var(--main-blue)'
          size='lg'
          title='Medium'
        />
      </a>
      <a href={social.instagram} target='_blank'>
        <FontAwesomeIcon
          icon={faInstagram}
          className='social-icon'
          color='var(--main-blue)'
          size='lg'
          title='Instagram'
        />
      </a>
      <a href={social.behance} target='_blank'>
        <FontAwesomeIcon
          icon={faBehance}
          className='social-icon'
          color='var(--main-blue)'
          size='lg'
          title='Behance'
        />
      </a>
    </StyledSocialBar>
  )
}
