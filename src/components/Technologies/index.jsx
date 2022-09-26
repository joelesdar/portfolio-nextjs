import { useTranslation } from 'react-i18next'
import { Rotate, Fade } from 'react-reveal'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../../assets/logo.png'
import { StyledTechnologies } from './styles'

export const Technologies = () => {
  const { t } = useTranslation()

  return (
    <StyledTechnologies>
      <div className='container-fluid' id='technologies'>
        <div className='row justify-content-around align-items-center'>
          <Rotate duration='2000'>
            <div className='col-12 col-md-7 col-lg-6'>
              <div class='orbit'>
                <ul class='orbit-wrap'>
                  <li class='orbit-center'>
                    <i class='orbit-center__icon logo'>
                      <img src={logo} alt='Logo' />
                    </i>
                  </li>
                  <li>
                    <ul class='ring-1'>
                      <li>
                        <i class='orbit-icon cloud-icon'>
                          <FontAwesomeIcon
                            icon={['fas', 'cloud']}
                            size='lg'
                          />
                        </i>
                      </li>
                      <li>
                        <i class='orbit-icon windows-icon'>
                          <FontAwesomeIcon
                            icon={['fab', 'windows']}
                            size='lg'
                          />
                        </i>
                      </li>
                      <li>
                        <i class='orbit-icon dialogflow-icon'>
                          <FontAwesomeIcon
                            icon={['fab', 'bots']}
                            size='lg'
                          />
                        </i>
                      </li>
                      <li>
                        <i class='orbit-icon figma-icon'>
                          <img src='https://img.icons8.com/color/48/000000/figma--v1.png' />
                        </i>
                      </li>
                      <li>
                        <i class='orbit-icon photoshop-icon'>
                          <img src='https://img.icons8.com/color/48/000000/adobe-photoshop--v1.png' />
                        </i>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul class='ring-2'>
                      <li>
                        <i class='orbit-icon react-icon'>
                          <FontAwesomeIcon
                            icon={['fab', 'react']}
                            size='lg'
                          />
                        </i>
                      </li>
                      <li>
                        <i class='orbit-icon js-icon'>
                          <FontAwesomeIcon
                            icon={['fab', 'js-square']}
                            size='lg'
                          />
                        </i>
                      </li>
                      <li>
                        <i class='orbit-icon java-icon'>
                          <FontAwesomeIcon
                            icon={['fab', 'java']}
                            size='lg'
                          />
                        </i>
                      </li>
                      <li>
                        <i class='orbit-icon git-icon'>
                          <FontAwesomeIcon
                            icon={['fab', 'git-alt']}
                            size='lg'
                          />
                        </i>
                      </li>
                      <li>
                        <i class='orbit-icon database-icon'>
                          <FontAwesomeIcon
                            icon={['fas', 'database']}
                            size='lg'
                          />
                        </i>
                      </li>
                      <li>
                        <i class='orbit-icon wordpress-icon'>
                          <FontAwesomeIcon
                            icon={['fab', 'wordpress']}
                            size='lg'
                          />
                        </i>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul class='ring-3'>
                      <li>
                        <i class='orbit-icon css-icon'>
                          <FontAwesomeIcon
                            icon={['fab', 'css3']}
                            size='lg'
                          />
                        </i>
                      </li>
                      <li>
                        <i class='orbit-icon html-icon'>
                          <FontAwesomeIcon
                            icon={['fab', 'html5']}
                            size='lg'
                          />
                        </i>
                      </li>
                      <li>
                        <i class='orbit-icon bootstrap-icon'>
                          <FontAwesomeIcon
                            icon={['fab', 'bootstrap']}
                            size='lg'
                          />
                        </i>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </Rotate>
          <Fade right duration='2000'>
            <div className='col-12 col-md-5 col-lg-6'>
              <div className='row justify-content-center'>
                <div className='col-10'>
                  <h2 className='title-technologies'>
                    {t('title-technologies')}
                  </h2>
                  <p>{t('description-technologies')}</p>
                </div>
                <div className='col-5'>
                  <p>{t('description-specialized-technologies')}</p>
                  <ul className='tech-list'>
                    <li>Git, Github</li>
                    <li>HTML5, CSS3</li>
                    <li>Bootstrap</li>
                    <li>Wordpress</li>
                    <li>JavaScript</li>
                    <li>React.js</li>
                    <li>Solidity</li>
                    <li>Smart Contracts</li>
                  </ul>
                </div>
                <div className='col-5'>
                  <p>{t('description-more-technologies')}</p>
                  <ul className='tech-list'>
                    <li>Google Cloud</li>
                    <li>Microsoft Office</li>
                    <li>Photoshop</li>
                    <li>Figma</li>
                  </ul>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </StyledTechnologies>
  )
}
