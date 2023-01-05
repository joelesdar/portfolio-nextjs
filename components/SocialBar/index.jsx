import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import social from '../../assets/constants'
import { StyledSocialBar } from './styles'

export const SocialBar = () => {
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
      <a href={social.twitter} target='_blank' rel='noreferrer'>
        <FontAwesomeIcon
          icon={['fab', 'twitter']}
          className='social-icon'
          color='var(--green-blue)'
          size='lg'
          title='Twitter'
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
