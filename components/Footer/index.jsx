import { useTranslation } from 'react-i18next'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StyledFooter } from './styles'

export const Footer = () => {
  const date = new Date().getFullYear()
  const { t } = useTranslation()

  return (
    <StyledFooter>
      <div className='message'>
        <p>{t('message-footer.first-part')}</p>
        <FontAwesomeIcon
          icon={['fas', 'heart']}
          className='heart-icon'
          size='lg'
        />
        <p>{t('message-footer.second-part')}</p>
        <FontAwesomeIcon
          icon={['fab', 'react']}
          className='react-icon'
          size='lg'
        />
        <FontAwesomeIcon
          icon={['fab', 'bootstrap']}
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
