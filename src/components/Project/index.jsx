import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StyledProject } from './styles'

export const Project = ({ title, description, cover, libraries, github, link }) => {
  return (
    <StyledProject>
      <div className='card'>
        <img src={cover} className='card-img-top' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>{description}</p>
          <div className='row justify-content-between'>
            <div className='libraries col-auto'>
              <p>{libraries}</p>
            </div>
            <div className='col-auto'>
              <a href={github} target='_blank' rel='noreferrer'>
                <FontAwesomeIcon className='icon' icon={['fab', 'github']} color='var(--green-blue)' size='xl' />
              </a>
              <a href={link} target='_blank' rel='noreferrer'>
                <FontAwesomeIcon className='icon' icon={['fas', 'arrow-up-right-from-square']} color='var(--green-blue)' size='xl' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </StyledProject>
  )
}
