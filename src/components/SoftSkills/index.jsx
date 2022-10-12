import { useTranslation } from 'react-i18next'
import Fade from 'react-reveal/Fade'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../../assets/logo.png'
import { StyledSoftSkills } from './styles'

export const SoftSkills = () => {
  const { t } = useTranslation()

  return (
    <StyledSoftSkills>
      <div className='container' id='skills'>
        <div className='row justify-content-around'>
          <div className='col-10'>
            <Fade duration='1500'>
              <h2>{t('title-softskills')}</h2>
            </Fade>
            <div className='row justify-content-around align-items-center'>
              <div className='description col-12 col-md-9 col-lg-10'>
                <p>{t('description-softskills')}</p>
              </div>
              <div className='col-6 col-md-3 col-lg-2'>
                <img className='logo' src={logo} alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledSoftSkills>
  )
}