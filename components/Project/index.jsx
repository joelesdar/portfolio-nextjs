import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { StyledProject } from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export const Project = ({ title, description, cover, libraries, github, link }) => {
  return (
    <StyledProject>
      <div className='card'>
        <Image src={cover} className='card-img-top' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>{description}</p>
          <div className='row justify-content-between'>
            <div className='libraries col-auto'>
              <p>{libraries}</p>
            </div>
            <div className='col-auto'>
              <a href={github} target='_blank' rel='noreferrer'>
                <FontAwesomeIcon
                  icon={faGithub}
                  className='icon'
                  color='var(--green-blue)'
                  size='xl'
                  title='GitHub'
                />
              </a>
              <a href={link} target='_blank' rel='noreferrer'>
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className='icon'
                  color='var(--green-blue)'
                  size='xl'
                  title='Link'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </StyledProject>
  )
}
