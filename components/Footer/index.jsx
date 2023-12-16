import { useTranslation } from 'next-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBootstrap, faReact } from '@fortawesome/free-brands-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { StyledFooter } from './styles'

export const Footer = () => {
  const date = new Date().getFullYear()
  const { t } = useTranslation()

  return (
    <StyledFooter>
      <div className='message'>
        <p>{t('message-footer.first-part')}</p>
        <FontAwesomeIcon
          icon={faHeart}
          className='heart-icon'
          size='lg'
        />
        <p>{t('message-footer.second-part')}</p>
        <FontAwesomeIcon
          icon={faReact}
          className='react-icon'
          size='lg'
        />
        <FontAwesomeIcon
          icon={faBootstrap}
          className='bootstrap-icon'
          size='lg'
        />
        <div>
          <p className='copyright'> &copy;</p>
          <span className='copyright' id='year'>{date}</span>
          <p> <span className='copyright'>joelesdar.com</span> - {t('rights')}</p>
        </div>
      </div>
    </StyledFooter>
  )
}
