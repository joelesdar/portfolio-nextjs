import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import { Project } from '../Project'
import { StyledProjects } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import cover1 from '../../assets/project1.png'
import cover2 from '../../assets/project2.png'
import cover3 from '../../assets/project3.png'
import cover4 from '../../assets/project4.png'
import cover5 from '../../assets/project5.png'
import cover8 from '../../assets/project8.png'
import cover11 from '../../assets/project11.jpg'
import cover12 from '../../assets/project12.jpg'
import cover13 from '../../assets/project13.png'

export const Projects = () => {
  const { t } = useTranslation()
  const [showMessage, changeMessage] = useState(t('show-more-projects'))

  const updateMessage = () => {
    showMessage === t('show-more-projects')
      ? changeMessage(t('show-less-projects'))
      : changeMessage(t('show-more-projects'))
  }

  const [showMoreProjects, setShowMoreProjects] = useState(false);

  const toggleProjectsVisibility = () => {
    setShowMoreProjects(!showMoreProjects);
  }

  return (
    <StyledProjects>
      <div className='container'>
        <div className='row align-items-center justify-content-around'>
          <div className='col-10'>
              <h2 className='title'>{t('title-projects')}</h2>
            <div className='row justify-content-around '>
              <div className='col-12 col-md-6 col-lg-4'>
                  <Project
                    title='Petgram'
                    cover={cover11}
                    libraries='React GraphQL'
                    github='https://github.com/joelesdar/petgram'
                    link='https://petgram-mu-five.vercel.app/'
                  />
              </div>
              <div className='col-12 col-md-6 col-lg-4'>
                  <Project
                    title={t('projects.project1.title')}
                    cover={cover1}
                    libraries='React Bootstrap API'
                    github='https://github.com/joelesdar/BreakingBadQuotes'
                    link='https://epic-austin-92bc71.netlify.app'
                  />
              </div>
              <div className='col-12 col-md-6 col-lg-4 d-md-none d-lg-block'>
                  <Project
                    title={t('projects.project12.title')}
                    cover={cover12}
                    libraries='React GraphQL API'
                    github='https://github.com/joelesdar/Rick-and-Morty-Generator'
                    link='https://rick-and-morty-generator-9hdb.vercel.app/'
                  />
              </div>
            </div>
            {showMoreProjects && (
              <div
                className='row justify-content-around'
              >
                <div className='col-6 col-md-6 col-lg-4 d-none d-md-block d-lg-none'>
                    <Project
                      title={t('projects.project12.title')}
                      cover={cover12}
                      libraries='React GraphQL API'
                      github='https://github.com/joelesdar/Rick-and-Morty-Generator'
                      link='https://rick-and-morty-generator-9hdb.vercel.app/'
                    />
                </div>
                <div className='col-12 col-md-6 col-lg-4'>
                    <Project
                      title={t('projects.project13.title')}
                      cover={cover13}
                      libraries='Solidity React web3.js'
                      github='https://github.com/joelesdar/platzi-web3-libs'
                      link='https://platzi-web3-libs-roan.vercel.app/'
                    />
                </div>
                <div className='col-12 col-md-6 col-lg-4'>
                  <Project
                    title={t('projects.project4.title')}
                    cover={cover4}
                    libraries='React Bootstrap'
                    github='https://github.com/joelesdar/citas-veterinaria'
                    link='https://naughty-meitner-fb09b8.netlify.app/'
                  />
                </div>
                <div className='col-12 col-md-6 col-lg-4'>
                  <Project
                    title={t('projects.project2.title')}
                    cover={cover2}
                    libraries='React Bootstrap'
                    github='https://github.com/joelesdar/Cotizador'
                    link='https://practical-turing-dd2d5e.netlify.app/'
                  />
                </div>
                <div className='col-12 col-md-6 col-lg-4'>
                  <Project
                    title={t('projects.project5.title')}
                    cover={cover5}
                    libraries='JavaScript'
                    github='https://github.com/joelesdar/Tarjeta-Portafolio'
                    link='https://joelesdar.github.io/Tarjeta-Portafolio/'
                  />
                </div>
                <div className='col-12 col-md-6 col-lg-4'>
                  <Project
                    title={t('projects.project8.title')}
                    cover={cover8}
                    libraries='JavaScript'
                    github='https://github.com/joelesdar/Xilofono-JavaScript'
                    link='https://joelesdar.github.io/Xilofono-JavaScript/'
                  />
                </div>
                <div className='col-12 col-md-6 col-lg-4'>
                    <Project
                      title={t('projects.project3.title')}
                      cover={cover3}
                      libraries='React Bootstrap'
                      github='https://github.com/joelesdar/presupuesto'
                      link='https://epic-wright-64d8a7.netlify.app/'
                    />
                </div>
              </div>
            )
          }
          <div className="row justify-content-center">
            <button
                className='button-projects'
                onClick={toggleProjectsVisibility}
              >
                { showMoreProjects ?
                  <FontAwesomeIcon
                    icon={faChevronUp}
                    className='social-icon'
                    size='3x'
                    title='Instagram'
                  />
                :
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className='social-icon'
                    size='3x'
                    title='Instagram'
                  />
                }
              </button>
          </div>
          </div>
        </div>
      </div>
    </StyledProjects>
  )
}
