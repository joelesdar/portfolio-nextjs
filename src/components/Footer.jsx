import React from 'react'
import Styled from '@emotion/styled'
import { useTranslation } from 'react-i18next'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledFooter = Styled.div`

    background: var(--intense-blue);
    text-align: center;

    .message {
        padding: 16px 0;
        p {
            margin: 0px;
            display: inline;
        }
        .react-icon {
            color: #00d8ff;
        }
        .bootstrap-icon {
            color: #593377;
        }
        .heart-icon {
            color: var(--green-blue);
        }
        .copyright {
            color: var(--green-blue);

        }
    }
    
`

const Footer = () => {
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

export default Footer
