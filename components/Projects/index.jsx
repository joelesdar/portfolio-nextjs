import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import { Project } from '../Project'
import { StyledProjects } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import cover1 from '../../public/assets/projects/project1.webp'
import cover2 from '../../public/assets/projects/project2.webp'
import cover3 from '../../public/assets/projects/project3.webp'
import cover4 from '../../public/assets/projects/project4.webp'
import cover5 from '../../public/assets/projects/project5.webp'
import cover6 from '../../public/assets/projects/project6.webp'
import cover7 from '../../public/assets/projects/project7.webp'
import cover8 from '../../public/assets/projects/project8.webp'
import cover9 from '../../public/assets/projects/project9.webp'
import { motion } from 'framer-motion'

export const Projects = () => {
  const { t } = useTranslation()
  const [showMoreProjects, setShowMoreProjects] = useState(false);

  const toggleProjectsVisibility = () => {
    setShowMoreProjects(!showMoreProjects);
  }

  return (
    <StyledProjects>
      <div className='container'>
        <div className='row align-items-center justify-content-around'>
          <div className='col-10'>
              <motion.h2 
                className='title'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 100 }}
                viewport={{ once: true }}
                transition={{duration: 1}}>
                {t('title-projects')}
              </motion.h2>
            <motion.div 
              className='row justify-content-around '
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 100 }}
              viewport={{ once: true }}
              transition={{duration: 1}}>
              <div className='col-12 col-md-6 col-lg-4'>
                  <Project
                    title={t('projects.project1.title')}
                    cover={cover1}
                    libraries='React GraphQL'
                    github='https://github.com/joelesdar/petgram'
                    link='https://petgram-mu-five.vercel.app/'
                  />
              </div>
              <div className='col-12 col-md-6 col-lg-4'>
                  <Project
                    title={t('projects.project2.title')}
                    cover={cover2}
                    libraries='React Bootstrap API'
                    github='https://github.com/joelesdar/BreakingBadQuotes'
                    link='https://epic-austin-92bc71.netlify.app'
                  />
              </div>
              <div className='col-12 col-md-6 col-lg-4 d-md-none d-lg-block'>
                  <Project
                    title={t('projects.project3.title')}
                    cover={cover3}
                    libraries='React GraphQL API'
                    github='https://github.com/joelesdar/Rick-and-Morty-Generator'
                    link='https://rick-and-morty-generator-9hdb.vercel.app/'
                  />
              </div>
            </motion.div>
            {showMoreProjects && (
              <div
                className='row justify-content-around'
              >
                <div className='col-6 col-md-6 col-lg-4 d-none d-md-block d-lg-none'>
                    <Project
                      title={t('projects.project3.title')}
                      cover={cover3}
                      libraries='React GraphQL API'
                      github='https://github.com/joelesdar/Rick-and-Morty-Generator'
                      link='https://rick-and-morty-generator-9hdb.vercel.app/'
                    />
                </div>
                <div className='col-12 col-md-6 col-lg-4'>
                    <Project
                      title={t('projects.project4.title')}
                      cover={cover4}
                      libraries='Solidity React web3.js'
                      github='https://github.com/joelesdar/platzi-web3-libs'
                      link='https://platzi-web3-libs-roan.vercel.app/'
                    />
                </div>
                <div className='col-12 col-md-6 col-lg-4'>
                  <Project
                    title={t('projects.project5.title')}
                    cover={cover5}
                    libraries='React Bootstrap'
                    github='https://github.com/joelesdar/citas-veterinaria'
                    link='https://naughty-meitner-fb09b8.netlify.app/'
                  />
                </div>
                <div className='col-12 col-md-6 col-lg-4'>
                  <Project
                    title={t('projects.project6.title')}
                    cover={cover6}
                    libraries='React Bootstrap'
                    github='https://github.com/joelesdar/Cotizador'
                    link='https://practical-turing-dd2d5e.netlify.app/'
                  />
                </div>
                <div className='col-12 col-md-6 col-lg-4'>
                  <Project
                    title={t('projects.project7.title')}
                    cover={cover7}
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
                      title={t('projects.project9.title')}
                      cover={cover9}
                      libraries='React Bootstrap'
                      github='https://github.com/joelesdar/presupuesto'
                      link='https://epic-wright-64d8a7.netlify.app/'
                    />
                </div>
              </div>
            )
          }
          <motion.div 
            className="row justify-content-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 100 }}
            viewport={{ once: true }}
            transition={{duration: 1}}>
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
            </motion.div>
          </div>
        </div>
      </div>
    </StyledProjects>
  )
}
