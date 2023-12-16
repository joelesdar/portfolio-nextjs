import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import { Project } from '../Project'
import { StyledProjects } from './styles'
import cover1 from '../../assets/project1.png'
import cover2 from '../../assets/project2.png'
import cover3 from '../../assets/project3.png'
import cover4 from '../../assets/project4.png'
import cover5 from '../../assets/project5.png'
// import cover6 from '../../assets/project6.jpg'
import cover7 from '../../assets/project7.png'
import cover8 from '../../assets/project8.png'
// import cover9 from '../../assets/project9.jpg'
// import cover10 from '../../assets/project10.png'
import cover11 from '../../assets/project11.jpg'
import cover12 from '../../assets/project12.jpg'
import cover13 from '../../assets/project13.png'

export const Projects = ({ numProjects }) => {
  const { t } = useTranslation()
  const [showMessage, changeMessage] = useState(t('show-more-projects'))

  const updateMessage = () => {
    showMessage === t('show-more-projects')
      ? changeMessage(t('show-less-projects'))
      : changeMessage(t('show-more-projects'))
  }

  return (
    <StyledProjects>
      <div className='container' id='projects'>
        <div className='row align-items-center justify-content-around'>
          <div className='col-10'>
            {/* <Fade duration={1500}> */}
              <h2 className='title'>{t('title-projects')}</h2>
            {/* </Fade> */}
            {/* <Fade duration={1500}> */}
              <h3>{t('subtitle-projects')}</h3>
            {/* </Fade> */}
            <div className='row justify-content-around'>
              <div className='col-12 col-md-6'>
                {/* <Fade bottom duration={2000}> */}
                  <Project
                    title='Petgram'
                    description={t('projects.project11.description')}
                    cover={cover11}
                    libraries='React GraphQL'
                    github='https://github.com/joelesdar/petgram'
                    link='https://petgram-mu-five.vercel.app/'
                  />
                {/* </Fade> */}
              </div>
              <div className='col-12 col-md-6'>
                {/* <Fade bottom duration={2000}> */}
                  <Project
                    title={t('projects.project1.title')}
                    description={t('projects.project1.description')}
                    cover={cover1}
                    libraries='React Bootstrap API'
                    github='https://github.com/joelesdar/BreakingBadQuotes'
                    link='https://epic-austin-92bc71.netlify.app'
                  />
                {/* </Fade> */}
              </div>
              <div className='col-12 col-md-6'>
                {/* <Fade bottom duration={2000}> */}
                  <Project
                    title={t('projects.project12.title')}
                    description={t('projects.project12.description')}
                    cover={cover12}
                    libraries='React GraphQL API'
                    github='https://github.com/joelesdar/Rick-and-Morty-Generator'
                    link='https://rick-and-morty-generator-9hdb.vercel.app/'
                  />
                {/* </Fade> */}
              </div>
              {/* <div className='col-12 col-md-6'>
                <Fade bottom duration='2000'>
                  <Project
                    title={t('projects.project9.title')}
                    description={t('projects.project9.description')}
                    cover={cover9}
                    libraries='C#'
                    github='https://github.com/joelesdar/Proyecto-Gokubos'
                    link='https://www.behance.net/gallery/138661033/Proyecto-Gokubos'
                  />
                </Fade>
              </div> */}
              <div className='col-12 col-md-6'>
                {/* <Fade bottom duration={2000}> */}
                  <Project
                    title={t('projects.project13.title')}
                    description={t('projects.project13.description')}
                    cover={cover13}
                    libraries='Solidity React ethers.js web3.js'
                    github='https://github.com/joelesdar/platzi-web3-libs'
                    link='https://platzi-web3-libs-roan.vercel.app/'
                  />
                {/* </Fade> */}
              </div>
            </div>
            <a
              className='btn btn-primary'
              data-toggle='collapse'
              href='#collapseExample'
              role='button'
              aria-expanded='false'
              aria-controls='collapseExample'
              onClick={() => updateMessage()}
            >
              {showMessage}
            </a>
            <div
              className='collapse row justify-content-around'
              id='collapseExample'
            >
              <div className='col-12'>
                {/* <Fade duration={1500}> */}
                  <h3>{t('subtitle-more-projects')}</h3>
                {/* </Fade> */}
              </div>
              <div className='col-12 col-md-6'>
                {/* <Fade bottom duration={2000}> */}
                  <Project
                    title={t('projects.project4.title')}
                    description={t('projects.project4.description')}
                    cover={cover4}
                    libraries='React Bootstrap'
                    github='https://github.com/joelesdar/citas-veterinaria'
                    link='https://naughty-meitner-fb09b8.netlify.app/'
                  />
                {/* </Fade> */}
              </div>
              <div className='col-12 col-md-6'>
                {/* <Fade bottom duration={2000}> */}
                  <Project
                    title={t('projects.project2.title')}
                    description={t('projects.project2.description')}
                    cover={cover2}
                    libraries='React Bootstrap'
                    github='https://github.com/joelesdar/Cotizador'
                    link='https://practical-turing-dd2d5e.netlify.app/'
                  />
                {/* </Fade> */}
              </div>
              <div className='col-12 col-md-6'>
                {/* <Fade bottom duration={2000}> */}
                  <Project
                    title={t('projects.project5.title')}
                    description={t('projects.project5.description')}
                    cover={cover5}
                    libraries='JavaScript'
                    github='https://github.com/joelesdar/Tarjeta-Portafolio'
                    link='https://joelesdar.github.io/Tarjeta-Portafolio/'
                  />
                {/* </Fade> */}
              </div>
              <div className='col-12 col-md-6'>
                {/* <Fade bottom duration={2000}> */}
                  <Project
                    title={t('projects.project8.title')}
                    description={t('projects.project8.description')}
                    cover={cover8}
                    libraries='JavaScript'
                    github='https://github.com/joelesdar/Xilofono-JavaScript'
                    link='https://joelesdar.github.io/Xilofono-JavaScript/'
                  />
                {/* </Fade> */}
              </div>
              <div className='col-12 col-md-6'>
                {/* <Fade bottom duration={2000}> */}
                  <Project
                    title={t('projects.project3.title')}
                    description={t('projects.project3.description')}
                    cover={cover3}
                    libraries='React Bootstrap'
                    github='https://github.com/joelesdar/presupuesto'
                    link='https://epic-wright-64d8a7.netlify.app/'
                  />
                {/* </Fade> */}
              </div>
              <div className='col-12 col-md-6'>
                {/* <Fade bottom duration={2000}> */}
                  <Project
                    title={t('projects.project7.title')}
                    description={t('projects.project7.description')}
                    cover={cover7}
                    libraries='HTML5 CSS3'
                    github='https://github.com/joelesdar/Portafolio'
                    link='https://joelesdar.github.io/Portafolio/'
                  />
                {/* </Fade> */}
              </div>
              {/* <div className='col-12 col-md-6'>
                <Fade bottom duration='2000'>
                  <Project
                    title={t('projects.project10.title')}
                    description={t('projects.project10.description')}
                    cover={cover10}
                    libraries='HTML5 CSS3'
                    github='https://github.com/joelesdar/Invie'
                    link='https://joelesdar.github.io/Invie/'
                  />
                </Fade>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </StyledProjects>
  )
}
