import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
                <p className='title'>{t('title-contact')}</p>
                <p className='at'>✨@Joelesdar</p>
              </div>
              <div className='col-2'>
                <a href={social.github} target='_blank' rel='noreferrer'>
                  <FontAwesomeIcon
                    icon={['fab', 'github']}
                    className='social-icon'
                    color='var(--green-blue)'
                    size='2xl'
                    title='GitHub'
                  />
                </a>
              </div>
              <div className='col-2'>
                <a href={social.linkedin} target='_blank' rel='noreferrer'>
                  <FontAwesomeIcon
                    icon={['fab', 'linkedin-in']}
                    className='social-icon'
                    color='var(--green-blue)'
                    size='2xl'
                    title='LinkedIn'
                  />
                </a>
              </div>
              <div className='col-2'>
                <a href={social.twitter} target='_blank' rel='noreferrer'>
                  <FontAwesomeIcon
                    icon={['fab', 'twitter']}
                    className='social-icon'
                    color='var(--green-blue)'
                    size='2xl'
                    title='Twitter'
                  />
                </a>
              </div>
              <div className='col-2'>
                <a href={social.instagram} target='_blank' rel='noreferrer'>
                  <FontAwesomeIcon
                    icon={['fab', 'instagram']}
                    className='social-icon'
                    color='var(--green-blue)'
                    size='2xl'
                    title='Instagram'
                  />
                </a>
              </div>
              <div className='col-2'>
                <a href={social.behance} target='_blank' rel='noreferrer'>
                  <FontAwesomeIcon
                    icon={['fab', 'behance']}
                    className='social-icon'
                    color='var(--green-blue)'
                    size='2xl'
                    title='Behance'
                  />
                </a>
              </div>
              <div className='col-12'>
                <a className='btn btn-primary' href='mailto:jodiazare@gmail.com'>{t('link-contact')}</a>

                <p className='mail'><FontAwesomeIcon
                  icon={['fas', 'envelope']}
                  className='social-icon'
                  color='var(--green-blue)'
                  size='md'
                  title='mail'
                                    /> Jodiazare@gmail.com
                </p>
                <p className='mail'><FontAwesomeIcon
                  icon={['fas', 'phone']}
                  className='social-icon'
                  color='var(--green-blue)'
                  size='md'
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
