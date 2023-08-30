import { useTranslation } from 'react-i18next'
// import Fade from 'react-reveal/Fade'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import { StyledName } from './styles'
import { useEffect } from 'react'


export const Name = () => {

  useEffect(() => {
    window.addEventListener('scroll', function (e) {
      const positionX = window.scrollY / 10
      const positionY = window.scrollY / 10
      $('.title').css({ 'background-position': positionX + '%' + positionY + '%' })
    })
  }, [])

  const { t } = useTranslation()

  return (
    <StyledName>
      <div className='styled-name-container'>
        <div className='name-container'>
          {/* <Fade top duration={2000}> */}
            <div className='title'>Joel Diaz Arévalo</div>
          {/* </Fade> */}
          {/* <Fade bottom duration={2000}> */}
            <div className='subtitle'>{t('subtitle')}</div>
          {/* </Fade> */}
        </div>
      </div>
    </StyledName>
  )
}
