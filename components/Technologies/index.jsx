import { useTranslation } from 'next-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareJs,faGitAlt, faWindows, faReact, faCss3, faHtml5, faEthereum, faWordpress, faBootstrap } from '@fortawesome/free-brands-svg-icons'
import { faCloud } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import Image from 'next/image'
import logo from '../../public/assets/logos/logo.webp'
import { StyledTechnologies } from './styles'

export const Technologies = () => {
  const { t } = useTranslation()

  return (
    <StyledTechnologies>
      <div className='container-fluid' id='technologies'>
        <div className="row justify-content-around">
          <div className="col-10">
            <div className='row justify-content-around'>
              <motion.div 
                className='col-12 col-md-7 col-lg-6 galaxy'
                initial={{ opacity: 0, rotate: -180}}
                whileInView={{ opacity: 100, rotate: 0}}
                viewport={{ once: true }}
                transition={{duration: 1}}>
                <div className='orbit'>
                  <ul className='orbit-wrap'>
                    <li className='orbit-center'>
                      <i className='orbit-center__icon logo'>
                        <Image src={logo} alt='Logo' />
                      </i>
                    </li>
                    <li>
                      <ul className='ring-1'>
                        <li>
                          <i className='orbit-icon cloud-icon'>
                          <FontAwesomeIcon icon={faCloud} size='lg' />
                          </i>
                        </li>
                        <li>
                          <i className='orbit-icon windows-icon'>
                            <FontAwesomeIcon icon={faWindows} size='lg' />
                          </i>
                        </li>
                        <li>
                          <i className='orbit-icon figma-icon'>
                            <Image src='https://img.icons8.com/color/48/000000/figma--v1.png' fill alt='figma icon'/>
                          </i>
                        </li>
                        <li>
                          <i className='orbit-icon photoshop-icon'>
                            <Image src='https://img.icons8.com/color/48/000000/adobe-photoshop--v1.png' fill alt='windows icon'/>
                          </i>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <ul className='ring-2'>
                        <li>
                          <i className='orbit-icon react-icon'>
                              <FontAwesomeIcon icon={faReact} size='lg' />
                          </i>
                        </li>
                        <li>
                          <i className='orbit-icon js-icon'>
                            <FontAwesomeIcon icon={faSquareJs} size='lg' />
                          </i>
                        </li>
                        <li>
                          <i className='orbit-icon ethereum-icon'>
                          <FontAwesomeIcon icon={faEthereum} size='lg' />
                          </i>
                        </li>
                        <li>
                          <i className='orbit-icon git-icon'>
                            <FontAwesomeIcon icon={faGitAlt} size='lg' />
                          </i>
                        </li>
                        <li>
                          <i className='orbit-icon wordpress-icon'>
                            <FontAwesomeIcon icon={faWordpress} size='lg' />
                          </i>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <ul className='ring-3'>
                        <li>
                          <i className='orbit-icon css-icon'>
                            <FontAwesomeIcon icon={faCss3} size='lg' />
                          </i>
                        </li>
                        <li>
                          <i className='orbit-icon html-icon'>
                            <FontAwesomeIcon icon={faHtml5} size='lg' />
                          </i>
                        </li>
                        <li>
                          <i className='orbit-icon bootstrap-icon'>
                            <FontAwesomeIcon icon={faBootstrap} size='lg' />
                          </i>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </motion.div>
              <motion.div
                className='col-12 col-md-5 col-lg-6'
                initial={{ opacity: 0, x: '100%'}}
                whileInView={{ opacity: 100, x: 0}}
                viewport={{ once: true }}
                transition={{duration: 1}}>
                <div className='row justify-content-center'>
                  <div className='col-12 col-sm-10'>
                    <h2 className='title-technologies'>
                      {t('title-technologies')}
                    </h2>
                    <p>{t('description-technologies')}</p>
                  </div>
                  <div className='col-6 col-sm-5'>
                    <p>{t('description-specialized-technologies')}</p>
                    <ul className='tech-list'>
                      <li>Git, Github</li>
                      <li>HTML5, CSS3</li>
                      <li>Bootstrap</li>
                      <li>Wordpress</li>
                      <li>JavaScript & TypeScript</li>
                      <li>React.js & Next.js</li>
                      <li>Solidity</li>
                    </ul>
                  </div>
                  <div className='col-6 col-sm-5'>
                    <p>{t('description-more-technologies')}</p>
                    <ul className='tech-list'>
                      <li>Google Cloud</li>
                      <li>Microsoft Office</li>
                      <li>Photoshop</li>
                      <li>Figma</li>
                      <li>Premiere Pro</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </StyledTechnologies>
  )
}
