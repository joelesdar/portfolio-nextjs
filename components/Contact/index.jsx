import { useTranslation } from 'next-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faMedium, faXTwitter, faLinkedinIn, faGithub, faBehance } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import social from '../../assets/constants'
import { ContactContainer } from './styles'
import 'bootstrap/dist/css/bootstrap.min.css'

export const Contact = () => {
  const { t } = useTranslation()

  return (
    <ContactContainer>
      <div className='container' id='contact'>
        <div className='row align-items-center justify-content-around'>
          <div className='col-10'>
            <div className='social row justify-content-center'>
              <div className='find-me col-12'>
                <h5 className='title'>{t('title-contact')}</h5>
                <h4 className='at'>✨@Joelesdar</h4>
              </div>
              <div className='col-2'>
                <a href={social.github} target='_blank' rel='noreferrer'>
                  <FontAwesomeIcon
                    icon={faGithub}
                    className='social-icon'
                    color='var(--main-blue)'
                    size='2xl'
                    title='GitHub'
                  />
                </a>
              </div>
              <div className='col-2'>
                <a href={social.linkedin} target='_blank' rel='noreferrer'>
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className='social-icon'
                    color='var(--main-blue)'
                    size='2xl'
                    title='LinkedIn'
                  />
                </a>
              </div>
              <div className='col-2'>
                <a href={social.twitter} target='_blank' rel='noreferrer'>
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    className='social-icon'
                    color='var(--main-blue)'
                    size='2xl'
                    title='X'
                  />
                </a>
              </div>
              <div className='col-2'>
                <a href={social.medium} target='_blank' rel='noreferrer'>
                  <FontAwesomeIcon
                    icon={faMedium}
                    className='social-icon'
                    color='var(--main-blue)'
                    size='2xl'
                    title='Medium'
                  />
                </a>
              </div>
              <div className='col-2'>
                <a href={social.instagram} target='_blank' rel='noreferrer'>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className='social-icon'
                    color='var(--main-blue)'
                    size='2xl'
                    title='Instagram'
                  />
                </a>
              </div>
              <div className='col-2'>
                <a href={social.behance} target='_blank' rel='noreferrer'>
                  <FontAwesomeIcon
                    icon={faBehance}
                    className='social-icon'
                    color='var(--main-blue)'
                    size='2xl'
                    title='Behance'
                  />
                </a>
              </div>
              <div className='col-12'>
                <a className='btn btn-primary' href='mailto:jodiazare@gmail.com'>{t('link-contact')}</a>

                <p className='mail'><FontAwesomeIcon
                  icon={faEnvelope}
                  className='social-icon'
                  color='var(--main-blue)'
                  size='1x'
                  title='mail'
                /> Jodiazare@gmail.com
                </p>
                <p className='mail'><FontAwesomeIcon
                  icon={faPhone}
                  className='social-icon'
                  color='var(--main-blue)'
                  size='1x'
                  title='mail'
                /> +57 3225504022
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContactContainer>
  )
}
